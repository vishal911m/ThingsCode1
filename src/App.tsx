import React from "react";
import ReactDOM from "react-dom/client";
import CardList from "./Components/CardList/CardList";
import Search from "./Components/Card/Search/Search";
import { searchCompanies } from "./api";

const App = () => {
  console.log(searchCompanies("tsla"));
  return (
  <div>
    <Search />
    <CardList />
</div>
);
};

ReactDOM.createRoot(document.getElementById("root")!).render(<App />);
