import getNumber from "../scripts/getNumber"
import './../index.css';
const ImageInfo: React.FC<{numero:string|undefined}> = ({numero}) => {
        return (
            <div className="imageContent">
            <img width={300} alt="" src={`https://assets.pokemon.com/assets/cms2/img/pokedex/full/${getNumber(numero!)}.png`}></img>
            </div>
            

        )
}
export default ImageInfo