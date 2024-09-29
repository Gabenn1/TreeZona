from fastapi import FastAPI, File, UploadFile
from canopy import *
from io import BytesIO
from PIL import Image

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
    canopy_coverage(image)

    return {"It worked!": "Success!"}
