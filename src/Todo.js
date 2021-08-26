import React, { useState } from 'react'
import List from './components/List';
import TodoForm from './components/TodoForm';
import Item from './components/Item';
import './Todo.css'

function Todo() {

    const [items, setItems] = useState([]);

    function addItem(text) {
        let item = new Item(text);
        setItems([...items, item]);
    }

    function onItemDeleted(item) {
        let filteredItems = items.filter(it => it.id !== item.id)

        setItems(filteredItems)
    }

    function onDone(item) {
        let updatedItems = items.map(it => {
            if (it.id === item.id) {
                it.done = !it.done;
            }
            return it;
        })

        setItems(updatedItems);
    }

    return (
        <div className="container">
            <h1>Todo</h1>

            <TodoForm onAddItem={addItem}></TodoForm>

            <List onDone={onDone} onItemDeleted={onItemDeleted} items={items}></List>
        </div>
    )
}

export default Todo