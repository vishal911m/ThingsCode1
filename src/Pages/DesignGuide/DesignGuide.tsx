import React from 'react'
import Table from '../../Components/Table/Table'
import RatioList from '../../Components/RatioList/RatioList'

type Props = {}

const DesignGuide = (props: Props) => {
  return (
    <>
    <h1>ThingsCode Design Page</h1>
    <h2>This is ThingsCode's design page. This is where we will house various design aspects of the app</h2>
    <RatioList />
    <Table />
    </>
  )
}

export default DesignGuide