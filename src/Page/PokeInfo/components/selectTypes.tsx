import getTipo from "../scripts/getTipo"
import Type from "../types"

const SectionInfo: React.FC<{tipos:Type[]}> = ({tipos}) => {

    return (
        <div>
            <label style={{marginRight:"10px"}}> Tipagem: </label>
            
            {tipos && tipos.map((i) => 
                <img key={i.type.name} style={{marginLeft:"20px"}}  alt="" title={i.type.name} width={40} src={`${getTipo(i.type.name)}`}></img>
                )}
        </div>
    )
}

export default SectionInfo