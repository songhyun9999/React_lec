import { useState } from "react";

function Count(){
    const [count,setCount] = useState(0)

    const CountHandler = (e) =>{
        setCount(count+1)
    }

    return(
        <div>
            <h1>{count}</h1>
            <button onClick={CountHandler}>+</button>
        </div>
    )
}

export default Count