import React, { CSSProperties }  from 'react'
import RingLoader from 'react-spinners/RingLoader';


const Ring: React.FC = () => {

    const override: CSSProperties = {
        display: "block",
        margin: "0 auto",
        borderColor: "red",
        marginTop : '10px'
      };
      

    return (
        <div style={{display: "flex", flexWrap:"wrap", alignContent:"center"}}>    
      <RingLoader
        color='#d63636'
        loading={true}
        cssOverride={override}
        size={100}
        aria-label="Loading Spinner"
        data-testid="loader"
      />
        </div>
  

    )
}
export default Ring