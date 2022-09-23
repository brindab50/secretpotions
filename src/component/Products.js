import React from "react";
import { Link } from 'react-router-dom'


const Products = (props) => {
    
  
        
        
        return(
            
          <Link to={'/products/${props.product.id}'}>
          
          <div className='product-card' >
      
      {props.product.name}
      <br/>
   
      {props.product.brand}

      <br/>
     price {props.product.price}


            </div>
          
          
          
          </Link>

        

        )
    }


export default Products