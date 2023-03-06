import React from "react";
import { useNavigate } from "react-router-dom";


const ArchivedReading = ({ reading, index, onDelete }) => {
    const navigate = useNavigate();

    const viewReading = () => {
        navigate(`/archive/${reading.id}`);
    }

    return (
        <>

            <p>Reading {index + 1}</p>
            <button onClick={viewReading}>View</button>
            {/* <button onClick={onDelete}>Delete</button> */}

        </>
    )
}

export default ArchivedReading;