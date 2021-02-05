import React from 'react'

function IconsPanel() {
    return (
        <div className="grid-item grid-header-footer">
             <span className="header-icon">
                    <i className="fas fa-clock btn_historial" id="btn_historial"></i>
                    <i className="fas fa-square-root-alt"></i>
                    <i className="fas fa-ruler-horizontal"></i>
                </span>
                <span id="borrar" className="borrar"><i className="fas fa-backspace"></i></span>
        </div>
    )
}

export default IconsPanel
