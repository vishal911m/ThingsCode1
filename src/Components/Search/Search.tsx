import React, { ChangeEvent, JSX, SyntheticEvent, useState } from 'react'

interface Props {
  onClick: (e:SyntheticEvent) => void,
  search: string|undefined,
  handleChange: (e:ChangeEvent<HTMLInputElement>) => void
}

const Search: React.FC<Props> = ({onClick, search, handleChange}: Props): JSX.Element => {

  return (
    <section className="relative bg-gray-100">
      <div className="max-w-4xl mx-auto p-6 space-y-6">
        <form
          className="form relative flex flex-col w-full p-10 space-y-4 bg-darkBlue rounded-lg md:flex-row md:space-y-0 md:space-x-3"
          onSubmit={onClick}
        >
          <input
            className="flex-1 p-3 border-2 rounded-lg placeholder-black focus:outline-none"
            id="search-input"
            placeholder="Search companies"
            value={search}
            onChange={handleChange}
          ></input>
        </form>
      </div>
    </section>
    // <>
    // <form onSubmit={onSearchSubmit} >
    //   <input value={search} onChange={handleSearchChange} />
    // </form>
    // </>
  )
}

export default Search