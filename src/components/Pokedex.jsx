import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'
import PokemonCard from './Pokedex/PokemonCard'
import Pagination from "./Pokedex/Pagination";
import SearchInput from './Pokedex/SearchInput'
import SelectType from './Pokedex/SelectType'
import HeaderPoke from './shared/HeaderPoke'
import FooterPoke from './shared/FooterPoke'
import './styles/pokedex.css'

const Pokedex = () => {

  const [pokemons, setPokemons] = useState()
  const [pokeSearch, setPokeSearch] = useState()
  const [optionType, setOptionType] = useState('All')
  const [history, setHistory] = useState('/')
  const [offset, setOffset] = useState(0);
  const [limit, setLimit] = useState(20);
  const [totalPokemonLength, setTotalPokemonLength] = useState(0);
  
  useEffect(() => {
    if(optionType !== 'All'){
      // Aquí se hace la lógica de cuando el usuario quieres filtrar por tipo
      const URL = `https://pokeapi.co/api/v2/type/${optionType}/`
      axios.get(URL)
        .then(res => {
          const arr = res.data.pokemon.map(e => e.pokemon)
          setTotalPokemonLength(arr.length);
          const arr2 = arr.slice(offset, offset + limit);
          setPokemons({ results: arr2 });


        })
        .catch(err => console.log(err))
    } else if(pokeSearch){
      // Aquí se hace la lógica cuando el usuario busca por el input
      const url = `https://pokeapi.co/api/v2/pokemon/${pokeSearch}`

      const obj = {
        results: [{url}]
      }
      setPokemons(obj)
    } else {
      // Aquí se hace la lógica cuando el usuario quiere todos los pokemons
      const URL = `https://pokeapi.co/api/v2/pokemon?offset=${offset}&limit=${limit}`;
      axios.get(URL)
        .then(res => setPokemons(res.data))
        .catch(err => console.log(err))
    }
  }, [offset, pokeSearch, optionType])

  const nameTrainer = useSelector(state => state.nameTrainer)
  let totalPokemons = pokemons?.count ? pokemons?.count : totalPokemonLength;
  return (
    <div>
      <div className="pagination">
        <Pagination
          totalPokemons={totalPokemons}
          offset={offset}
          limit={limit}
          setOffset={setOffset}
          setPokemons={setPokemons}
          setPokeSearch={setPokeSearch}
        />
      </div>
      <HeaderPoke history={setHistory} />
      <div className='data-entry'>
       <SelectType 
        optionType={optionType} 
        setOptionType={setOptionType} 
        setPokeSearch={setPokeSearch}
        setLimit={setLimit}
        setOffset={setOffset}
      />
      <SearchInput setPokeSearch={setPokeSearch} setOptionType={setOptionType} setTotalPokemonLength={setTotalPokemonLength}/>
      <h2> Welcome <b>{nameTrainer}</b>, Catch them all.</h2>
      </div>
      <div className='cards-container'>
        {
          pokemons?.results.map(pokemon => (
            <PokemonCard 
            key={pokemon.url}
            url={pokemon.url}
            totalPokemonLength={totalPokemonLength}
            limit={limit}
          />
          ))
        }
      </div>
      <FooterPoke/>
    </div>
  )
}

export default Pokedex