import { useEffect, useState } from "react"

function EffectOne(){
    const [Counter,setCounter] = useState(0);

    function Inc(){
        setCounter(Counter+1)
    }
    function Dec(){
        if(Counter>0) setCounter(Counter-1);
    }
    useEffect(()=>{
        console.log("Code Executed")
    })
    return(
        <div>
            <h1>Counter : {Counter}</h1>
            <button onClick={Inc}>+</button>
            <button onClick={Dec}>-</button>
        </div>
    )
}
export default EffectOne;