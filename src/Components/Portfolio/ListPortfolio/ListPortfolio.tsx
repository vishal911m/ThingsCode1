import React, { SyntheticEvent } from 'react'
import CardPortfolio from '../CardPortfolio/CardPortfolio';

interface Props {
  portfolioValues: string[];
  onPortfolioDelete: (e: SyntheticEvent) => void;
}

const ListPortfolio = ({portfolioValues, onPortfolioDelete}: Props) => {
  console.log("ListPortfolio received onPortfolioDelete:", onPortfolioDelete);

  return (
    <ul>
      {portfolioValues && 
        portfolioValues.map((portfolioValue)=>{
          return <CardPortfolio key={portfolioValue} portfolioValue={portfolioValue} onPortfolioDelete={onPortfolioDelete} />
        })
      }
    </ul>
  )
}

export default ListPortfolio