import React from 'react'

const SearchInput = ({setPokeSearch, setOptionType, setTotalPokemonLength}) => {

  const handleSubmit = e => {
    e.preventDefault()
    setPokeSearch(e.target.searchText.value.trim().toLowerCase())
    setOptionType('All')
    setTotalPokemonLength(0)
    e.target.searchText.value = ""
  }

  return (
    <form onSubmit={handleSubmit}>
      <input className='search-input' id='searchText' type="text" />
      <button className='button-search'>Search</button>
    </form>
  )
}

export default SearchInput