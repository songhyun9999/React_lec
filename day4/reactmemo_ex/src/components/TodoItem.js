import "./TodoItem.css";
import { memo } from "react";

const TodoItem = ({ id, isDone, content, date, onUpdate, onDelete }) => {

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