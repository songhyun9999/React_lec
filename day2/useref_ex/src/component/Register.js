/*    회원가입 폼    */
//  이름, 생년월일, 국적, 자기소개

import { useState, useRef } from "react"

const Register = () => {
    const [input,setInput] = useState({
        name:"",
        birth:"",
        country:"",
        bio:""
    })

    const inputRef = useRef()
    const countRef = useRef(0);
    
    const onChange = (e) => {
        countRef.current++
        console.log(countRef.current)
        setInput({
            ...input,
            [e.target.name]:e.target.value
        })
    }

    const onSubmit = () => {
        if (input.name ===''){
            inputRef.current.focus()
        }
        // alert('name:'+input.name+', birth:'+input.birth);

    }

    return (
        <div>
            <div>
                <input ref={inputRef} name="name" value={input.name} onChange={onChange}/>
            </div><br/>
            <div>
                <input name="birth" type="date" value={input.birth} onChange={onChange}/>
            </div><br/>
            <div>
                <select name="country" value={input.country} onChange={onChange}>
                    <option value="">국적 선택</option>
                    <option value="kr">한국</option>
                    <option value="us">미국</option>
                    <option value="uk">영국</option>
                </select>
            </div><br/>
            <div>
                <textarea style={{width:'500px',height:'200px'}} name="bio" value={input.bio} onChange={onChange}/>
            </div><br/>
            <button onClick={onSubmit}> 제 출 </button>
        </div>
    )
}


export default Register