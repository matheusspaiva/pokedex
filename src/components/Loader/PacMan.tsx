import React, { CSSProperties }  from 'react'
import PacmanLoader from 'react-spinners/PacmanLoader';

const PacMan: React.FC = () => {

    const override: CSSProperties = {
        display: "block",
        margin: "0 auto",
        borderColor: "red",
        marginTop : '10px'
      };
      

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