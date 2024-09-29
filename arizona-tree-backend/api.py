from fastapi import FastAPI, File, UploadFile
from canopy import *
from io import BytesIO
from PIL import Image
import requests
import os
import math
from dotenv import load_dotenv

load_dotenv()

app = FastAPI()


@app.get("/")
def read_root():
    return {"Hello": "World"}


@app.post("/canopy")
async def run_canopy(file: UploadFile = File(...)):
    if file.content_type != "image/png":
        return {"error": "Only PNG files are allowed."}

    # Read the image from the uploaded file
    image_data = await file.read()
    image = Image.open(BytesIO(image_data))

    # Run the canopy_coverage function with the image
    imagedata = canopy_coverage(image)

    return {"It worked!": "Success!", "data": imagedata}


@app.get("/canopy/{latitude}/{longitude}")
async def get_canopy(latitude: float, longitude: float):
    subscription_key = os.environ.get("AZURE_SUBSCRIPTION_KEY")
    zoom = 16
    n = 2.0 ** zoom
    x = int((longitude + 180.0) / 360.0 * n)
    y = int((1.0 - math.asinh(math.tan(math.radians(latitude))) / math.pi) / 2.0 * n)

    url = f"https://atlas.microsoft.com/map/tile?api-version=2024-04-01&tilesetId=microsoft.imagery&zoom={zoom}&x={x}&y={y}&tileSize=512&subscription-key={subscription_key}"

    response = requests.get(url)

    if response.status_code == 200:
        with open("satellite_tile.png", "wb") as file:
            file.write(response.content)
        print("Satellite tile downloaded successfully.")
    else:
        print(f"Failed to download tile. Status code: {response.status_code}")

    return {"status": response.status_code, "content": response.content}
