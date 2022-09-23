import ProductContainer from './container/ProductContainer';
import './App.css';
import { withRouter, Route, Switch } from 'react-router-dom'
import React, {} from 'react';
// import TypeBar from './component/TypeBar';
// import Counter from './component/Counter';
import Products from './component/Products';
// import EffectHookExample from './component/EffectHookExample';
// import HookExample from './component/HookExample';
import UseRefHookExample from './component/UseRefHookExample';






class App extends React.Component {

  state = {
   
    products: []
   }

componentDidMount(){

fetch("http://localhost:3000/products")
.then(res => res.json())
.then(products => {

    this.setState({
           products: products
     })
})
}

  render(){

console.log("test", this.state.products)

    return(
      <div>
  <Switch>

    <Route path='/products/:productId' render={() => <Products/>}/>
  </Switch>
  <UseRefHookExample/> 
  {/* <HookExample/> */}
  {/* <UseRefHookExample/> 
  <EffectHookExample/> 
  <Counter/>  */}
  
  {/* <TypeBar/> */}
    <ProductContainer product={this.state.products}/>


      </div>
    )
  }
}

export default withRouter(App);