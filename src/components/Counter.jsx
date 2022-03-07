import { useState } from "react";
 function Counterbooks(){
    
   const [counter,setCounter] = useState(13);
   const HandlerChange = (value)=>{
       setCounter(counter+value);
   }
      
    return (
   <div className="items">
          <span>Books:</span>
          <button className="addBook" onClick={()=>HandlerChange(1)}>+</button>
          <button className="remBook" onClick={()=>{if(counter>=1){HandlerChange(-1)}}}>-</button>
          <span className="totalBooks">{counter}</span>
   </div>
      
    )
};

function CounterPens(){
    
    const [counter,setCounter] = useState(10);
    const HandlerChange = (value)=>{
        setCounter(counter+value);
    }
       
     return (
    <div className="items">
           <span>   Pens:</span>
           <button className="addPen" onClick={()=>HandlerChange(1)}>+</button>
           <button className="remPen"onClick={()=>{if(counter>=1){HandlerChange(-1)}}}>-</button>
           <span className="totalPens">{counter}</span>
    </div>
       
     )

}
function Counternotebooks(){
    
    const [counter,setCounter] = useState(44);
    const HandlerChange = (value)=>{
        setCounter(counter+value);
    }
       
     return (
    <div className="items">
           <span> Notebooks:</span>
           <button className="addNotebook" onClick={()=>HandlerChange(1)}>+</button>
           <button className="remNotebook" onClick={()=>{if(counter>=1){HandlerChange(-1)}}}>-</button>
           <span className="totalNotebooks">{counter}</span>
    </div>
       
     )

}
function CounterInkpens(){
    
    const [counter,setCounter] = useState(78);
    const HandlerChange = (value)=>{
        setCounter(counter+value);
    }
       
     return (
    <div className="items">
           <span> Inkpens:</span>
           <button className="addInkpen" onClick={()=>HandlerChange(1)}>+</button>
           <button className="remInkpen" >-</button>
           <span className="totalInkpens">{counter}</span>
    </div>
       
     )

}


function Total(){
    
    return(
      
        <div>
            <h3>{Counterbooks()}</h3>
        </div>
    )
}

export {Counterbooks,CounterPens,Counternotebooks,CounterInkpens,Total};