import React, { useEffect, useState } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
import HeaderPoke from './shared/HeaderPoke'
import StatPokemon from './Pokedex/StatPokemon'
import Ability from './Pokedex/Ability'
import './Pokedex/style/pokemonCard.css'
import './styles/pokeinfo.css'



const PokemonDetails = () => {
  const [pokeInfo, setPokeInfo] = useState();
  const { name } = useParams();
  const [history, setHistory] = useState('/pokedex')
  
  useEffect(() => {
    axios
      .get(`https://pokeapi.co/api/v2/pokemon/${name}`)
      .then((res) => {
        setPokeInfo(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  return (
    <div className="cards-container">
      <HeaderPoke history={setHistory}/>
      <section className="card__container">
      <header className={`card__header bg-${pokeInfo?.types[0].type.name}`}>
        <img className='card__avatar' src={pokeInfo?.sprites.other["official-artwork"]["front_default"]} alt="" />
      </header>
      <section className='card__body'>
        <h3 className={`card__name color-text-${pokeInfo?.types[0].type.name}`}>{pokeInfo?.name}</h3>
        <ul className='card__list-type'>
          {
            pokeInfo?.types.map(slot => (
              <li className='card__item-type'  key={slot.type.url}>{slot.type.name}</li>
              
            ))
          }
        </ul>
      </section>
      <hr className='card__hr' />
      <footer className='card__footer'>
        <ul className='card__list-stats'>
          {
            pokeInfo?.stats.map(stat => (
              <StatPokemon 
                key={stat.stat.url}
                infoStat={stat}
                color={pokeInfo?.types[0].type.name}
              />
            ))
          }
        </ul>
        <div className='footer__center'>
            <p  className={`color-text-${pokeInfo?.types[0].type.name}`} >Heigth {pokeInfo?.height} / Weigth {pokeInfo?.weight} </p>
        </div>
      </footer>
      </section>

      <section className="card__container">
          <header className={`card__header bg-${pokeInfo?.types[0].type.name}`}>
          <img className='card__avatar pokemon-img}' src="/images/Home/poke-image.png" alt="" />
          </header>
          <section className='card__body'>
            <h3 className={`card__name space__letter color-text-${pokeInfo?.types[0].type.name}`}>Abilitys</h3>
            <ul className='card__list-type'>
              {pokeInfo?.types.map(slot =>(<li className='card__item-type'  key={slot.type.url}>{slot.type.name}</li>))}
            </ul>
          </section>
          <hr className='card__hr' />
          <footer className='card__footer'>
            <ul className='card__list-stats'>
              {pokeInfo?.abilities.map(ability => (<Ability key={ability.ability.url} infoAbility={ability} color={pokeInfo?.types[0].type.name}/>))}
            </ul>
          </footer>
      </section>
    </div> 
  );
};

export default PokemonDetails;