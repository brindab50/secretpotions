import React, {useState} from "react";
import axios from "axios";
import { useEffect } from "react";

const EffectHookExample = () => {

    const [data, setData] = useState("")
    const [count, setCount] = useState(0)

    useEffect(() => {
        console.log("hello world ")
        axios
        .get("https://jsonplaceholder/typicode.com/comments")
        .then((response) => {
            console.log(response.data)
            setData(response.data[0].email)
        })
    }, [count]) 
    // empty arry to add the states you want to listed to 

    return(
        <div> 
        <h1> {data}</h1> 
        <h1> {count}</h1>
        <button     onClick={() => {
                setCount(count + 1)
            }} > 
        useEffect Increment 
        </button>

        </div>
    )
}



export default EffectHookExample