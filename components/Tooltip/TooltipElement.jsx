import React from "react"

export default function TooltipElement({children}){
   return <div className="tooltip">
                {children}
                <div className="tooltip-bottom-container"></div>
            </div>
}