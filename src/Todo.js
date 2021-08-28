import React, { useEffect, useState } from 'react'
import List from './components/List';
import TodoForm from './components/TodoForm';
import Item from './components/Item';
import Modal from './components/Modal';
import './Todo.css'

const SAVED_ITEMS = "savedItems"
const LAST_ID = "lastId"

function Todo() {

    const [showModal, setShowModal] = useState(false);
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
        let id = JSON.parse(localStorage.getItem(LAST_ID));
        if(!id) id = 0;
        id++;
        let item = new Item(text, id);
        setItems([...items, item]);
        onHideModal();
        localStorage.setItem(LAST_ID, JSON.stringify(id));
    }

    function onItemDeleted(item) {
        let filteredItems = items.filter(it => it.id !== item.id);

        setItems(filteredItems);
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

    function onHideModal(e) {
        setShowModal(false);
    }

    return (
        <div className="container">
            <header>
                <h1>My First React Todo</h1>
                <button onClick={() => { setShowModal(true); }} className="addButton">+</button>
            </header>

            <List onDone={onDone} onItemDeleted={onItemDeleted} items={items}></List>

            <Modal show={showModal} onHideModal={onHideModal}>
                <TodoForm onAddItem={addItem}></TodoForm>
            </Modal>
        </div>
    )
}

export default Todo