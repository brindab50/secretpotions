import React, {useState} from "react";


const Cart = () => {

    let defaultGeneralPrice = 13
    const [generalPrice, setGeneralPrice] = useState(defaultGeneralPrice)
    const [quantity, setQuantity] = useState(1)

    let defaultTotalPrice = generalPrice * quantity
    console.log(defaultTotalPrice)

    const [totalPrice, setTotalPrice] = useState(generalPrice)

    const [addToCart, setAddToCart] = useState(false)


    return(
        <div> 
            cart 
        </div>
    )
}


export default Cart