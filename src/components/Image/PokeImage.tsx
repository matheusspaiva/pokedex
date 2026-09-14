const PokeImage: React.FC<{
    pokemonId: number
}> = ({pokemonId}) => {

return (
   <>

                           <div  id={`pokeimage-${pokemonId}`} className='item'>
                            <img width={200}  src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${pokemonId}.png`} />

                        </div>
   </>
)
}


export default PokeImage