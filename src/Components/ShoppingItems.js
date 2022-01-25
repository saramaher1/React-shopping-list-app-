import React, { useState } from "react";
import CompletedItems from "./CompletedItems";
import Swal from "sweetalert2";
import alertPic from "../Assets/Images/alertPic.png";
import { storage } from "../firebase";
import { RiDeleteBin5Fill } from "react-icons/ri";
import ReactTooltip from "react-tooltip";

// This Component is for Adding Items to our Shopping List :

// Yup just like i said on ShoppingListPage, ALL THE APP CODE IS HERE -1
const ShoppingItems = () => {
  // Having to many useState hooks in a single place is a sign that you need to break stuff appart.
  const [list, setList] = React.useState([]);
  const [item, setItem] = React.useState("");
  const [itemPrice, setItemPrice] = React.useState("");

  // This 3 variables are clearly used ONLY for the image upload, they can be put in a different component like a "ImageUplolader" component
  const [file, setFile] = useState(null);
  const [url, setURL] = useState("");
  const [upload, setUploaded] = useState(false);

  // You can write useEffect directly if you import useEffect like you imported useState
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
      title: "Great!",
      text: "Your Item has Been added.",
      imageUrl: alertPic,
      imageWidth: 250,
      imageHeight: 200,
      imageAlt: "Custom image",
    });
  }

  /**
   * Unnecesary comment -1
   * You dont need to describe the function. The function name should be enough to describe it
   * If the name is not clear then you need to change the name.
   * This can be renamed to:
   * onSubmit or onAddNewItem
   */
  //This Function is for Submit your item in the Form :
  //after typing your item name and Price :
  function handleSubmit(e) {
    e.preventDefault();
    const newitem = {
      id: new Date().getTime(),
      text: item,
      price: itemPrice,
      completed: false,
      Image: url,
    };
    setList([...list].concat(newitem));
    setItem("");
    AlertHandler();
  }

  /**
   * Unnecesary comment -1
   * Same as above,  but the name was good enough. It deletes the item no need to explain twice
   */
  // This function is for deleting your Item after Adding it
  function deleteitem(id) {
    let updatedList = [...list].filter((item) => item.id !== id);
    setList(updatedList);
  }

  /** Unnecesary comment -1 */
  // This Function is for Checking your item as Complete :
  function toggleComplete(id) {
    let updatedList = [...list].map((item) => {
      if (item.id === id) {
        item.completed = !item.completed;
      }
      return item;
    });

    setList(updatedList);
  }

  /** Unnecesary comment -1 */
  // handling upload picture functions :
  function handleChange(e) {
    setFile(e.target.files[0]);
  }

  /**
   * Consistency -2
   * This one does not have a comment. Yes, i would remove points for adding unnecesary comments AND remove even more points for not being consistent.
   * At least if you putted a comment here, i would say Sarah takes care of EVERY single function, but left this one without comments
   * */
  function handleUpload(e) {
    e.preventDefault();
    const ref = storage.ref(`/images/${file.name}`);
    const uploadTask = ref.put(file);
    uploadTask.on("state_changed", console.log, console.error, () => {
      ref.getDownloadURL().then((url) => {
        setFile(null);
        setURL(url);
      });
    });
    Swal.fire(" Your Picture has been uploaded !! ");
    setUploaded(true);
  }

  // All your app is here -1
  // You need to break it down into multiple sub components, each one handling a small pice
  return (
    <div className="container">
      <div className="AdditemsForm">
        {/* Your comment here is a sign that this should be a separated compinent called PictureFormUpload or similar */}
        {/*Form for Uploading Your Picture  */}
        <form className="uploadPicture" onSubmit={handleUpload}>
          <input
            type="file"
            id="file"
            className="custom-file-input"
            data-tip="  Click upload button before you click add item"
            onChange={handleChange}
          />
          <ReactTooltip />
          <button
            display="none"
            className="addItemIcon "
            color="var(--blue)"
            size={40}
            id="icons"
            disabled={!file}
            type="submit"
          >
            Upload
          </button>
        </form>

        {/* Again, this one canbe FormNewItem */}
        {/*  Form for Adding your item and price  */}
        <div>
          <form className="Form" onSubmit={handleSubmit}>
            <div>
              <span>
                <input
                  className="InputBox"
                  type="text"
                  placeholder="Enter the items"
                  onChange={(e) => setItem(e.target.value)}
                  value={item}
                />
              </span>

              <span>
                <input
                  className="InputBox"
                  type="number"
                  placeholder="Enter Price kr"
                  onChange={(e) => setItemPrice(e.target.value)}
                  value={itemPrice}
                />
              </span>

              {/* UX -1 */}
              {/* This is CRITICAL information that is not well explained during the app us  */}
              {/*  After Inserting your item and Price and the Picture Press the botton to add it  */}
              <div>
                <button
                  className="addItemIcon"
                  color="var(--blue)"
                  size={40}
                  id="icons"
                  disabled={upload === false}
                  type="submit"
                >
                  Add Item
                </button>
              </div>
            </div>
          </form>
        </div>
      </div>

      {/* Another component */}
      {/* List div : for Showing the Added item in your list  :  */}
      <div className="listContainer">
        <div>
          <h4 className="shoppingListTitle"> My Shopping List : </h4>
        </div>
        {list.map((item) => (
          <div key={item.id} className="item">
            <div className="item-text">
              <span>
                <input
                  type="checkbox"
                  id="completed"
                  checked={item.completed}
                  onChange={() => toggleComplete(item.id)}
                />
              </span>
              <span>
                <img className="itemImage" src={item.Image} alt="icon" />{" "}
              </span>
              <div>
                <span className="itemInfo"> {item.text} ,</span>
                <span className="itemInfo"> {item.price} Kr</span>
              </div>
            </div>
            {/* delete icon for deleting your item  */}
            <div className="item-actions">
              <RiDeleteBin5Fill onClick={() => deleteitem(item.id)} />
            </div>
          </div>
        ))}
      </div>
      {/* Completeditem Component to show the Completed items  after checking it in the checkbox */}
      <CompletedItems completedItems={list} />
    </div>
  );
};

export default ShoppingItems;
