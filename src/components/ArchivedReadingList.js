import React from "react";
import ArchivedReading from "./ArchivedReading";



const ArchivedReadingList = ({ readings, handleDeleteReading }) => {
    console.log('handleDeleteReading:', handleDeleteReading);


    const readingsForRender = readings.map(( reading, index ) => {
        return (
        <div className="archive-item" key={reading.id}>
            <ArchivedReading
                key={reading.id}
                reading={reading}
                index={index}
                onDelete={() => handleDeleteReading(reading.id)}             
                />
        </div>);
    });



    return (
    
    
    <div>
        {readingsForRender}

 {/* <ArchivedReadingList readings={readings} onDelete={handleDeleteReading} /> */}
        {/* <a href={`/api/readings/${reading.id}`}> */}
        {/* <p>Reading {index + 1}</p> */}
        {/* </a> */}


    </div>

    )

}

export default ArchivedReadingList;