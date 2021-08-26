import React, { useEffect, useState } from 'react'
import List from './components/List';
import TodoForm from './components/TodoForm';
import Item from './components/Item';
import Modal from './components/Modal';
import './Todo.css'

const SAVED_ITEMS = "savedItems"

function Todo() {

    const [items, setItems] = useState([]);

    useEffect(() => {
        let savedItems = JSON.parse(localStorage.getItem(SAVED_ITEMS));
        if (savedItems) {
            setItems(savedItems);
        }

    }, [])

    useEffect(() => {
        localStorage.setItem(SAVED_ITEMS, JSON.stringify(items));
    }, [items])

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
            <header>
                <h1>Todo</h1>
                <button className="addButton">+</button>
            </header>

            {/* <TodoForm onAddItem={addItem}></TodoForm> */}

            <List onDone={onDone} onItemDeleted={onItemDeleted} items={items}></List>

            <Modal></Modal>
        </div>
    )
}

export default Todo