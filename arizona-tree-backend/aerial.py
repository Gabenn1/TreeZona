import requests
from dotenv import load_dotenv
import os

# Load environment variables from .env file
load_dotenv()

# Parameters
subscription_key = os.environ.get('AZURE_SUBSCRIPTION_KEY')
latitude = 34.052235
longitude = -118.243683
zoom = 14
width = 600
height = 400

# Construct the API URL
url = f'https://atlas.microsoft.com/map/static/png?subscription-key={subscription_key}&api-version=1.0&center={longitude},{latitude}&zoom={zoom}&height={height}&width={width}&layer=hybrid&style=main&language=en-US'

# Fetch the map image
response = requests.get(url)

# Save the image
if response.status_code == 200:
    with open('map_image.png', 'wb') as file:
        file.write(response.content)
    print("Map image saved as 'map_image.png'.")
else:
    print(f"Failed to get map image. Status code: {response.status_code}")
