import React, {useLayoutEffect, useEffect} from "react";



const UseLayoutEffect = () => {

    useEffect(() => {
        console.log("useLayoutEffect")
    }, [])


    useEffect(() => {
        console.log("useEffect")
    }, [])

    
return(
    <div>

    </div>
)


}


export default UseLayoutEffect