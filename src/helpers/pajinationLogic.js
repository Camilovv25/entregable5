export const paginationLoginc = (currentPage, pokemonsFilter)=>{
  
  const pokemonsPerPage = 12 // cantidad de pokemons por pagina

  const sliceStart= (currentPage -1)*pokemonsPerPage
  const sliceEnd = currentPage*pokemonsPerPage
  const pokemonsInPage = pokemonsFilter.slice(sliceStart,sliceEnd) //pokemons que se van a mostrar en la pagina actual

  const lastPage= Math.ceil(pokemonsFilter.length/pokemonsPerPage) //ultima pagina

  const pagesPerBlock = 5   //cantidad de paginas por bloque
  const actualBlock = Math.ceil(currentPage/pagesPerBlock) //bloque actual

  const pagesInBlock =[]
  const minPage= (actualBlock * pagesPerBlock - pagesPerBlock) +1
  const maxPage= actualBlock * pagesPerBlock
  for(let i =minPage; i<=maxPage; i++ ){
    if(i<= lastPage){
      pagesInBlock.push(i)
    }
  }

  return {pagesInBlock, lastPage, pokemonsInPage}
}
