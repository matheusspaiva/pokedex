
import PokeInfo from "../types/PokeInfo"
import './../styles/index.css';
import SelectTypeSection from "./SelectTypesSection";


const Informations: React.FC<{ info: PokeInfo }> = ({ info }) => {

    return (

        <>
            <div className="pokemon-info-panel">
                {info &&
                    <>
                        <div className="info-box">
                            <div className="physical-data">
                                <div>
                                    <span>Peso</span>
                                    <strong>{info.weight / 10} kg</strong>
                                </div>
                                <div>
                                    <span>Altura</span>
                                    <strong>{info.height / 10} m</strong>
                                </div>
                            </div>
                            <SelectTypeSection tipos={info.types} />
                   
                        </div>
                        

                    </>
                }
            </div>

        </>
    )
}

export default Informations
