import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'
import ListPokemons from '../compnents/ListPokemons'
import { paginationLoginc } from '../helpers/pajinationLogic'
import './styles/Pokedex.css'
const Pokedex = () => {
  
  const trainerName = useSelector(state=>state.trainerName) //Variable con el estado del nombre de entrenador

  const [pokemons, setPokemons] = useState([])
  const [pokemonTypes, setPokemonTypes ] = useState() // arreglo con nombres de los tipos de pokemon 
  const [pokemonFilter, setPokemonFilter] = useState([]) // arreglo con los pokemon que coinciden con la busqueda
  const [currentType, setCurrentType] = useState() //string del tipo de pokemon actual  
  const [namePokemon, setNamePokemon] = useState('')
  const [currentPage, setCurrentPage] = useState(1)

  const handleSubmit = (e)=>{
    e.preventDefault()
    const name = e.target.search_pokemon.value
    setNamePokemon(name)

  }

  const handleChangeSelect = (e)=>{
    setCurrentType(e.target.value.toLowerCase())
  }
  
  const {pagesInBlock, lastPage, pokemonsInPage}=paginationLoginc(currentPage,pokemonFilter)

  const handleClickPage = (newPage)=>{
    setCurrentPage(newPage)
  }

  const handlePreviousPage=()=>{
    const newPage =currentPage -1
    if( newPage<1){
      setCurrentPage(lastPage)
    }else{
      setCurrentPage(newPage)
    }
  }
    
  const handleNextPage =()=>{
    const newPage =currentPage +1
    if( newPage>lastPage){
      setCurrentPage(1)
    }else{
      setCurrentPage(newPage)
    }}

    const handleLastPage = ()=>{
      setCurrentPage(lastPage)
    }
    const handleFirstPage =()=>{
      setCurrentPage(1)
    }

  useEffect(() => {   
      const URL_pokemons=`https://pokeapi.co/api/v2/${currentType ? `type/${currentType}/`:'pokemon/?limit=1150'}`
      console.log(URL_pokemons)
      axios.get(URL_pokemons)
        .then(res=>{
          if(currentType){
            const newPokemons= res.data.pokemon.map(pokemon=>pokemon.pokemon)
            setPokemons(newPokemons)
          }else{
            setPokemons(res.data.results)
          }
        })
        .catch(err=>console.log(err))
  }, [currentType])
  
  useEffect(() => {
    const URL = 'https://pokeapi.co/api/v2/type/'
    axios.get(URL)
      .then(res=>setPokemonTypes(res.data.results))
      .catch(err=>console.log(err))
  }, [])

  useEffect(() => {
    const newPokemons = pokemons.filter(pokemon=>pokemon.name.includes(namePokemon))
    setPokemonFilter(newPokemons)
  }, [namePokemon, pokemons])
  
  
  return (
    <div className='pokedex'>
      
      <p className='pokedex__text'> <span>Welcome {trainerName}</span>, here you can find your favorite pokemon</p>
      <form className='pokedex__form' onSubmit={handleSubmit}>
        <div className='pokedex__search'>
          <input className='pokedex__input' type="text" id='search_pokemon'/>
          <button className='pokedex__btn' type='submit'>Search</button>
        </div>
        <select className='pokedex__select' onChange={handleChangeSelect} >
          <option value="">All types</option>
          {
            pokemonTypes?.map(type=><option className='select__option' key={type.url}>{type.name}</option>)
          }
        </select>
      </form>

    <ListPokemons pokemons = {pokemonsInPage} />
    <ul className='pokedex__listPages'>
      <li onClick={handlePreviousPage}>{'<'}</li>
      <li onClick={handleFirstPage}>{'...'}</li>
      {
        pagesInBlock.map(pageInBlock=><li className={currentPage===pageInBlock ? 'actualPage':''} onClick={()=>handleClickPage(pageInBlock)} key={pageInBlock}>{pageInBlock}</li>)
      }
      <li onClick={handleLastPage}>{'...'}</li>
      <li onClick={handleNextPage}>{'>'}</li>
    </ul>
    </div>
  )
}

export default Pokedex