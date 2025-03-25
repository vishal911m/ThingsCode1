import React, { ChangeEvent, SyntheticEvent, useState } from 'react'
import { CompanySearch } from '../../company';
import { searchCompanies } from '../../api';
import Navbar from '../../Components/Navbar/Navbar';
import Search from '../../Components/Search/Search';
import ListPortfolio from '../../Components/Portfolio/ListPortfolio/ListPortfolio';
import CardList from '../../Components/CardList/CardList';

interface Props {}

const SearchPage = (props: Props) => {

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
  
    const onPortfolioDelete = (e: any) => {
      e.preventDefault();
      const removed = portfolioValues.filter((value) => {
        return value !== e.target[0].value;
      });
      setPortfolioValues(removed);
    };
  
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
  
    console.log("App.tsx onPortfolioDelete function:", onPortfolioDelete);

  return (
    <div>
    {/* <Navbar /> */}
    <Search onClick={onClick} search={search} handleChange={handleChange} />
    <ListPortfolio portfolioValues={portfolioValues} onPortfolioDelete={onPortfolioDelete} />
    <CardList searchResults={searchResult} onPortfolioCreate={onPortfolioCreate} />
    {serverError && <div>Unable to connect to API</div>}
</div>
  )
}

export default SearchPage