import React, { CSSProperties }  from 'react'
import PulseLoader from 'react-spinners/PulseLoader';


const Pulse: React.FC = () => {

    const override: CSSProperties = {
        display: "block",
        margin: "0 auto",
        borderColor: "red",
        marginTop : '10px'
      };
      

    return (
        <div style={{display: "flex", flexWrap:"wrap", alignContent:"center"}}>    
      <PulseLoader
        color='#d63636'
        loading={true}
        cssOverride={override}
        size={40}
        aria-label="Loading Spinner"
        data-testid="loader"
      />
        </div>
  

    )
}
export default Pulse