import React from "react";
import Spread from "./Spread";


const ArchiveItem = ({reading }) => {

    return (
    
    
    <>
       <div className="reading-container">
        <Spread cards={reading.cardReadings} onSaveSpread={() => {}} />
        </div>
    </>
    )
}
  

export default ArchiveItem;