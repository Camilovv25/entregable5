import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import './styles/PokemonCard.css'

const PokemonCard = ({pokemon}) => {

  const [pokemonInfo, setPokemonInfo] = useState()
  const navigate = useNavigate()

  const types = pokemonInfo?.types.map(type=>type.type.name)

  const handleClickCard =()=>{
    navigate(`/pokedex/${pokemonInfo?.id}`)
  }

  useEffect(() => {
    const URL= pokemon.url
    axios.get(URL)
      .then(res=>setPokemonInfo(res.data))
      .catch(err=>console.log(err))
  }, [])


  
  return (
    <article className={`pokeCard border-${pokemonInfo?.types[0].type.name}`} onClick={handleClickCard}>
      <section className={`pokeCard__header bg-lg-${pokemonInfo?.types[0].type.name}`}></section>
      <section className='pokeCard__content'>
        <img className='pokeCard__img' src={pokemonInfo?.sprites.other['official-artwork'].front_default} alt="" />
        <h3 className='pokeCard__name'>{pokemonInfo?.name}</h3>
        <p className='pokeCard__types'>{types?.join(' / ') }</p>
        <p className='pokeCard__types-title'>Type</p>
        <hr />
        <section className='pokeCard__stats'>
          {
            pokemonInfo?.stats.map(stat=>(
              <div className='pokeCard__stat' key={stat.stat.url}>
                <p className='pokeCard__stat-name'>{stat.stat.name}</p>
                <p className='pokeCard__stat-value'>{stat.base_stat}</p>
              </div>
            ))
          }
        </section>
      </section>
    </article>

  )
}

export default PokemonCard