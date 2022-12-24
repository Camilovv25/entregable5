import { createSlice } from "@reduxjs/toolkit";

const currentPokemonSlice = createSlice({
  name: 'currentPokemon',
  initialState: [],
  reducers:{
    setCurrentPokemon: (state,action)=>action.payload
  }
})

export const{setCurrentPokemon}= currentPokemonSlice.actions
export default currentPokemonSlice.reducer