import React from "react";
import PropTypes from "prop-types";
import { useNavigate } from "react-router-dom";
import { UI_TEXT, ROUTES } from "../constants/index.jsx";


const ArchivedReading = ({ reading, index, onDelete }) => {
    const navigate = useNavigate();

    const viewReading = () => {
        navigate(`${ROUTES.ARCHIVE}/${reading.id}`);
    }
    

    return (
        <>

            <p>Reading {index + 1}</p>
            <button className="save-button" onClick={viewReading}>{UI_TEXT.VIEW_BUTTON}</button>
            <button className="delete-button" onClick={onDelete}>{UI_TEXT.DELETE_BUTTON}</button>

        </>
    )
}

ArchivedReading.propTypes = {
    reading: PropTypes.shape({
        id: PropTypes.number.isRequired
    }).isRequired,
    index: PropTypes.number.isRequired,
    onDelete: PropTypes.func.isRequired
};

export default ArchivedReading;