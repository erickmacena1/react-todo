import React from "react"
import Card from "./Card"

function DoneImg(props) {
    if (props.done) {
        return (<img src="./assets/done.png" alt="Checked Icon" width="16px" />);
    }

    else {
        return (<img src="./assets/undone.png" alt="Unchecked Icon" width="16px" />);
    }
}

function List(props) {


    return (
        <ul>
            {props.items.map(item =>
                <li key={item.id}>
                    <Card className={item.done ? "done item" : "item"}>
                        {item.text}
                        
                        <div>
                            <button onClick={() => props.onDone(item)}><DoneImg done={item.done}></DoneImg></button>

                            <button onClick={() => props.onItemDeleted(item)}><img src="./assets/close-btn.png" alt="Delete Button" width="16px" /></button>
                        </div>
                    </Card>
                </li>)}

        </ul>
    )
}

export default List