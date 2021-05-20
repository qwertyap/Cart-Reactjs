import React from "react";
import CartItem from "./CartItem";

class Cart extends React.Component {
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
    
    render() {
        const { products } = this.state;

        return (
            <div className="cart">
                {products.map((product) => {
                    return <CartItem product={product} 
                        key={product.id}
                        onIncreaseQuantity={this.handleIncreaseQuantity}
                        onDecreaseQuantity={this.handleDecreaseQuantity}
                        onDeleteProduct={this.handleDeleteProduct}
                    />
                })}
            </div>
        
        );
    }

}

export default Cart;