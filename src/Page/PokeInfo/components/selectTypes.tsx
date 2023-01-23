import { useState } from "react";
import { Modal } from "../../../components/Modal/Modal";
import { useModal } from "../../../components/Modal/useModal";
import { ITypeDetail } from "../ITypeDetail";
import getTipo from "../scripts/getTipo"
import Type from "../types"
import './../index.css';

const SectionInfo: React.FC<{ tipos: Type[] }> = ({ tipos }) => {

    const [iTipo, setTipo] = useState<ITypeDetail | null>(null)
    const { isShown, toggle, setIsShown } = useModal();

    const handleName = (tipagem: string) => {
        fetch(`https://pokeapi.co/api/v2/type/${tipagem}`).then(response => {
            return response.json();
        }).then(data => {

            setTipo(data)
            setIsShown(true)
        })
    };

    return (
        <>
            <Modal isShown={isShown} hide={toggle} modalContent={<>
                <div id="menu">
                    <div className="column-type">
                        <p className="type-text">Dano duplo de :</p>
                        {iTipo && iTipo?.damage_relations?.double_damage_from?.map((i) =>
                            <img alt="" title={i.name} width={40} src={`${getTipo(i.name)}`}></img>
                        )}
                    </div>
                    <div className="column-type">
                        <p className="type-text">Dano duplo para:  </p>
                        {iTipo && iTipo?.damage_relations?.double_damage_to?.map((i) =>
                            <img alt="" title={i.name} width={40} src={`${getTipo(i.name)}`}></img>
                        )}
                    </div>
                    <div className="column-type">
                        <p className="type-text">Metade do dano para: </p>
                        {iTipo && iTipo?.damage_relations?.half_damage_from?.map((i) =>
                            <img alt="" title={i.name} width={40} src={`${getTipo(i.name)}`}></img>
                        )}
                    </div>
                    <div className="column-type">
                        <p className="type-text">Metade do dano de:</p>
                        {iTipo && iTipo?.damage_relations?.half_damage_to?.map((i) =>
                            <img alt="" title={i.name} width={40} src={`${getTipo(i.name)}`}></img>
                        )}
                    </div>
                    <div className="column-type">
                        <p className="type-text">Sem dano de: </p>
                        {iTipo && iTipo?.damage_relations?.no_damage_from?.map((i) =>
                            <img alt="" title={i.name} width={40} src={`${getTipo(i.name)}`}></img>
                        )}
                    </div>
                    <div className="column-type">
                        <p className="type-text">Sem dano para: </p>
                        {iTipo && iTipo?.damage_relations?.no_damage_to?.map((i) =>
                            <img alt="" title={i.name} width={40} src={`${getTipo(i.name)}`}></img>
                        )}
                    </div>

                </div>
            </>} headerText={"RELAÇÃO DE DANOS COM OUTRO TIPO"} />

            <div className="section-type">
                <div className="type-Card">
                    {tipos && tipos.map((i) =>
                        <img onClick={() => handleName(i.type.name)} key={i.type.name} style={{ marginLeft: "10px", marginRight: '10px', marginTop: "5px", marginBottom: '5px' }} alt="" title={i.type.name} width={40} src={`${getTipo(i.type.name)}`}></img>
                    )}
                </div>
            </div>

        </>
    )
}

export default SectionInfo