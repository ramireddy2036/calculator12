import { useState } from "react";
import Calculater from "./calculater";
import './calculater.css'
function Handle()
{
    let[num, upDatenum]=useState("")
function Operation(value)
{
 upDatenum(num+value)
}
function Cal()
{
 let valuation=eval(num)
 upDatenum(valuation)
}
function Clear()
{
 upDatenum("")
}
    return(
        <>
        <div className="container">
            <input type="text" value={num} className="input"/>
            <Calculater Operation={Operation} Caluation={Cal} Clr={Clear}></Calculater>

        </div>
        </>
    )
}
export default Handle