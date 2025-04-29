import { use, useState } from "react";

function Body(){
    console.log('update!!')
    const [count,setcount] = useState(0);
    const [text,setText] = useState('');
    const [date,setDate] = useState('');
    const [option,setOption] = useState('');

    const onIncrease = () => {
        setcount(count+1)
    }
    const handleChange = (e) =>{
        setText(e.target.value);
        console.log(text);
    }
    const handleChange2 = (e) =>{
        setDate(e.target.value);
        console.log(date);
    }
    const handleOnChange = (e)=>{
        console.log('변경된 값:',e.target.value);
        setOption(e.target.value);
    }
    return(
        <div>
            <h2>{count}</h2>
            <button onClick={onIncrease}> + </button>
            <br/>
            <input value = {text} onChange={handleChange}/><br/><br/>
            <input type = 'date' value={date} onChange={handleChange2}/><br/>
            <select value={option} onChange={handleOnChange}>
                <option key = {'1번'}>1번</option>
                <option key = {'2번'}>2번</option>
                <option key = {'3번'}>3번</option>
            </select>
        </div>
    )
}

export default Body;