import Carrossel from "../../../components/Carrossel";
import PokeImage from "../../../components/Image/PokeImage";
import { Modal } from "../../../components/Modal/Modal";
import { useModal } from "../../../components/Modal/useModal";
import getNumber from "../scripts/getNumber"
import './../styles/index.css';

const ImageInfo: React.FC<{numero:string|undefined , images : string[]}> = ({numero,images}) => {
    const { isShown, toggle, setIsShown } = useModal();
    
        return (
            <>
            
            <div onClick={()=> setIsShown(true)} className="imageContent">
                     <PokeImage pokemonId={Number(getNumber(numero!))} />
            </div>
            
            <Modal isShown={isShown} hide={toggle} modalContent={<>
                <Carrossel urls={images} />
        </>} headerText={"SPRITS"} />

            </>

            

        )
}
export default ImageInfo