import { useState } from "react"
import useInput from "../hooks/useInput"


/*    React Hook 사용 시 주의사항    */
// 1. component 함수 외에는 사용할 수 없음
// 2. if문, for문 사용할 수 없음

// function useInput(){
//     const [input,setInput] = useState('')

//     const onChange = (e) => {
//         setInput(e.target.value)
//     }

//     return [input,onChange]
// }

const HookExam = () => {
    const [input,onChange] = useInput()
    const [input2,onChange2] = useInput()
    
    return (
        <div>
            <input value={input} onChange={onChange}/>
            <input value={input2} onChange={onChange2}/>
        </div>
    )
}

export default HookExam