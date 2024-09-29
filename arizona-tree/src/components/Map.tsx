import React from "react";
import {
  AzureMap,
  AzureMapsProvider,
  IAzureMapOptions,
  AuthenticationType,
} from "react-azure-maps";

const option: IAzureMapOptions = {
  authOptions: {
    authType: AuthenticationType.subscriptionKey,
    subscriptionKey: import.meta.env.AZURE_SUBSCRIPTION_KEY,
  },
  disableTelemetry: true,
  center: [26.157981, -29.083937],
  zoom: 4,
  pitch: 50,
};

const DefaultMap: React.FC = () => (
  <AzureMapsProvider>
    <div style={{ height: "300px" }}>
      <AzureMap options={option} />
    </div>
  </AzureMapsProvider>
);

export default DefaultMap;
