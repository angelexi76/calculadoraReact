import React from 'react'

function PanelHistorial() {
    return (
        <div  className="panel_historial ligth" id='panel_historial'>
            <ul id='lista_historial'>
                <div className="historialVacio">
                    <p><i className="fas fa-box-open"></i></p>
                    <p className="vacioText">No Hay Historial</p>
                </div>
            </ul>

            <div className="box_btn_borrar_historial" id="box_borrar_historial">
                <button className="btn_borrar_historial" id="eliminarHistorial">Eliminar historial</button>
            </div>
        </div>
    )
}

export default PanelHistorial
