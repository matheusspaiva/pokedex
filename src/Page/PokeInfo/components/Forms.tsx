import { useEffect, useState } from "react";
import { Modal } from "../../../components/Modal/Modal";
import { useModal } from "../../../components/Modal/useModal";
import './../styles/index.css';
import { Variety } from "../types/PokeSpecie";
import PokeImage from "../../../components/Image/PokeImage";
import getIndex from "../../../scripts/getIndex";

const FormsPoke: React.FC<{ forms: Variety[] }> = ({ forms }) => {
    const { isShown, toggle, setIsShown } = useModal();
    const [mega, setMega] = useState<Variety[]>([])
    const [gmax, setGmax] = useState<Variety[]>([])

    const [currentVariety, setCurrentVariety] = useState<Variety[]>([])
            useEffect(() => {
        
                setMega(forms.filter(x=> x.pokemon.name.includes('-mega')))
        
                setGmax(forms.filter(x=> x.pokemon.name.includes('-gmax')))
            }, [forms])

    return (

<>

<Modal headerText={"Status basico"}  isShown={isShown} hide={toggle} modalContent={<>
                {currentVariety.map(item =>
                    <div className="status-box">
                      {item.pokemon.name}
                       <PokeImage pokemonId={Number(getIndex(item.pokemon.url, true))} />
                    </div>
                )}
            </>}  />

            
        <div>

            {mega.length > 0 && <button onClick={()=> {setCurrentVariety(mega); setIsShown(true)}}>botão chama mega</button>}

            {gmax.length > 0 && <button onClick={() => {setCurrentVariety(gmax); setIsShown(true)} }>botão chama gmax</button>}

        </div>
</>
    )
}

export default FormsPoke