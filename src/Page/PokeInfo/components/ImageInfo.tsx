import Carrossel from "../../../components/Carrossel";
import { Modal } from "../../../components/Modal/Modal";
import { useModal } from "../../../components/Modal/useModal";
import getNumber from "../scripts/getNumber"
import './../index.css';
const ImageInfo: React.FC<{numero:string|undefined , images : string[]}> = ({numero,images}) => {
    const { isShown, toggle, setIsShown } = useModal();
    
        return (
            <>
            
            <div onClick={()=> setIsShown(true)} className="imageContent">
            <img width={300} alt="" src={`https://assets.pokemon.com/assets/cms2/img/pokedex/full/${getNumber(numero!)}.png`}></img>
            </div>
            
            <Modal isShown={isShown} hide={toggle} modalContent={<>
                <Carrossel urls={images} />
        </>} headerText={"Lista de Habilidades Completa"} />

            </>

            

        )
}
export default ImageInfo