import React, { useEffect, useState } from "react";
import {
  AzureMap,
  AzureMapsProvider,
  IAzureMapOptions,
  AuthenticationType,
} from "react-azure-maps";

const DefaultMap: React.FC = () => {
  const [option, setOption] = useState<IAzureMapOptions | null>(null);

  useEffect(() => {
    const subscriptionKey = import.meta.env.VITE_AZURE_SUBSCRIPTION_KEY;
    console.log(subscriptionKey);
    
    if (subscriptionKey) {
      setOption({
        authOptions: {
          authType: AuthenticationType.subscriptionKey,
          subscriptionKey: subscriptionKey,
        },
        disableTelemetry: true,
      });
    }
  }, []);

  if (!option) {
    return <div>Loading...</div>; // Fallback content while the map is loading
  }

  return (
    <AzureMapsProvider>
      <div style={{ height: "300px" }}>
        <AzureMap options={option} />
      </div>
    </AzureMapsProvider>
  );
};

export default DefaultMap;
