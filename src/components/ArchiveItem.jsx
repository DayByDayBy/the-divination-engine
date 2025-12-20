import React from "react";
import PropTypes from "prop-types";
import Spread from "./Spread.jsx";


const ArchiveItem = ({reading }) => {

    return (
    
    
    <>
       <div className="reading-container">
        <Spread cards={reading.cardReadings} onSaveSpread={() => {}} />
        </div>
    </>
    )
}

ArchiveItem.propTypes = {
    reading: PropTypes.shape({
        cardReadings: PropTypes.array
    }).isRequired
};

export default ArchiveItem;