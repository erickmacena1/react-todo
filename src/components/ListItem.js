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

function ListItem(props) {

    return (
        <li>
            <Card className={props.item.done ? "done item" : "item"}>
                {props.item.text}

                <div>
                    <button onClick={() => props.onDone(props.item)}><DoneImg done={props.item.done}></DoneImg></button>

                    <button onClick={() => props.onItemDeleted(props.item)}><img src="./assets/close-btn.png" alt="Delete Button" width="16px" /></button>
                </div>
            </Card>
        </li>)
}


export default ListItem