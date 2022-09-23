
//// use state 


import React, {useState} from "react";


const TypeBar = () => {

    const [inputValue, setInputValue] = useState('Pedro')


    let onChange = (event) => {
        const newValue = event.target.value
        setInputValue(newValue)
    }
return(
    <div> 
        <h2> use State example</h2> 
<input placeholder="enter something" onChange={onChange}>

</input>
{inputValue}
    </div>
)

}


export default TypeBar