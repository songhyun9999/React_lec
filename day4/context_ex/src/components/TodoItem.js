import "./TodoItem.css";
import { memo, useContext } from "react";

import { TodoDispatchContext } from "../App";

const TodoItem = ({ id, isDone, content, date}) => {
    // Context 를 통해 받게 되면 전달되는 값을 새로운 객체로 생성하여 받음
    // 따라서 함수 전달에 따른 리렌더링이 일어남
    // 이를 해결하기 위해 변경되는 값과 변경되지 않는 값을 저장하는 Context를 각각 생성
    // 변경되지 않는 값을 저장하는 Context는 새로운 객체를 생성하여 전달하지않음
    const {onUpdate, onDelete} = useContext(TodoDispatchContext)

    const onChangeCheckbox = () => {
        onUpdate(id);
    }

    const onClickDeleteButton = () => {
        onDelete(id);
    }
    return (
        <div className="TodoItem">
            <input checked={isDone} type="checkbox" onChange={onChangeCheckbox}/>
            <div className="content">{content}</div>
            <div className="date">
                {new Date(date).toLocaleDateString()}
            </div>
            <button onClick={onClickDeleteButton}>삭제</button>
        </div>
    );
}

export default memo(TodoItem,(prevProps,nextProps) => {
    // true -> props 바뀌지 않음 -> 리렌더링 X
    // false -> props 바뀜 -> 리렌더링 O

    if(prevProps.id != nextProps.id ||
        prevProps.isDone != nextProps.isDone ||
        prevProps.content != nextProps.content ||
        prevProps.date != nextProps.date) return false
    
    return true
});