import React, { ChangeEvent, JSX, SyntheticEvent, useState } from 'react'

interface Props {
  onClick: (e:SyntheticEvent) => void,
  search: string|undefined,
  handleChange: (e:ChangeEvent<HTMLInputElement>) => void
}

const Search: React.FC<Props> = ({onClick, search, handleChange}: Props): JSX.Element => {

  return (
    <div>
      <input value={search} onChange={(e) => handleChange(e)}></input>
      <button onClick={(e) => onClick(e)}>Search</button>
    </div>
    // <>
    // <form onSubmit={onSearchSubmit} >
    //   <input value={search} onChange={handleSearchChange} />
    // </form>
    // </>
  )
}

export default Search