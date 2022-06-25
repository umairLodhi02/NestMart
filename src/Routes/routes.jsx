import React from "react";
import { BrowserRouter, Route } from "react-router-dom";
import NestRoutes from "./NestRoutes";
class CustomRoutes extends React.Component {
  render() {
    return (
      <BrowserRouter>
        <Route path="/" component={NestRoutes} />
      </BrowserRouter>
    );
  }
}

export default CustomRoutes;
