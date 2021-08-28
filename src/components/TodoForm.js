import React, { useState } from 'react'

function TodoForm(props) {
    const [text, setText] = useState("");


    function handleChange(event) {
        let t = event.target.value;
        setText(t);
    }

    function addItem(event) {
        event.preventDefault();

        if (!text) return;

        props.onAddItem(text);
        setText("");
    }

    return (
        <form>
            <input className="modalInput" onChange={handleChange} type="text" value={text} />
            <button className="modalBtn" onClick={addItem}>Add</button>
        </form>
    )
}

export default TodoForm