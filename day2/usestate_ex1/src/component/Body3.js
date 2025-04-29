import { useState } from "react";

function Body3(){
    const [state, setState] = useState({
        name:"",
        gender:"",
        birth:"",
        bio:""
    });

    const handleOnChange = (e) => {
        console.log('현재 수정 대상:', e.target.name);
        console.log('수정값:', e.target.value);
        setState({
            ...state,
            [e.target.name]: e.target.value
        });
        console.log(state);
    }

    return (
        <div>
            <div>
                <input name='name' value={state.name} onChange={handleOnChange}/>
            </div>
            <div>
                <select name='gender' value={state.gender} onChange={handleOnChange}>
                    <option key={""}>성별 선택</option>
                    <option key={"남성"}>남성</option>
                    <option key={"여성"}>여성</option>
                </select>
            </div>
        </div>
    );
}

export default Body3;