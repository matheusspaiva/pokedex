const PokeImage: React.FC<{
    pokemonId: number,
    weight?: 'mini'| 'default'
}> = ({pokemonId, weight= 'default'}) => {

return (
   <>

                           <div  id={`pokeimage-${pokemonId}`} className='item'>
                            <img alt='pokemon'   style={weight === 'mini' ? { width: '150px', height: '150px' } : undefined}    src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${pokemonId}.png`} />

                        </div>
   </>
)
}


export default PokeImage