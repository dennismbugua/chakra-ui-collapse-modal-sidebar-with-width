import React from "react";
import ReactDOM from "react-dom";
import { ChakraProvider } from "@chakra-ui/react";
import App from "./App.js";

function Index() {
  return (
    <ChakraProvider>
      <App />
    </ChakraProvider>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<Index />, rootElement);
