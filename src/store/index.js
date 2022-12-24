import { configureStore } from "@reduxjs/toolkit";
import trainerName from './slices/trainerName.slice'
import allPokemons from './slices/allPokemons.slice'
import currentPokemon from './slices/currentPokemon.slice'
export default configureStore({
  reducer: {
    trainerName,
    allPokemons,
    currentPokemon
  }
})