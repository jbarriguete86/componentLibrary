import React from "react"
import Tooltip from "./Tooltip/index"
import BannerExample from "./BannerExample"

export default function TooltipExample(){
    return (
        <Tooltip>
            <Tooltip.Element>
                <Tooltip.ContentContainer>
                    <Tooltip.TextContainer>
                        <Tooltip.Title>Archive notes</Tooltip.Title>
                        <Tooltip.Text>Lorem ipsum dolor sit amet consectetur adipisicing elit oluptatum tenetur.</Tooltip.Text>
                    </Tooltip.TextContainer>
                </Tooltip.ContentContainer>
            </Tooltip.Element>
            <Tooltip.Trigger><BannerExample /></Tooltip.Trigger>
        </Tooltip>
    )
}