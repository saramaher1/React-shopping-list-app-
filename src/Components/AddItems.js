import React  from "react";
const AddItems = () => {
    const [list, setList] = React.useState([]);
    const [Completedlist, setCompletedlist] = React.useState([]);
    const [item, setItem] = React.useState("");
    const [itemPrice, setItemPrice] = React.useState("");
    React.useEffect(() => {
      const json = localStorage.getItem("list");
      const loadedlist = JSON.parse(json);
      if (loadedlist) {
        setList(loadedlist);
      }
    }, []);
    React.useEffect(() => {
      const json = JSON.stringify(list);
      localStorage.setItem("list", json);
    }, [list]);
  
    function handleSubmit(e) {
      e.preventDefault();
      const newitem = {
        id: new Date().getTime(),
        text: item,
        price:itemPrice,
        completed: false,
      };
      setList([...list].concat(newitem));
      setItem("");
    }
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
  
   function ShowCompletedList(){

    <ul className="list-group">
  {list.map(item => (
    <li key={item.id} className="list-group-item">
      {`${item.text}`}
    </li>))}
</ul>
   }
    

   

    return (
      <div className="container">
        
        <div className="AdditemsForm"> 
         <form   onSubmit={handleSubmit} >
           <span> 
           
        <input className="InputBox"
            type="text"
            placeholder="Enter the items"
            onChange={(e) => setItem(e.target.value)}
            value={item}
          />
          </span>
          <span> 
        
        <input className="InputBox"
            type="text"
            placeholder="Enter Price kr"
            onChange={(e) => setItemPrice(e.target.value)}
            value={itemPrice}
          />
          </span>
          
          <button  type="submit" >Add item</button>
           
        </form>
         
        </div>
        
        <div className="listContainer" > 
        <p className="shoppingListParagraph"> My Shopping List : </p>
        {list.map((item) => (
          
          <div  key={item.id} className="item">
            
            <div className="item-text">
                <span> 
                  <input
                   type="checkbox"
                    id="completed"
                    checked={item.completed}
                     onChange={() => toggleComplete(item.id)}
                    />
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
<div>
 
</div>
      <div className= "listContainer">
    Completed Items : 
<div>
<ul className="list-group">  
   
  {list.map(item => (
  ( item.completed)? 
    <li key={item.id} className="list-group-item">
      {`${item.text}`}
    </li> :null))}
</ul>
</div>
      </div>
      
      </div>
      
    );
  };
export default AddItems;