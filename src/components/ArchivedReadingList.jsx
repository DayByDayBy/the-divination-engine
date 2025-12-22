import React from "react";
import PropTypes from "prop-types";
import ArchivedReading from "./ArchivedReading.jsx";
import { UI_TEXT } from "../constants/index.jsx";

const ArchivedReadingList = ({ readings, handleDeleteReading }) => {
    if (!readings || readings.length === 0) {
        return (
            <div className="archive-empty">
                <p>{UI_TEXT.NO_READINGS}</p>
            </div>
        );
    }

    return (
        <div className="archive-list">
            {readings.map((reading, index) => (
                <div className="archive-item" key={reading.id}>
                    <ArchivedReading
                        reading={reading}
                        index={index}
                        onDelete={() => handleDeleteReading(reading.id)}
                    />
                </div>
            ))}
        </div>
    );
};

ArchivedReadingList.propTypes = {
    readings: PropTypes.arrayOf(PropTypes.shape({
        id: PropTypes.number.isRequired,
        cardReadings: PropTypes.array
    })).isRequired,
    handleDeleteReading: PropTypes.func.isRequired
};

export default ArchivedReadingList;