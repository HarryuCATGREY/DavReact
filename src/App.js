import './App.css';
import Header from './Header.js';
import Content from './Content.js'
import Footer from './Footer.js'
import AddItem from './AddItem';
import {useState} from 'react';

function App() {
  // const name = "Dave"
  // const handleNameChange = () => {
  //   const names = ["A", "B", "C"]
  //   const randomNum = Math.floor(Math.random() * 3);
  //   console.log(randomNum);
  //   return names[randomNum]
  // }

  const [items, setItems] = useState([
    {
      id: 1,
      checked: false,
      item: "Item 1"
    },
    {
      id: 2,
      checked: false,
      item: "Item 2"
    },
    {
      id: 3,
      checked: false,
      item: "Item 3"
    },
  ]);

  const [newItem, setNewItem] = useState('') 


  const handleCheck = (id) => {
    const listItems = items.map((item) => 
    item.id === id ? {...item, checked: !item.checked } : item);
    setItems(listItems);
    localStorage.setItem('shoppinglist', JSON.stringify(listItems));
  }

  const handleDelete = (id) => {
    const listItems = items.filter((item) => item.id !== id);
    setItems(listItems);
    localStorage.setItem('shoppinglist', JSON.stringify(listItems));
  }

  const handleSubmit = (e) => {
    console.log("submitted")
  }

  return (
    <div className="App">
      <Header name="Harry"/>
      <AddItem 
        newItem = {newItem}
        setNewItem = {setNewItem}
        handleSubmit = {handleSubmit}
      />
      <Content 
        items = {items}
        setItems = {setItems}
        handleCheck = {handleCheck}
        handleDelete = {handleDelete}
      />
      <Footer /> 
    </div>
  );
}

export default App;
