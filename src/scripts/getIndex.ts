export default function getIndex(url: string, toImage? :boolean){
  const numero = url.split("/").at(-2) 
  if(toImage){
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
  return numero!
}