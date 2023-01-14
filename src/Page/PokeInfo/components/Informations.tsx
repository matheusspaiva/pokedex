import { Modal } from "../../../components/Modal/Modal";
import { useModal } from "../../../components/Modal/useModal";
import PokeInfo from "../types"

const Informations: React.FC<{info:PokeInfo}> = ({info}) => {
    const { isShown, toggle, setIsShown } = useModal();
    return (

        <>
        <div style={{marginTop:"10px"}}>
            {info && 
            <>
            <div>
                <label>Peso: {info.weight/10} Kg</label>
            </div>
            <div>
                <label>Altura: {info.height/10} m</label>
            </div>

            <div style={{backgroundColor:"gray", marginTop:"10px"}}>
                <label>Abilidades:: </label>
                {info.moves.slice(0,4).map(item=>
                    <>
                    <br></br>
                    {item.move.name}
                    </>
                    )}
                    <br></br>
                   <div onClick={()=> setIsShown(true)}> ... </div>
            </div>

            </>
            }
        </div>
        <Modal isShown={isShown} hide={toggle} modalContent={<>
            {info.moves.map(item=>
                    <>
                    {item.move.name}
                    <br></br>
                    </>
                    )}
        </>} headerText={"Lista de Habilidades Completa"} />
        </>
    )
}

export default Informations