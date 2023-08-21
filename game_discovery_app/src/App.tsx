import { useState } from "react";
import { Flex, Spacer } from "@chakra-ui/react";

import "./App.css";
import Header from "./components/Header";
import Pricing from "./components/Pricing";

function App() {
  return (
    <>
      <Header />
      <Pricing />
    </>
  );
}

export default App;
