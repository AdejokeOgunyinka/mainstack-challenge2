import React from "react";
import "./App.css";
import Dashboard from "../src/layouts/dashboard";
import Editor from "./pages/editor";
import Customization from "./pages/editor/customize";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { ROUTES } from "./utils/routeUtils";
import { ChakraProvider } from "@chakra-ui/react";
import { theme } from "theme/BaseTheme";
import { Global } from "@emotion/react";
import { GlobalStyles } from "theme/GlobalStyles";

function App() {
  return (
    <div className="App">
      <ChakraProvider theme={theme}>
        <Global styles={GlobalStyles} />
        <BrowserRouter>
          <Routes>
            <Route path={ROUTES.dashboard} element={<Dashboard />}>
              <Route path={ROUTES.editor} element={<Editor />} />
              <Route path={ROUTES.customization} element={<Customization />} />
              <Route path={ROUTES.getStarted} />
            </Route>
          </Routes>
        </BrowserRouter>
      </ChakraProvider>
    </div>
  );
}

export default App;
