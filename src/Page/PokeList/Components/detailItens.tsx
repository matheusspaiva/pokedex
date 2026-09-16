
import { useState } from "react";
import { pokeApi } from "../../../api/pokeApi";
import { IItem } from "../types/IItem";
import { translate } from "../../../Utils/translate";
import Tooltip from "../../../components/ma/Tooltip";
import { FaQuestion } from 'react-icons/fa'
import { FaSpinner } from 'react-icons/fa'


const DetailItens: React.FC<{item: string}> = ({item}) => {

    const [loadText, setLoadText] = useState<boolean>(false) 
    const [translateText, setTranslateText] = useState<string>('Usado em batalha')
    async function getDescription(){
        setLoadText(true)
        const response = await pokeApi.get<IItem>(`/item/${item}`)

        const text = response.data.effect_entries.find(x=> x.language.name === 'en')?.effect ?? ''
   
        const textTranslate = await translate(item, text)

        setTranslateText(textTranslate)
        setLoadText(false)
   
    }
        return (
            <>
            
            <Tooltip text={translateText}>

                {loadText && <FaSpinner size={12}/>}
            {!loadText && <span onMouseEnter={() => getDescription()}><FaQuestion size={12}/> </span>}
</Tooltip>


            </>

            

        )
}
export default DetailItens