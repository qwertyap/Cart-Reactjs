import React from "react";

const CartItem =(props)=>  {
    const { price, title, qty } = props.product;
    const { product, onIncreaseQuantity, onDecreaseQuantity ,onDeleteProduct } = props;
    return (
        <div className="cart-item">
            <div className="left-block">
                <img style={styles.image}/>
            </div>
            <div className="right-block">
                <div style={{ fontSize: 25, fontWeight:"bold"}}>{title}</div>
                <div style={{color: "#777"}}>Rs {price}</div>
                <div style={{color: "#777"}}>Qty: {qty}</div>
                <div className="cart-item-actions">
                    {/* buttons */}
                    <img alt="increase" className="action-icons" src="https://t4.ftcdn.net/jpg/00/70/16/29/240_F_70162903_5mFpUbO3ZfRyD4gslH8j2c5VxjGMKU9G.jpg" onClick={() => onIncreaseQuantity(product)} />
                    <img alt="decrease" className="action-icons" src="https://t4.ftcdn.net/jpg/02/44/39/19/240_F_244391909_DfS5TL9Oyzhf4VW0v9gPq4FPDg3BtD9w.jpg" onClick={() => onDecreaseQuantity(product)}/>
                    <img alt="delete" className="action-icons" src="https://t4.ftcdn.net/jpg/01/90/89/15/240_F_190891550_N7uKp2aHE3mOc20dmtDytj7atgvbhdOu.jpg" onClick={()=>onDeleteProduct(product.id)} />
                </div>
            </div>
        </div>
    );
    }
const styles = {
    image: {
        height: 110,
        width: 110,
        borderRadius: 4,
        background: "#ccc"
    }
}

export default CartItem;