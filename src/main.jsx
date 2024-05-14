import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { Provider } from "react-redux";
import { store, persistor } from "./app/store.js";
import HouseContextProvider from "./features/houses/HouseContextProvider.jsx";
import { PersistGate } from "redux-persist/integration/react";

ReactDOM.createRoot(document.getElementById("root")).render(
  <Provider store={store}>
    <HouseContextProvider>
      <React.StrictMode>
        <PersistGate loading={null} persistor={persistor}>
          <App />
        </PersistGate>
      </React.StrictMode>
    </HouseContextProvider>
  </Provider>,
);
