import React ,{useState}  from "react";
import CompletedItems from "./CompletedItems";
import Swal from 'sweetalert2';
import alertPic from "../Assets/Images/alertPic.png";
import { storage } from "../firebase";

const AddItems = () => {
     const [list, setList] = React.useState([]);
     const [item, setItem] = React.useState("");
     const [itemPrice, setItemPrice] = React.useState("");
     const [file, setFile] = useState(null);
     const [url, setURL] = useState("");


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
//    alert Messsge : 
function AlertHandler() { 
     Swal.fire({
        title: 'Great!',
        text: 'Your Item has Been added.',
        imageUrl: alertPic,
        imageWidth: 250,
        imageHeight: 200,
        imageAlt: 'Custom image',
      })
    }
     function handleSubmit(e) {
      
       e.preventDefault();
       const newitem = {
         id: new Date().getTime(),
         text: item,
         price:itemPrice,
         completed: false,
         Image:url,
       };
       setList([...list].concat(newitem));
       setItem("");
       AlertHandler();
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

     // handling upload picture functions : 
     function handleChange(e) {
      setFile(e.target.files[0]);
    }
  
    function handleUpload(e) {
      e.preventDefault();
      const ref = storage.ref(`/images/${file.name}`);
      const uploadTask = ref.put(file);
      uploadTask.on("state_changed", console.log, console.error, () => {
        ref
          .getDownloadURL()
          .then((url) => {
            setFile(null);
            setURL(url);
          });
      });

      handleSubmit(e);
    
    }
 
     

     return (
       <div className="container">
         <div className="AdditemsForm"> 
          <form className="Form" onSubmit={  handleUpload} >
            <span> 
              <input
                 className="InputBox"
                 type="text" placeholder="Enter the items"
                 onChange={(e) => setItem(e.target.value)}
                 value={item} /></span>
                <span> 

         <input className="InputBox"
             type="number"
             placeholder="Enter Price kr"
             onChange={(e) => setItemPrice(e.target.value)}
             value={itemPrice} />
           </span>
         <span>
         <input type="file" id="file"  onChange={handleChange} />
         </span>
           <button  disabled={!file} type="submit" >Add item </button>      
         </form>
         </div>
         
         <div className="listContainer"> 
         <p className="shoppingListParagraph"> My Shopping List : </p>
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
                 <span ><img className="itemImage" src={item.Image} alt="icon"/> </span>
                 <span> {item.text}  </span>
                 <span>Price:  {item.price} kr</span>
             </div>
 
            <div className="item-actions">
               <button onClick={() => deleteitem(item.id)}>Delete</button>  
             </div> 
           </div>
         ))}
       </div>
 <div>
 </div>
 <CompletedItems completedItems={list}  />

 
  
  <div>
  
  </div>
  </div>     
     );
};


export default AddItems;