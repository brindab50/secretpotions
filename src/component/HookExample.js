import React, {useReducer} from "react";

const reducer = (state, action) => {
    switch (action.type) {
        case "INCREMENT":
            return{count: state.count + 1,  showText: state.showText}
            case "toggleShowText": 
            return {count: state.count, showText: !state.showText}
            default: 
            return state
    }
}

const HookExample = () => {

    const [state, dispatch] = useReducer(reducer, {count: 0, showText: "brinda"} )

    // takes 2 args state so you can have constant access for the state you are managing and the action what your tryig to do with each state 
    
    return(
        <div> 
            {state.count} 

            <button 
            onClick={() => {
                dispatch({ type: "INCREMENT"})

                dispatch({ type: "toggleShowText"})
            }}> click here 

            use reducer example
            </button>
            
            {state.showText && <p>brinda </p>}
        </div>
    )
}


export default HookExample