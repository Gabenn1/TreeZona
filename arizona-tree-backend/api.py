from typing import Union
from fastapi import FastAPI
from canopy import *

app = FastAPI()


@app.get("/")
def read_root():
    return {"Hello": "World"}


@app.get("/canopy/{file_path}")
def run_canopy(file_path):
    canapy_coverage(file_path)
    return {"It worked!": "Success!"}