
//use state 

import React, {useState} from "react";


const Counter = () => {

    const [counter, setCounter] = useState(0)

    const increment = () => {
        setCounter(counter + 1)
    }

 
    return(
        <div>
            {counter}
            <button onClick={increment}>  useState example increment</button>

        </div>
    )
}


export default Counter