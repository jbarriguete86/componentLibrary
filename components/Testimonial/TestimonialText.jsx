import React from "react"
import {TestimonialContext} from "./Testimonial"
import { FaQuoteLeft, FaQuoteRight  } from "react-icons/fa"

export default function TestimonialText({children}){
    const {variant} = React.useContext(TestimonialContext)
    
    console.log(variant)
    
    return <p className={`testimonialText ${variant === "picture" && "text-picture"}`}><span><FaQuoteLeft/></span> {children}{variant === "logo" && <span><FaQuoteRight /></span>}</p>
}