import React, { ChangeEvent, SyntheticEvent, useState } from "react";
import ReactDOM from "react-dom/client";
import CardList from "./Components/CardList/CardList";
import { searchCompanies } from "./api";
import Search from "./Components/Search/Search";
import { CompanySearch } from "./company";
import ListPortfolio from "./Components/Portfolio/ListPortfolio/ListPortfolio";
import AddPortfolio from "./Components/Portfolio/AddPortfolio/AddPortfolio";

const App = () => {
  // console.log(searchCompanies("aapl"));

  const [search, setSearch] = useState<string>("");
  const [searchResult, setSearchResult] = useState<CompanySearch[]>([]);
  const [portfolioValues, setPortfolioValues] = useState<string[]>([]);
  const [serverError, setServerError] = useState<string | null>(null);

  const handleChange = (e: ChangeEvent<HTMLInputElement>)=>{
    setSearch(e.target.value)
    console.log(e);
  };

  const onPortfolioCreate = (e: any)=>{
    e.preventDefault();
    console.log(e);
    const exists = portfolioValues.find((value)=> value === e.target[0].value);
    if (exists) return;
    const updatedPortfolio = [...portfolioValues, e.target[0].value];
    setPortfolioValues(updatedPortfolio);
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
    <ListPortfolio portfolioValues={portfolioValues}/>
    <CardList searchResults={searchResult} onPortfolioCreate={onPortfolioCreate} />
    {serverError && <div>Unable to connect to API</div>}
</div>
);
};

ReactDOM.createRoot(document.getElementById("root")!).render(<App />);