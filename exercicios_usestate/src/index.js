import React from "react";
import ReactDOM from "react-dom/client";

import Modal1 from "./modal1";
import func from "./banco/func.json"


const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
      <Modal1 data={func} />
  </React.StrictMode>
);
