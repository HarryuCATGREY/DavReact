import {FaPlus} from 'react-icons/fa'
import './App.css';

const AddItem = ( newItem, setNewItem, handleSubmit) => {
  return (
    <form className="addForm">
      <label htmlFor="addItem"></label>
      <input
        autoFocus
        id="addItem"
        type='text'
        placeholder="Add Item"
        required
        // onChange={(e) => console.log(e.target.value)}
        onChange={(e) => setNewItem(e.target.value)}
      />
      <button
        type="submit"
        aria-label="Add Item"
      >
        <FaPlus />
      </button>
    </form >
  )  
}

export default AddItem