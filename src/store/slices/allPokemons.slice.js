import { createSlice } from "@reduxjs/toolkit";

const allPokemonsSlice=createSlice({
  name:'allPokemons',
  initialState: [],
  reducers: {
    setAllPokemons: (state,action)=>action.payload

  }
})
export const{setAllPokemons} =allPokemonsSlice.actions

export default allPokemonsSlice.reducer