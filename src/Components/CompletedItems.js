import React  from "react";

const CompletedItems = ({completedItems}) => {
    const [show,setShow]=React.useState(false);

     return (
        <div>
            <button disabled={completedItems.filter(item=>item.completed).length===0} onClick={()=>setShow(!show)} >Show</button>
            { show ?
               <div className="listContainer" > 
                    <ul className="list-group">  
                       {
                         completedItems.map(item => (( item.completed)? 
                         <li key={item.id} className="list-group-item"> {`${item.text}`}</li> 
                         :null))}
                     </ul>
                     </div>
                     :null }
        </div>
        );
};

export default CompletedItems;