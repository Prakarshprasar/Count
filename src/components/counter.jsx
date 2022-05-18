import React ,{useState} from "react";

let Counter=({initialValue})=>{
    const [count,setCount] = useState(initialValue);
    const [color,setColor] = useState("black")


    return (

        <div>
        <h1>Counter App: <span style={{color:color}}>{count}</span></h1>
        <button onClick={()=>{

            if(count%2==0){
                setColor("red")
            }else{
                setColor("green")
            }

            setCount(count+1)

            }}>Increament</button>
        <button onClick={()=>{
            if(count%2==0){
                setColor("red")
            }else{
                setColor("green")
            }
            
            if(count>0){
                setCount(count-1)

            }
            
            }}>Decreament</button>

        <button onClick={()=>{

            
            setColor("green")
            
                
            
            
            setCount(count*2)
            
            
            }}>Double</button>
        
        </div>
    )
}

export default Counter