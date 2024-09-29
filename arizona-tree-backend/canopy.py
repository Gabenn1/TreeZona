from urllib import request
import detectree as dtr
import matplotlib.pyplot as plt
import rasterio as rio
from rasterio import plot
import numpy as np

# Load the tile from the local file system
tile_filename = "testdata/mapImage.png"

# Use the pre-trained model to segment the image into tree/non-tree pixels
y_pred = dtr.Classifier().predict_img(tile_filename)

# Calculate the percentage of the image covered by tree pixels
total_pixels = y_pred.size
unique_values = np.unique(y_pred)
print("Unique values in y_pred:", unique_values)

# Adjust the calculation based on the unique values
tree_pixels = np.sum(y_pred)  # Use this if y_pred is boolean
# tree_pixels = np.sum(y_pred > 0)  # Use this if tree pixels have values > 0

coverage_percentage = (tree_pixels / total_pixels)

# Print the coverage percentage
print(f"Percentage of the image covered by trees: {coverage_percentage:.2f}%")

# Load the image using rasterio
with rio.open(tile_filename) as src:
    img = src.read([1, 2, 3])  # Read RGB bands (assuming it's an RGB image)

# Create a figure for plotting
fig, ax = plt.subplots(figsize=(10, 10))

# Plot the original image
ax.imshow(np.moveaxis(img, 0, -1))  # Move axis to plot correctly (bands last)

# Overlay the predicted mask with neon yellow color and some transparency
from matplotlib.colors import ListedColormap

# Neon yellow color for tree pixels
neon_yellow_cmap = ListedColormap(["none", "#FFFF33"])  # Bright neon yellow

# Overlay the prediction with the custom neon yellow colormap
ax.imshow(y_pred, cmap=neon_yellow_cmap, alpha=1)  # Adjust alpha for transparency

# Remove axes for cleaner output
ax.axis("off")

# Save the figure
plt.savefig('tile_overlay_neon_yellow.png')  # Save the figure to a file
plt.show()
