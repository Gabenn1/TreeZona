from io import BytesIO
from PIL import Image
import detectree as dtr
import matplotlib.pyplot as plt
import numpy as np
from matplotlib.colors import ListedColormap
import tempfile


def canopy_coverage(image: Image.Image):
    # Convert PIL image to NumPy array
    img_array = np.array(image)

    # Save the image to a temporary file and pass the path to detectree
    with tempfile.NamedTemporaryFile(suffix=".png", delete=False) as temp_file:
        image.save(temp_file.name, format='PNG')
        temp_file_path = temp_file.name

    # Use the pre-trained model to segment the image into tree/non-tree pixels
    y_pred = dtr.Classifier().predict_img(
        temp_file_path)  # Use the temporary file path

    # Calculate the percentage of the image covered by tree pixels
    total_pixels = y_pred.size
    unique_values = np.unique(y_pred)
    print("Unique values in y_pred:", unique_values)

    # Adjust the calculation based on the unique values
    tree_pixels = np.sum(y_pred)  # Use this if y_pred is boolean

    coverage_percentage = (tree_pixels / total_pixels)

    # Print the coverage percentage
    print(
        f"Percentage of the image covered by trees: {coverage_percentage:.2f}%")

    # Create a figure for plotting
    fig, ax = plt.subplots(figsize=(10, 10))

    # Plot the original image
    ax.imshow(img_array)

    # Neon yellow color for tree pixels
    neon_yellow_cmap = ListedColormap(
        ["none", "#FFFF33"])  # Bright neon yellow

    # Overlay the prediction with the custom neon yellow colormap
    # Adjust alpha for transparency
    ax.imshow(y_pred, cmap=neon_yellow_cmap, alpha=1)

    # Remove axes for cleaner output
    ax.axis("off")

    # Save the figure without borders or padding
    plt.savefig("../arizona-tree/public/images/output.png",
                bbox_inches='tight', pad_inches=0)

    # Clean up the temporary file
    import os
    # Make sure to delete the temporary file after use
    os.remove(temp_file_path)
