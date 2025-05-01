import "./Editor.css";
import { useState, useRef, useContext, memo } from "react";

import { TodoDispatchContext } from "../App";

const Editor = () => {
    const {onCreate} = useContext(TodoDispatchContext);

    const [content, setContent] = useState("");
    const inputRef = useRef();

    const onChangeContent = (e) => {
        setContent(e.target.value);
    }

    const onSubmit = () => {
        if (content === ""){
            inputRef.current.focus();
            return;
        }
        onCreate(content);
        setContent("");
    }

    const onKeydown = (e) => {
        if (e.keyCode === 13){
            onSubmit();
        }
    }

    return (
        <div className="Editor">
            <input ref={inputRef} 
                   value={content} 
                   onChange={onChangeContent} 
                   onKeyDown={onKeydown}
                   placeholder="새로운 todo..."/>
            <button onClick={onSubmit}>추가</button>
        </div>
    );
}

export default memo(Editor);