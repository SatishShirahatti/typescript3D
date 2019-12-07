import React from 'react';
import client from "../src/Api/clientInstance";
import { ClientSDKProvider } from "@cognite/gearbox";
import { Model3DViewer } from '@cognite/gearbox';
import './App.css';
const modelID = 5928237790582814;
const revisionID = 5161268522729558;
const cache = {};
const App: React.FC = () => {
  return (
    <div className="App">
      <ClientSDKProvider client={client}>
        <h1>Welcome 3D Models World</h1>
        <Model3DViewer
      modelId={modelID}
      revisionId={revisionID}
      showScreenshotButton={true}
      cache={cache}
    />
      </ClientSDKProvider>
    </div>
  );
}

export default App;
