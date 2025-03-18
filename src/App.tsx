import React, { ChangeEvent, SyntheticEvent, useState } from "react";
import ReactDOM from "react-dom/client";
import CardList from "./Components/CardList/CardList";
import { searchCompanies } from "./api";
import Search from "./Components/Search/Search";

const App = () => {
  console.log(searchCompanies("tsla"));

  const [search, setSearch] = useState<string>("");

  const handleChange = (e: ChangeEvent<HTMLInputElement>)=>{
    setSearch(e.target.value)
    console.log(e);
  }

  const onClick = (e: SyntheticEvent)=>{
    console.log(e);
  }

  return (
  <div>
    <Search onClick={onClick} search={search} handleChange={handleChange} />
    <CardList />
</div>
);
};

ReactDOM.createRoot(document.getElementById("root")!).render(<App />);
