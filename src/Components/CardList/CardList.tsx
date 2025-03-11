import React from 'react'
import Card from '../Card/Card'

type Props = {}

const CardList = (props: Props) => {
  return (
    <div>
      <Card companyName={'Apple'} ticker={'APPL'} price={110} />
      <Card companyName={'Tesla'} ticker={'TSLA'} price={120} />
      <Card companyName={'Microsoft'} ticker={'MSFT'} price={140} />
    </div>
  )
}

export default CardList