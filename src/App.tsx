import React from "react";
import "./App.css";
import Dashboard from "../src/layouts/dashboard";
import Editor from "./pages/editor";
import Customization from "./pages/editor/customize";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { ROUTES } from "./utils/routeUtils";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path={ROUTES.dashboard} element={<Dashboard />}>
            <Route path={ROUTES.editor} element={<Editor />} />
            <Route path={ROUTES.customization} element={<Customization />} />
            <Route path={ROUTES.getStarted} />
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
