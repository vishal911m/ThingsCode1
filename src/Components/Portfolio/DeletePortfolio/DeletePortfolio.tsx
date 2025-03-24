import React, { SyntheticEvent } from 'react'

interface Props {
  portfolioValue: string,
  onPortfolioDelete: (e: SyntheticEvent) => void;
}

const DeletePortfolio = ({portfolioValue, onPortfolioDelete}: Props) => {
  console.log("DeletePortfolio received onPortfolioDelete:", onPortfolioDelete);

  return (
    <div>
       <form onSubmit={onPortfolioDelete}>
         <input hidden={true} value={portfolioValue} />
         <button>X</button>
       </form>
     </div>
  )
}

export default DeletePortfolio