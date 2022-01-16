import React from 'react'


const ShoppingItemsList = (list,setList)=>{
    
    function deleteitem(id) {
        let updatedList = [...list].filter((item) => item.id !== id);
  setList(updatedList);
      }
      function toggleComplete(id) {
        let updatedList = [...list].map((item) => {
          if (item.id === id) {
            item.completed = !item.completed;
          }
          return item;
        });
  setList(updatedList);
      }
 
      return (

        <div className="container">
          <div className="listContainer"> 
          <p className="shoppingListParagraph"> My Shopping List : </p>
          <div> 

       
          {list.map((item) => (
            <div key={item.id} className="item">
              <div className="item-text">
                  <span> 
                  <input
                     type="checkbox"
                      id="completed"
                      checked={item.completed}
                       onChange={() => toggleComplete(item.id)}/>
                  </span>
                  <span> {item.text} , </span>
                  <span>Price:  {item.price}kr</span>
              </div>
  
             <div className="item-actions">
                <button onClick={() => deleteitem(item.id)}>Delete</button>  
              </div> 
            </div>
          ))}
          </div>
        </div>
  <div>
  </div>
   
   </div>     
   
      );
}

export default ShoppingItemsList;