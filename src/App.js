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
                    img: "https://images.unsplash.com/photo-1579586337278-3befd40fd17a?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8YXBwbGUlMjB3YXRjaHxlbnwwfHwwfHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1100&q=60",
                    id:1
                },
                {
                    price:999,
                    title:"Phone",
                    qty: 10,
                    img: "https://images.unsplash.com/photo-1586828680969-211784a415d0?ixid=MnwxMjA3fDB8MHxzZWFyY2h8OXx8aXBob25lJTIwMTF8ZW58MHx8MHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1100&q=60",
                    id:2
                },
                {
                    price:999,
                    title:"Laptop",
                    qty: 4,
                    img: "https://images.unsplash.com/photo-1611186871348-b1ce696e52c9?ixid=MnwxMjA3fDB8MHxzZWFyY2h8N3x8bWFjYm9va3xlbnwwfHwwfHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1100&q=60",
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
  getCartCount = () => {
  const { products } = this.state;
  let count = 0;
  products.forEach((product) => {
    count += product.qty;
  })
    // console.log(count);
  return count;
  }
  getCartTotal = () => {
    const { products } = this.state;
    let cartTotal = 0;
    products.map((product) => {
      cartTotal = cartTotal + product.qty * product.price;
    });
    return cartTotal;
  }

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
        <div style={{ fontSize: "30px",
         color: "black",backgroundColor:"#B6D0E2",display:"flex",marginLeft:"13px",padding:"2px 5px",marginBottom:"20px", fontWeight:"bold"}}>   Total:{this.getCartTotal()} </div>
      </div>
    );
  }
}

export default App;
