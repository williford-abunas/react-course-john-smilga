import { useState } from "react";
import {nanoid} from "nanoid"
import {setLocalStorage, getLocalStorage} from "./utils.js"
import Form from "./components/Form.jsx"
import Items from "./components/Items.jsx";
import { ToastContainer, toast } from "react-toastify";

const App = () => {
const [items, setItems] = useState(getLocalStorage());

const addItem = (itemName) => {
const newItem = {
  name: itemName,
  completed: false,
  id:nanoid()
}

const newItems = [...items, newItem]
setItems(newItems)
setLocalStorage(newItems)
toast.success("item added to the list")
}

const removeItem = (id) => {
  const newItems = items.filter((item) => item.id !== id)
  setItems(newItems)
  setLocalStorage(newItems)
  toast.success("item removed from the list")
}

const editItem = (id) => {
  const newItems = items.map((item) => {
    if (item.id === id) {
      return {...item, completed: !item.completed}
    }
    return item
  })
  setItems(newItems)
  setLocalStorage(newItems)
}

  return <section className="section-center">
    <ToastContainer position="top-center" />
    <Form addItem={addItem} />
    <Items items={items} removeItem={removeItem} editItem={editItem}/>
  </section>;
};

export default App;
