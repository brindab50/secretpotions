import React from "react";
import Products from "../component/Products";
import Search from "../component/Search";
import '../Product.css';

// function ProductComponent(){
//     return(

//         <div>
//             welcome to my store
//         </div>
//     )
// }


class ProductContainer extends React.Component{

    
state = { 
    searchTerm: '',

}

handleSearchChange = event => {
    this.setState({
        searchTerm: event.target.value
    })
}

    render(){
        // console.log("test", this.state.product)

        const showProducts = this.props.product.filter(p => p.name.toLowerCase().includes(this.state.searchTerm))
        
        return(
            <div className='scc-product' >
                 <div className='product-show-page' >



              
                
               <h2>  Welcome to my store </h2> 
               <Search onChange={this.handleSearchChange}/>  

         {
             showProducts.map(product => <Products key={product.id} product={product} /> )
  
         }
       {/* <Products/> */}
            </div> 
            </div>
        )
      }

}
   


export default ProductContainer