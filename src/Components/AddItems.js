import React, { useState, useEffect } from 'react';

const AddItem = () => {
    const [item, setItem] = useState("");
    const [list, setList] = useState([]);
  
    function handleSubmit(e) {
        const newItem = {
            item: item,
            complete: false,
        };
        e.preventDefault();
        if (item) {
            setList([...list, newItem]);
            setItem("");
        }
    }
  
    const handleChange = (e) => {
      setItem(e.target.value);
    };
    
 
    return (
        <div className="App">
          <h1>Grocery List</h1>
          <form onSubmit={handleSubmit}>
            <input type="text" value={item} onChange={handleChange} />
            <button type="submit">ADD</button>
            
          </form>

        </div>
      );
    }
export default AddItem;