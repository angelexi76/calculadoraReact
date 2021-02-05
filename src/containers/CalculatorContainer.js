import React from 'react'

function CalculatorContainer({children}) {
    return (
       <div className="grid-container" id="calculadora">
           {children}
       </div>
    )
}

export default CalculatorContainer
