import React from "react"
import {TestimonialContext} from "./Testimonial"

export default function TestimonialText({children}){
    const {variant} = React.useContext(TestimonialContext)
    
    console.log(variant)
    
    return <p className={`testimonialText ${variant === "picture" && "text-picture"}`}>{children}</p>
}