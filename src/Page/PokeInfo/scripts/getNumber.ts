export default function getNumber(numero: string){

    if(numero?.length===1){
        return `00${numero}`
    }
    if(numero?.length===2){
        return `0${numero}`
    }
    if(numero?.length===3){
        return `${numero}`
    }
}