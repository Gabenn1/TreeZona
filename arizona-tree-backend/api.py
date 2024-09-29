from fastapi import FastAPI, File, UploadFile
from canopy import *
from io import BytesIO
from PIL import Image
import requests
import os
import math
from dotenv import load_dotenv
from fastapi.middleware.cors import CORSMiddleware


load_dotenv()

app = FastAPI()

app.add_middleware(
    CORSMiddleware,
    allow_origins=["http://localhost:3000"],  # Or ["*"] to allow all origins
    allow_credentials=True,
    allow_methods=["*"],  # Or specify ['GET', 'POST', etc.']
    allow_headers=["*"],  # Or specify headers you want to allow
)


@app.get("/")
def read_root():
    return {"Hello": "World"}


@app.get("/canopy")
async def run_canopy():
    file = open("testdata/677wcarter.png", "rb")
    image_data = file.read()
    image = Image.open(BytesIO(image_data))

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
