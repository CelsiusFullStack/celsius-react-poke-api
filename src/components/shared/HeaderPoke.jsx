import React from 'react'
import { useNavigate } from "react-router-dom";
import { useEffect, useState } from 'react'
import './styles/headerPoke.css'


const HeaderPoke = ({history}) => {
const navigate = useNavigate();
const handleBack = () =>{navigate(-1)}

  return (
    <header className='red-rectangle-header'>
      <img className='header-img' src="/images/Home/pokedex.png" alt="" />
      <div className='black-rectangle-header'></div>
      <div className='circle-ext-header'>
        <div className="circle-int-header" onClick={handleBack} ></div>
      </div>
    </header>
  )
}

export default HeaderPoke