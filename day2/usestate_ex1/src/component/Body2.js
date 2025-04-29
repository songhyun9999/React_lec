import { useState } from "react";

function Body2(){
    const [name,SetName] = useState('')
    const [gender,SetGender] = useState('')
    const [birth,SetBirth] = useState('')
    const [bio,SetBio] = useState('')

    const onChangeName = (e) =>{
        SetName(e.target.value);
    }
    const onChangeGender = (e) =>{
        SetGender(e.target.value);
    }
    const onChangeBirth = (e) =>{
        SetBirth(e.target.value);
    }
    const onChangeBio = (e) =>{
        SetBio(e.target.value);
    }

    return(
        <div>
            <div>
                <input value={name} onChange={onChangeName} placehold="이름"/>
            </div>
            <div>
                <select value={gender} onChange={onChangeGender}>
                    <option key={''}/>
                    <option key={'남성'}>남성</option>
                    <option key={'여성'}>여성</option>

                </select>
            </div>
            <div>
                <input type='date' value={birth} onChange={onChangeBirth}/>
            </div>
            <div>
                <textarea value={bio} onChange={onChangeBio}/>
            </div>
        </div>
    )
}


export default Body2