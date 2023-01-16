import React  from 'react'
import PacmanLoader from 'react-spinners/PacmanLoader';

const PacMan: React.FC = () => {


    return (
        <div style={{display: "flex", flexWrap:"wrap", alignContent:"center"}}>    
      <PacmanLoader
        color='#d63636'
        size={10}

      />
        </div>
  

    )
}
export default PacMan