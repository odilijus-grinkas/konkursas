import React from "react";
import ReactDOM from "react-dom/client";
import MainRouter from "./MainRouter.jsx";

import "bootstrap/dist/css/bootstrap.min.css" // bootstrap css
import "bootstrap/dist/js/bootstrap.bundle.min" //bootstrap js

import Layout from "./sharedComponents/Layout.jsx"

ReactDOM.createRoot(document.getElementById("root")).render(
  // <React.StrictMode>
    // <Layout>
      <MainRouter/>
    // </Layout>
  // </React.StrictMode>
);
