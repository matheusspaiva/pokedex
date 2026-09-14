import { useState } from "react";
import { ProgressBar } from "react-bootstrap";
import { Modal } from "../../../components/Modal/Modal";
import { useModal } from "../../../components/Modal/useModal";
import PokeInfo from "../types/PokeInfo"
import './../styles/index.css';
import SelectTypeSection from "./SelectTypes";

const Informations: React.FC<{ info: PokeInfo }> = ({ info }) => {
    const { isShown, toggle, setIsShown } = useModal();
    const [infoShow, setInfoShow] = useState<boolean>(false)
    const [statusShow, setStatusShow] = useState<boolean>(false)

    return (

        <>
            <div style={{ marginTop: "10px" }}>
                {info &&
                    <>
                        <div className="info-box">
                            <div>
                                <div>
                                    <label>Peso: {info.weight / 10} Kg</label>
                                </div>
                                <div>
                                    <label>Altura: {info.height / 10} m</label>
                                </div>
                            </div>
                            <div className="info-stats" onClick={() => {setIsShown(true); setInfoShow(false); setStatusShow(true)}}>
                              <SelectTypeSection tipos={info.types} />
                            </div>

                        </div>
                        

                    </>
                }
            </div>
            <Modal isShown={isShown &&statusShow} hide={toggle} modalContent={<>
                {info.stats.map(item =>
                    <div key={item.stat.name} className="status-box">
                      {item.stat.name}
                      <ProgressBar variant="danger" max={255} now={item.base_stat} label={`${item.base_stat}`}/>  
                    </div>
                )}
            </>} headerText={"Status basico"} />

            <Modal isShown={isShown && infoShow} hide={toggle} modalContent={<>
                {info.moves.map(item =>
                    < div key={item.move.name}>
                        {item.move.name}
                    </div>
                )}
            </>} headerText={"Lista de Habilidades Completa"} />
        </>
    )
}

export default Informations