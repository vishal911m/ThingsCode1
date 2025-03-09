import React from "react";
import ReactDOM from "react-dom/client";
import Card from "./Components/Card/Card";

const App = () => {
  return (
  <div>
    <Card />
</div>
);
};

ReactDOM.createRoot(document.getElementById("root")!).render(<App />);
