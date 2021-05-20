import React from "react";
import Cart from "./Cart";
import Navbar from "./Navbar";

class App extends React.Component {
  constructor() {
        super();
        this.state = {
            products: [
                {
                    price:999,
                    title:"Watch",
                    qty: 1,
                    img: "",
                    id:1
                },
                {
                    price:999,
                    title:"Phone",
                    qty: 10,
                    img: "",
                    id:2
                },
                {
                    price:999,
                    title:"Laptop",
                    qty: 4,
                    img: "",
                    id:3
                }

            ]
        }
        
    }
    handleIncreaseQuantity = (product) => {
        // console.log();
        const { products } = this.state;
        const index = products.indexOf(product);

        products[index].qty += 1;
        // now we have to change the stae as well so,

        this.setState({
            // previous products is equal to new product which we got now
            // we can use single products in both key and value pairs are name same
            products:products
        })
    
    }
    handleDecreaseQuantity = (product) => {
        // console.log();
        const { products } = this.state;
        const index = products.indexOf(product);
        if (products[index].qty === 0) {
            return;
        }

        products[index].qty -= 1;
        
        // now we have to change the stae as well so,

        this.setState({
            // previous products is equal to new product which we got now
            // we can use single products in both key and value pairs are name same
            products:products
        })
    
    }
    handleDeleteProduct = (id) => {
        const { products } = this.state;

        const items = products.filter((item) => item.id !== id); //return an array

        this.setState({
            products: items
        });

    }
  getCartCount= () => {
  const { products } = this.state;
  let count = 0;
  products.forEach((product) => {
    count += product.qty;
  })
    // console.log(count);
  return count;
  }
  // getCartCount;
  render() {
    const { products } = this.state;
    return (
      <div className="App">
        <Navbar count={this.getCartCount()}/>
        <Cart
        products={products}
        onIncreaseQuantity={this.handleIncreaseQuantity}
        onDecreaseQuantity={this.handleDecreaseQuantity}
        onDeleteProduct={this.handleDeleteProduct}
        />
      </div>
    );
  }
}

export default App;
