import React from "react";
import ReactDOM from "react-dom/client";
import CardList from "./Components/CardList/CardList";

const App = () => {
  return (
  <div>
    <CardList />
</div>
);
};

ReactDOM.createRoot(document.getElementById("root")!).render(<App />);
