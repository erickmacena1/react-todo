import React from "react"
import Card from "./Card"

function DoneImg(props) {
    if (props.done) {
        return (<img src="./assets/done.png" alt="Checked Icon" width="20px" />);
    }

    else {
        return (<img src="./assets/undone.png" alt="Unchecked Icon" width="20px" />);
    }
}

function ListItem(props) {

    return (
        <li>
            <Card className={props.item.done ? "done item" : "item"}>
                {props.item.text}

                <div>
                    <button className="liBtn" onClick={() => props.onDone(props.item)}><DoneImg done={props.item.done}></DoneImg></button>

                    <button className="liBtn" onClick={() => props.onItemDeleted(props.item)}><img src="./assets/close-btn.png" alt="Delete Button" width="20px" /></button>
                </div>
            </Card>
        </li>)
}


export default ListItem