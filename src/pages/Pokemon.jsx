import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import './styles/Pokemon.css'

const Pokemon = () => {
  const {id}=useParams()

  const [pokemonData, setpokemonData] = useState()

  const getPercentBarProgress=(valueStat)=>{
    const maxValue =150
    return `${(valueStat*100)/maxValue}%`

  }
  useEffect(() => {
    const URL = `https://pokeapi.co/api/v2/pokemon/${id}/`
    axios.get(URL)
      .then(res=>setpokemonData(res.data))
      .catch(err=>console.log(err))

  }, [])
  
  return (
    <main className='pokemon'>
      <section className='pokemonId'>
        <section className={`pokemonId__header bg-lg-${pokemonData?.types[0].type.name}`}></section>
          <img className='pokemonId__img' src={pokemonData?.sprites.other['official-artwork'].front_default} alt="" />
          <h2 className='pokemonId__id'>{`#${pokemonData?.id}`} </h2>
          <h2 className='pokemonId__name'>{pokemonData?.name}</h2>
          <section className='pokemonId__features'>
            <p className='pokemonId__feature'><span>Weight</span>{pokemonData?.weight}</p>
            <p className='pokemonId__feature'><span>Height</span>{pokemonData?.height}</p>
          </section>
          <section className='pokemonId__info'>
            <div className='pokemonId__info-container'>
              <h3>Type</h3>
              <div className='pokemonId__type-div'>
                {
                pokemonData?.types.map(type=>(<p className={`pokemonId__type bg-${type.type.name}`} key={type.slot}>{type.type.name}</p>))
                }
              </div>

            </div>
            <div className='pokemonId__info-container'>
              <h3>Abilities</h3>
              <div className="pokemonId__ability-div">
                {
                pokemonData?.abilities.map(ability=><p className='pokemonId__ability' key={ability.ability.url}>{ability.ability.name}</p>)
                }
              </div>
              
            </div>
          </section>
        
        <section className='pokemonId__stats'>
          <h2 className='stats__header'>Stats</h2>
          <div className='stats__container'>
            {
              pokemonData?.stats.map(stat=>(
                <div className='pokemonId__stat' key={stat.stat.url}>
                  <p className='pokemonId__stat-p'><span>{stat.stat.name}</span>{stat.base_stat}/150</p>
                  <div className='pokemonId__stat-bar'>
                    <div style={{width: getPercentBarProgress(stat.base_stat)}} className='pokemonId__stat-barProgress'></div>
                  </div>
                </div>
                  ))
            }
            
          </div>
        </section>


      </section>
      <section className='pokemon__moves'>
        <h2 className='moves-title'>Movements</h2>
        <ul className='pokemon__moves-container'>
          {
            pokemonData?.moves.map(move=>(<li className='pokemon__move' key={move.move.url}>{move.move.name}</li>))
          }
        </ul>
      </section>
    </main>
  )
}

export default Pokemon