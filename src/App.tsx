import React from "react";
import ReactDOM from "react-dom/client";
import CardList from "./Components/CardList/CardList";
import Search from "./Components/Card/Search/Search";

const App = () => {
  return (
  <div>
    <Search />
    <CardList />
</div>
);
};

ReactDOM.createRoot(document.getElementById("root")!).render(<App />);
