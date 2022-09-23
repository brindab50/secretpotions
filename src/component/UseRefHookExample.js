import React, {useRef} from "react";

const UseRefHookExample = () => {

const inputRef = useRef(null)
const nameRef = useRef(null)

const onClick = ( ) => {
console.log(inputRef.current.value)
// inputRef.current.focus()
// nameRef.innerHTML = inputRef.current.value
console.log(nameRef.current.innerHTML)
nameRef.current.innerHTML.innerHTML = inputRef
}
    return(
        <div>
            <h3 ref={nameRef} >  brinda </h3> 
            <button> change name </button> 
            <input onClick={onClick} type="text" placeholder="ex..."  ref={inputRef}/> 
        </div>
    )



}


export default UseRefHookExample