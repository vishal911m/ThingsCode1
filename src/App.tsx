import React, { ChangeEvent, SyntheticEvent, useState } from "react";
import ReactDOM from "react-dom/client";
import CardList from "./Components/CardList/CardList";
import { searchCompanies } from "./api";
import Search from "./Components/Search/Search";
import { CompanySearch } from "./company";

const App = () => {
  // console.log(searchCompanies("aapl"));

  const [search, setSearch] = useState<string>("");
  const [searchResult, setSearchResult] = useState<CompanySearch[]>([]);
  const [serverError, setServerError] = useState<string | null>(null);

  const handleChange = (e: ChangeEvent<HTMLInputElement>)=>{
    setSearch(e.target.value)
    console.log(e);
  };

  const onPortfolioCreate = (e: SyntheticEvent)=>{
    e.preventDefault();
    console.log(e);
  }

  const onClick = async (e: SyntheticEvent)=>{
    // console.log(e);
    e.preventDefault();
    const result = await searchCompanies(search);

    if (typeof result === "string") {
      setServerError(result);
    } else if (Array.isArray(result.data)) {
      setSearchResult(result.data);
    }
    // console.log("Search Result: ", searchResult);
  }

  return (
  <div>
    <Search onClick={onClick} search={search} handleChange={handleChange} />
    <CardList searchResults={searchResult} onPortfolioCreate={onPortfolioCreate} />
    {serverError && <div>Unable to connect to API</div>}
</div>
);
};

ReactDOM.createRoot(document.getElementById("root")!).render(<App />);