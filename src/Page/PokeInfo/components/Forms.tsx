import { useEffect, useState } from "react";
import { Modal } from "../../../components/Modal/Modal";
import { useModal } from "../../../components/Modal/useModal";
import './../styles/index.css';
import { Variety } from "../types/PokeSpecie";
import PokeImage from "../../../components/Image/PokeImage";
import getIndex from "../../../scripts/getIndex";
import { useNavigate } from 'react-router-dom'


const FormsPoke: React.FC<{ forms: Variety[] }> = ({ forms }) => {
    const { isShown, toggle, setIsShown } = useModal();
    const [mega, setMega] = useState<Variety[]>([])
    const [gmax, setGmax] = useState<Variety[]>([])
    const [regional, setRegional] = useState<Variety[]>([])

const navigate = useNavigate()
    const [currentVariety, setCurrentVariety] = useState<Variety[]>([])
            useEffect(() => {
                const megaForms = forms.filter(x=> x.pokemon.name.includes('-mega'))
                setMega(megaForms)
                const gmaxForms = forms.filter(x=> x.pokemon.name.includes('-gmax'))
                setGmax(gmaxForms)
                const anotherForms = [...gmaxForms.map(g => g.pokemon.name), ...megaForms.map(m => m.pokemon.name)]
           
                const regionalForms = forms.filter(x => x.pokemon.name.includes('-') && !anotherForms.includes(x.pokemon.name))

                setRegional(regionalForms)
            }, [forms])

    return (

<>

<Modal headerText={"Status basico"}  isShown={isShown} hide={toggle} modalContent={<>
<div className="variety-list">
    {currentVariety.map(item =>
        <div
            onClick={() => {
                setIsShown(false);
                navigate(`/pokedex/Pokemons/${getIndex(item.pokemon.url, true)}`)
            }}
            key={item.pokemon.name}
            className="status-box"
        >
            {item.pokemon.name}
            <PokeImage
                weight="mini"
                pokemonId={Number(getIndex(item.pokemon.url, true))}
            />
        </div>
    )}
</div>
            </>}  />

            
        <div>

            {mega.length > 0 && <button className="form-button" type="button" onClick={()=> {setCurrentVariety(mega); setIsShown(true)}}>Forma Mega</button>}
            {gmax.length > 0 && <button className="form-button" type="button" onClick={() => {setCurrentVariety(gmax); setIsShown(true)} }>Forma Gigamax</button>}
            {regional.length > 0 && <button className="form-button" type="button" onClick={() => {setCurrentVariety(regional); setIsShown(true)} }>Forma Regional</button>}


        </div>
</>
    )
}

export default FormsPoke
