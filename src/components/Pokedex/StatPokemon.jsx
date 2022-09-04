import React from 'react'

const StatPokemon = ({infoStat, color}) => {
  return (
    <li className='card__stat'>
      
      <h4 className='card__stat-title'>{infoStat.stat.name} </h4>
     {
      infoStat.stat.name==='hp' &&  <i className={`fa-solid fa-battery-half fa-2x color-text-${color}`}></i> ||
      infoStat.stat.name==='attack' &&  <i className={`fas fa-skull-crossbones fa-2x color-text-${color}`}></i> ||
      infoStat.stat.name==='defense' &&  <i className={`fas fa-shield fa-2x color-text-${color}`}></i> ||
      infoStat.stat.name==='special-attack' &&  <i className={`fas fa-bomb fa-2x color-text-${color}`}></i> ||
      infoStat.stat.name==='special-defense' &&  <i className={`fas fa-shield-virus fa-2x color-text-${color}`}></i> ||
      infoStat.stat.name==='speed' &&  <i className={`fas fa-tachometer-alt fa-2x color-text-${color}`}></i>  
      }

      <p className={`card__stat-value color-text-${color}`}>{infoStat.base_stat}</p>
    </li>
  )
}

export default StatPokemon