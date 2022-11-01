import getNumber from "../scripts/getNumber"

const ImageInfo: React.FC<{numero:string|undefined}> = ({numero}) => {
        return (
            <>
            <img width={300} alt="" src={`https://assets.pokemon.com/assets/cms2/img/pokedex/full/${getNumber(numero!)}.png`}></img>
            </>
            

        )
}
export default ImageInfo