import React from 'react'

function Theme() {
    return (
        <div className="modo">
            <i className="fas fa-sun"></i>
            <div className="switchs ligth">
                <input type="checkbox" name="" id="darkmode" />
                <label htmlFor="darkmode"></label>
            </div>
            <i className="fas fa-moon"></i>
        </div>
    )
}

export default Theme;
