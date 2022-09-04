import React from 'react'

const Ability = ({infoAbility, color}) => {
  return (
    <li className='card__stat'>
      { <h4 className='card__stat-title'>{infoAbility.ability.name} </h4>}
       { <p className={`card__stat-value color-text-${color}`}>{infoAbility.ability.ability}</p>}
    </li>
  )
}

export default Ability