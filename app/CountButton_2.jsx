import { useState, userEffect } from "react"
import './styles.css'
export default function CountButton_2(){
    let[count, setCount] = useState(0)
    function handleClick(){
        setCount(count + 2);
    }
    return (
        <div>
        <button className="button" onClick={handleClick}>+2</button>
        <div>{count}</div>
        </div>
        
    )
}