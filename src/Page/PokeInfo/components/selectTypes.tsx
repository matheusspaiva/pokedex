import getTipo from "../scripts/getTipo"
import Type from "../types"
import './../index.css';

const SectionInfo: React.FC<{tipos:Type[]}> = ({tipos}) => {

    return (
        <div className="section-type">
            <div className="type-Card"> 
            {tipos && tipos.map((i) => 
                <img key={i.type.name} style={{marginLeft:"10px", marginRight:'10px'}}  alt="" title={i.type.name} width={40} src={`${getTipo(i.type.name)}`}></img>
                )}
        </div>
        </div>
    )
}

export default SectionInfo