import React, { ChangeEvent, SyntheticEvent, useState } from "react";
import ReactDOM from "react-dom/client";
import CardList from "./Components/CardList/CardList";
import { searchCompanies } from "./api";
import Search from "./Components/Search/Search";
import { CompanySearch } from "./company";
import ListPortfolio from "./Components/Portfolio/ListPortfolio/ListPortfolio";

const App = () => {
  // console.log(searchCompanies("aapl"));

  const [search, setSearch] = useState<string>("");
  const [portfolioValues, setPortfolioValues] = useState<string[]>([]);
  const [searchResult, setSearchResult] = useState<CompanySearch[]>([]);
  const [serverError, setServerError] = useState<string | null>(null);

  const handleSearchChange = (e: ChangeEvent<HTMLInputElement>)=>{
    setSearch(e.target.value)
    console.log(e);
  }

  const onPortfolioCreate = (e: any) => {
    e.preventDefault();
    console.log(e)
  };

  const onSearchSubmit = async (e: SyntheticEvent)=>{
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
    <Search 
      onSearchSubmit={onSearchSubmit} 
      search={search} 
      handleSearchChange={handleSearchChange} />
    <ListPortfolio />
    <CardList 
      searchResults={searchResult}
      onPortfolioCreate={onPortfolioCreate}  
    />
    {serverError && <div>Unable to connect to API</div>}
</div>
);
};

ReactDOM.createRoot(document.getElementById("root")!).render(<App />);
