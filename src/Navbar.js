import React from "react";

const Navbar =(props) => {
    // changes to arrow function bcoz we do not have any state to return 
    return (
        <div style={styles.nav}>
            <div style={styles.cartIconContainer}>
                <img style={styles.cartIcon} src="https://image.flaticon.com/icons/png/128/4290/4290854.png" alt="cartimage"/>
                <span style={styles.cartCount}>3</span>
            </div>
        </div>
    );
}
    
const styles = {
    cartIcon: {
        height: 32,
        marginRight: 20
    },
    nav: {
        height: 70,
        background: "#4267b2",
        display: "flex",
        justifyContent: "flex-end",
        alignItems: "center"
    },
    cartIconContainer: {
        position:"relative"
    },
    cartCount: {
        background: "yellow",
        borderRadius: "50%",
        padding: "4px 8px",
        position: "absolute",
        right: 0,
        top: -9
    }
};

export default Navbar;