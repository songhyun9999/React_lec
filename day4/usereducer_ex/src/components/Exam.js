import {act, useReducer} from 'react'

function reducer(state,action){
    switch(action.type){
        case 'INCREASE':
            return state + action.data
        case 'DECREASE':
            return state + action.data
        default:
            return state
    }

}

const Exam = () => {
    const [state,dispatch] = useReducer(reducer,0)

    const onClickPlus = () => {
        // console.log('plus call')
        dispatch({
            type: 'INCREASE',
            data: 1
        })
    }
    const onClickMinus = () => {
        // console.log('minus call')
        dispatch({
            type: 'DECREASE',
            data: -1
        })
    }

    return (
        <div>
            <h1>Exam</h1>
            <h2>{state}</h2>
            <button onClick={onClickPlus}>+</button>
            <button onClick={onClickMinus}>-</button>
        </div>
    )
}

export default Exam