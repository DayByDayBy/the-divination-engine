import React from "react";
import ArchivedReading from "./ArchivedReading";



const ArchivedReadingList = ({ readings, onDelete }) => {


    const readingsForRender = readings.map((reading, index) => {
        return <div className="archive-item">
            <ArchivedReading
                key={reading.id}
                reading={reading}
                index={index}
                onDelete={onDelete} />
        </div>;
    });



    return (<div>

        {readingsForRender}

        {/* <a href={`/api/readings/${reading.id}`}> */}
        {/* <p>Reading {index + 1}</p> */}
        {/* </a> */}


    </div>

    )

}

export default ArchivedReadingList;