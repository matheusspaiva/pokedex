import { Modal } from "../../../components/Modal/Modal";
import { useModal } from "../../../components/Modal/useModal";
import PokeInfo from "../types"
import './../index.css';

const Informations: React.FC<{info:PokeInfo}> = ({info}) => {
    const { isShown, toggle, setIsShown } = useModal();
    return (

        <>
        <div style={{marginTop:"10px"}}>
            {info && 
            <>
            <div className="info-box"> 
                <div>
                    <label>Peso: {info.weight/10} Kg</label>
                </div>
                <div>
                    <label>Altura: {info.height/10} m</label>
                </div>
            </div>
            <div className="move-box" style={{backgroundColor:"gray", marginTop:"10px"}}>
                <label>Movimentos : </label>
                {info.moves.slice(0,4).map(item=>
                    <div key={item.move.name}>
                    {item.move.name}
                    </div>
                    )}
                   <div className="extra-moves" onClick={()=> setIsShown(true)}><p>. . .</p> </div>
            </div>

            </>
            }
        </div>
        <Modal isShown={isShown} hide={toggle} modalContent={<>
            {info.moves.map(item=>
                    < div key={item.move.name}>
                    {item.move.name}
                    </div>
                    )}
        </>} headerText={"Lista de Habilidades Completa"} />
        </>
    )
}

export default Informations