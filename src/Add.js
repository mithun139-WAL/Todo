import { useState } from "react";
const Add = ()=>{
    let [result,setResult,doAddition] = useAdd();
    return(
        <div className="Todo">
            The addition result = {result}
            <br/>
            <button className="btn btn-info"
                 onClick={()=>{
            doAddition(4,5);}}>Add</button>

        </div>
    );
}
const useAdd = () =>{
    let [result,setResult] = useState(0);
    let doAddition = (a,b) =>{
        setResult(a+b);
    }
    return [result,setResult,doAddition];
}
export default Add;