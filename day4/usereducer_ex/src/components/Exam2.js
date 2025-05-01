import { useState,useReducer, act } from "react";

function reducer(state,action){
    //// 1안
    // switch(action.type){
    //     case 'name':
    //         return {...state, name:action.data}
    //     case 'nickname':
    //         return {...state, nickname:action.data}
    //     default:
    //         return state
    // }

    //// 2안
    return {
        ...state,
        [action.name]:action.value
    }

}

function Exam2(){
    // const [name,setName] = useState('')
    // const [nickname,setNickname] = useState('')

    // reducer 로 state 처리
    const [state,dispatch] = useReducer(reducer,{name:'',nickname:''})


    // const onChangeName = (e) => {
    //     setName(e.target.value)
    // }
    // const onChangeNickname = (e) => {
    //     setNickname(e.target.value)
    // }

    const onChange = (e) => {
        //// 1안
        // dispatch({
        //     type: e.target.name == 'name' ? 'name':'nickname',
        //     data: e.target.value
        // })
        //// 2안
        dispatch(e.target)
    }

    return(
        <div>
            <div>
                <input name='name' value={state.name} onChange={onChange}/>
                <input name='nickname' value={state.nickname} onChange={onChange}/>
            </div>
            <div>
                <b>이름:</b>{state.name}
            </div>
            <div>
                <b>닉네임:</b>{state.nickname}
            </div>
        </div>
    )
}


export default Exam2