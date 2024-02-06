import React from "react"
import { MdOutlineInbox } from "react-icons/md"

export default function TooltipContentContainer({children}){
    return (
    <div className="tooltip-content">
        <MdOutlineInbox className="tooltip-icon"/> 
        {children}
        <div className="tooltip-close">X</div>
        </div>
        )
}