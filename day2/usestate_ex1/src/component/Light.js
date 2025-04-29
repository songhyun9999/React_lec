import { useState } from "react";

function Light(){
    const [light,SetLight] = useState(false)

    const OnLightHandler = (e) =>{
        SetLight(!light)
    }
    return(
        <div>
            <h1 style={{backgroundColor:light?'orange':'gray'}}>{light ? 'On':'OFF'}</h1>
            <button onClick={OnLightHandler}>{light ? '끄기':'켜기'}</button>
        </div>
    )
}

export default Light