import React, { useContext, useState, useEffect } from "react";
import {
  AzureMap,
  AzureMapsProvider,
  AzureMapsContext,
  IAzureMapOptions,
  AuthenticationType,
} from "react-azure-maps";
import { data } from "azure-maps-control";
import axios from "axios";
// Map options
// Map options
const initialOption: IAzureMapOptions = {
  zoom: 16,
  center: [-111.931891, 33.415613], // Default center
  maxZoom: 18,
  authOptions: {
    authType: AuthenticationType.subscriptionKey,
    subscriptionKey: import.meta.env.VITE_AZURE_SUBSCRIPTION_KEY, // Subscription key from environment
  },
  disableTelemetry: true,
  style: "satellite",
};

const Controller = ({
  searchQuery,
  triggerSearch,
  setTriggerSearch,
}: {
  searchQuery: string;
  triggerSearch: boolean;
  setTriggerSearch: React.Dispatch<React.SetStateAction<boolean>>;
}) => {
  const { mapRef, isMapReady } = useContext(AzureMapsContext);

  useEffect(() => {
    const updateCameraPosition = async () => {
      if (mapRef && isMapReady && searchQuery && triggerSearch) {
        try {
          const subscriptionKey = import.meta.env.VITE_AZURE_SUBSCRIPTION_KEY;
          if (!subscriptionKey) {
            console.error("Azure Maps subscription key not found");
            return;
          }

          // Azure Maps Search API endpoint
          const url = `https://atlas.microsoft.com/search/address/json?api-version=1.0&subscription-key=${subscriptionKey}&query=${encodeURIComponent(
            searchQuery
          )}`;

          // Make API request
          const response = await axios.get(url);
          const results = response.data.results;

          if (results.length > 0) {
            const firstResult = results[0];
            const { position } = firstResult;

            console.log("New center:", [position.lon, position.lat]);

            // Set the new camera position
            mapRef.setCamera({
              type: "fly",
              duration: 3000,
              center: new data.Position(position.lon, position.lat),
              zoom: 18,
            });
          } else {
            console.log("No results found for the search query");
          }
        } catch (error) {
          console.error("Error searching for location:", error);
        } finally {
          // Reset the triggerSearch flag so another search can be performed
          setTriggerSearch(false);
        }
      }
    };

    updateCameraPosition();
  }, [mapRef, isMapReady, searchQuery, triggerSearch, setTriggerSearch]);

  return null;
};

export default function App() {
  const [option, setOption] = useState<IAzureMapOptions>(initialOption);
  const [searchQuery, setSearchQuery] = useState(""); // State for search query
  const [triggerSearch, setTriggerSearch] = useState(false); // State to control when to trigger the search

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    setTriggerSearch(true); // Trigger search when the form is submitted
  };

  // Function to capture and download the map as an image
  const handleButtonClick = async () => {
    console.log("Processing image...");

    // Make get request to the server to process the image

    // get current center coordinates

    try {
      const response = await axios.get(
        "http://localhost:8000/canopy/33.415613/-111.931891"
      );
      console.log("Response:", response);

      const respone2 = await axios.get("http://localhost:8000/canopy");

      console.log("Response2:", respone2);
    } catch (error) {
      console.error("Error processing image:", error);
    }
  };

  return (
    <AzureMapsProvider>
      <div className="relative w-full h-full">
        {/* Search Bar */}
        <form
          onSubmit={handleSearch}
          className="absolute top-4 left-4 z-10 bg-white shadow-md p-2 rounded-xl"
        >
          <input
            type="text"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            placeholder="Search location"
            className="p-2 border border-gray-300 rounded-l-xl"
          />
          <button
            type="submit"
            className="ml-2 p-2 bg-green text-black rounded-r-xl"
          >
            Search
          </button>
        </form>

        {/* Bottom Left Button */}
        <button
          onClick={handleButtonClick}
          className="absolute top-4 right-4 z-10 p-2 bg-green text-black rounded-lg shadow-md"
        >
          Process Image
        </button>

        {/* Map Component */}
        <AzureMap options={option} />

        {/* Map Controller */}
        <Controller
          searchQuery={searchQuery}
          triggerSearch={triggerSearch}
          setTriggerSearch={setTriggerSearch}
        />
      </div>
    </AzureMapsProvider>
  );
}
