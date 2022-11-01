import fire from "../../../assets/TipoPokemon/fire.png"
import Grass from "../../../assets/TipoPokemon/Grass.png"
import ice from "../../../assets/TipoPokemon/Ice.png"
import Flying from "../../../assets/TipoPokemon/Flying.png"
import Bug from "../../../assets/TipoPokemon/Bug.png"
import Eletric from "../../../assets/TipoPokemon/Eletric.png"
import Poison from "../../../assets/TipoPokemon/Poison.png"
import Ghost from "../../../assets/TipoPokemon/Ghost.png"
import Steel from "../../../assets/TipoPokemon/Steel.png"
import Normal from "../../../assets/TipoPokemon/Normal.png"
import Dark from "../../../assets/TipoPokemon/Dark.png"
import Psychic from "../../../assets/TipoPokemon/Psychic.png"
import Fighting from "../../../assets/TipoPokemon/Fighting.png"
import Rock from "../../../assets/TipoPokemon/Rock.png"
import Dragon from "../../../assets/TipoPokemon/Dragon.png"
import Ground from "../../../assets/TipoPokemon/Ground.png"
import Fairy from "../../../assets/TipoPokemon/Fairy.png"
import Water from "../../../assets/TipoPokemon/Water.png"

export default function getTipo(tipagem : string){
    //alert(tipagem)
    // [ 'normal',--
    // 'fighting',--
    // 'flying',--
    // 'poison',--
    // 'ground',--
    // 'rock',--
    // 'bug',--
    // 'ghost',--
    // 'steel',--
    // 'fire',--
    // 'water',
    // 'grass',--
    // 'electric',--
    // 'psychic',--
    // 'ice',--
    // 'dragon',--
    // 'dark',--
    // 'fairy',
    // 'unknown',
    // 'shadow' ]

        if(tipagem==="fire"){
            return fire
        }
        else if(tipagem==="grass"){
            return Grass
        }
        else if(tipagem==="ice"){
            return ice
        }
        else if(tipagem==="bug"){
            return Bug
        }
        else if(tipagem==="poison"){
            return Poison
        }
        else if(tipagem==="electric"){
            return Eletric
        }
        else if(tipagem==="ice"){
            return ice
        }
        else if(tipagem==="flying"){
            return  Flying
        }
        else if(tipagem==="normal"){
            return  Normal
        }
        else if(tipagem==="steel"){
            return  Steel
        }
        else if(tipagem==="ghost"){
            return  Ghost
        }
        else if(tipagem==="dark"){
            return  Dark
        }
        else if(tipagem==="psychic"){
            return  Psychic
        }
        else if(tipagem==="fighting"){
            return  Fighting
        }
        else if(tipagem==="ground"){
            return  Ground
        }
        else if(tipagem==="rock"){
            return  Rock
        }
        else if(tipagem==="dragon"){
            return  Dragon
        }
        else if(tipagem==="fairy"){
            return  Fairy
        }
        else if(tipagem==="water"){
            return  Water
        }
}