import React, { ChangeEvent, JSX, SyntheticEvent, useState } from 'react'

interface Props {
  onSearchSubmit: (e:SyntheticEvent) => void,
  search: string|undefined,
  handleSearchChange: (e:ChangeEvent<HTMLInputElement>) => void
}

const Search: React.FC<Props> = ({onSearchSubmit, search, handleSearchChange}: Props): JSX.Element => {

  return (
    <div>
      <form onSubmit={onSearchSubmit}>
        <input value={search} onChange={handleSearchChange} />
      </form>
    </div>
  )
}

export default Search