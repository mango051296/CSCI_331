import { useState, userEffect } from "react"
import './styles.css'

export default function CountButton(){
    let[count, setCount] = useState(0)
    function handleClick(){
        setCount(count + 1);
    }
    return (
        <div>
        <button className="button" onClick={handleClick}>+1</button>
        <div>{count}</div>
        </div>
        
    )
}
