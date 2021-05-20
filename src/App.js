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
                    img: "data:image/jpeg;base64,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",
                    id:1
                },
                {
                    price:999,
                    title:"Phone",
                    qty: 10,
                    img: "data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAkGBxAQDxANEBAQDxAQDw8QDw8PDw8QDg8QFRIWFxcRFRUZHSggGBolGxMVIjEhJSktLi4uFx83ODMuNzQwMCsBCgoKDg0OGxAQGjclICAvLS03Ky0rLS4tLy0tNS4tLS0vLS0vLS0tLS0tLS0tLS0rLSstLS0tLS0tLS0tLS0tLf/AABEIAPQAzgMBIgACEQEDEQH/xAAcAAEAAQUBAQAAAAAAAAAAAAAAAwIEBQYIAQf/xABMEAACAQICBAcLBg0CBwAAAAAAAQIDEQQhBQYSMQdBUWFxdLITFyI0NVSBkZKhsTJSlMHR0hQWIyUzU2JjcnOi4fBCwhVDgoOjs8P/xAAYAQEBAQEBAAAAAAAAAAAAAAAAAQMCBP/EACARAQEAAgIDAQADAAAAAAAAAAABAhEDMRJBUSEycZH/2gAMAwEAAhEDEQA/APuIAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAEWKxNOlB1Kk404LfKclGK9LAlBrk9d8AnZVpT56dGrKPoezmeLXjA/OrfR633S+NTyn1sgNc/HbBctb6NW+6e/jrg+Wt9Gr/dHjfieU+tiBrv454Plr/Rq/3T38c8H+/+jV/ujxvw8p9bCDXvxywn7/6LX+6Pxywn7/6NX+6PG/Dyn1sINUxXCHo2kr1Ks6aW9yo1Uo52zdsvSWvfW0L55H2J/YNVdxuoNK762hfPI+xP7B31tC+eR9if2DVNxuoNK76uhvPI+zP7C90bwhaJxElTp42jtvdGbcL+mSt7xqm42gHiaaus0801uaPSKAAAAAAAAAADyckk28kk23yJHxTWXWCWMrSrTdqUW+4U38inTTsptccnk786SPrWsk3HBYqSyaw1az5PAeZztp6dqDisleEXxLZUXddFmzTjntlyX0vcBrBRqV40ZVJQjLJTSWcuLKzefMn0m2w0TFpNVqjTV04ypuLXKnsnw/Dzt4bbVSMtq+V1JXabX8Sj7z67qjpJ1MNtvdKo3BPi8BbaXMns+m53jltxnhqbjYMPq3OcXOFWrZcbdO3qsWEtulNQqNSUnaM0rZ/NkuJmf0bp506bpKEZ3vsOU4wb6E/leg17TFaTjUUk1NNSaaaakpJ7uL+5Z5bu3N8dTXa8iySLLWnPJE0ZFFwmVIhjIkTA8xOHhUi4TipJ338V1bLkPievGgo4PEtRuqdS8oJWsnldLmzT5r24j7gmanrnhaFScO7OaShHZdNxTu5TvvTyyXqQ8PO6WZ+P6+MpRtLN3y2cln0lBvOM0JSavRrbT+ZVSjL0SWTfSkYKo6lGbteLWTX1PlXxJlwXHuusefy6jG04RssviVuhHiyfKmy5qUY1PCppRnvdNfJnzwXE/wBn1chb05nGtL5WvsPAVrvWdb/g+Jm6kXGUsNOTu4NK7hfka9590OSuD2o46a0e15xTv0Xd/cdanGTTEABy6AAAAAAAAYvWjxHF9WrdhnPGl84pftrsHQ+tHiOL6vW7DOctNVLQv+3FLjzcbI142PL2wdbAQcr5X9K+G/0mzavY1wpSp73DZUVuWy38lJbs7+s0iEp1LzTsnfjXFFyz5cosy2gsZdrafHsN82Wa6Hsv0PmO8bPnbjLG676ZN4hVb1JTTlLNt3blzI2XR2KlUwPhtydKo6UJN3fc3FS2L8ai93Jt25DW8Ro6kp3lOUHPO0KlOMZPlUZLwfRdGaoPZh3NJRjCL2YJ7VnJralKXHJ2WfMkkSY6q55SxsNOe4uIVDHxkSxmdOWRjMmjIx8KhcQqAXiZqGvlTZdN5boLNX46n2G1Rmafwh27mpPfFUremVRfBll1dprbTq9fjjk1/pvdPoMfisRtqzztuZBXxNi0lWOc+Rpjxqo1LMmr+Eu6r5X/ADFy/t/b6+UsXLO5Ph6tnyrc1xNPejKX07uPtnuD9/nnR/WKfxZ10cjagxtpnALi/CKdnyrOx1ySusQAHLoAAAAAAABi9aPEcX1at2Gc74/D90g43tuafzZLc+jNo6D1yqOOj8U1bOk458kmov3NnwOEjXDpjy9tMr6LqRdrTim92wpRX8Lvu6PWy5w1DYVkn6s3zv8AzkNujFdHQ2ieEVyv2pHUkjjLK2aaxLCVq0lUitraUU80tlpJO6fFlfLlNkwlGSUKbzaUVJvkjb3touIpc/tMmhZbsi60lts0uVIrUi3UitSKi5jMnhULJSJIyCsjCoabwlS8CD5HTv8A+U2iEzXddcLUr0nCmlKdqTSc4QVtqpfOTS4x/RLJ2+W1J3ZTssymI0FjIZuhUkuN00qsV0uF0jGSb3Pet/KjCzV/Xoxyln4KPKySFiG5XFiFbLqDK+mNH82Ipr3s65OP9R6jjpTBTVrxqqSvuuk2rnYApAAHLoAAAAAAABg9d/J2J/gXbifAISPv+u/k7E/wLtxOe4SNcOmHL2vISJoSLOMiWEjtmvYyJYyLOMiaMgLlSK1IgjIrTAuEyuLIIsriyi4jIwWtldximuPua/8AaZmLMDrf+j9NH41RLqlm41tY+SzuyStj41VavCNZbrzX5RdE14S6L2MTOZG6h1ea9X9czincV43RCs6mHk5xWcqcrd1guXLKa6LPm4zEpmWp4hxaabTW5oo0hRVROtBJTWdSK3S/bS5eX1mOeM7x/wAb4ZXrJc6kP85YT+Z/tZ2Kcc6j+UsL/N/2s7GM/TWdgAIoAAAAAAADF60+IYvq1bsM5vgzpDWnxDF9WrdhnNkWa4dMeXtcRkSxkW0WSRkdsl1GRNGRaRkUVdIQhJRbd8tyva/KBk4yJYyMf3RbV2723LkLunO6uiouYskiy3iySLIqdMwWt0/yb/7X/wBTNRZjdNaKxWLTp4Skq1SKpzknOlDZj+VW0tuSTd2ss94WNBmrZvLpLaVZF/pnVzH4a88VhcRTjlerKnJ0s/3ivH3mHMrW0xi5jUTyJKFez/z1FmhJ2d+XMbW47bLqFTUdNYC254mm10M65OROD6d9MaP6xT+LOuzmrAAEdAAAAAAAAMXrT4hi+rVuwzmmLOltafEMX1at2GczxZrh0x5e0yZXFkKZWmdsk8WYHFN90nf58viZqLLLH4Nye3BXb+UrpenMsSrnCV9qCfHaz6UZelNWVtxgcHhKkLp2aeeT3Pn/AM4jMUFsq3r6S1IvYyJIstoyJYyOXS4TMZpvSM6Fpwk4t9zjdPi/Kv6i/TNd1zl+Tj/MpdmsN6/Vk3+LzAa84mk8qjtxpvJrkPcdh9H6TTajDAYx/Jq047OGqy5KtNbr/Oir53akaNt8jK6eIae8lz327nHr+KPSejquGqyw9aDhUhvWTTTzUotZSi1mmt5aT4uj6zbJYhY/D/g9TPE0IylhKn+qUd8sO+VPNx5JdLNSkzLKaaY3bYuDnyxgOs0zr45B4OfLGA6zTOvienXsABFAAAAAAAAYvWnxDF9WrdhnM0dx0zrT4hi+rVuwzmWO5GuHTHl7VplSZQepnbJKmSRZAmVpgXEZEsZFtFkkZAXUZE0ZFpGRLGQF3GRr2uavTj/MpdmsZuMjB63K9OK/eUuzWJenWPbUXl0nm0VyosiasZVunw+IcJRnF2lFppriaKdKW7tOUcoze2lxJTW1Zcyu16CC57iJX2eaKXvZF0z3Bz5XwHWaZ1+cgcHHlfAdZpnX49HsABFAAAAAAAAYvWnxDF9WrdhnMkdyOm9afEMX1at2Gcxw3LoNcOmPL2rPUUhHbJWmVJlCZ6mBKmSRZAmVpgXEZEsZFtFkkZAXUZGH1ozpr+ZS7NYyUZGN0+r0/wDrpdmsFlavJspbJ6sbb/UWszjKaa43aicSKbzJLlEkZ1pGw8HHlfAdZpnX5yBwceV8B1mmdfj0ewAEUAAAAAAABi9afEMX1at2GcxQ3LoOndafEMX1at2GcxQ3LoRrh0x5e1R6Unp2yenqZSegVplSZHcqTAlTK4shTK0wJ4yINISWxK62nels8idqubK0y20lNqm2vn0vhVLj2mXTBVoPeWdSBd15t8ZZVDnN3xopRKGiua3dBGzKt42Lg58sYDrNM6+OQeDnyvo/rNP4nXxPS+wAEUAAAAAAABi9afEMX1at2Gcww3LoR07rVf8AAMZbf+DVrXzV9hnMUNy6Ea4dMeXtUADtk9B4AKj1MpPQK0ypMjTPUwJUy20l+jf8dHs1iZMixn6N33bdLpvarb6/WdY9pemCqstpRuX1WPp95VTw+zF1Z/JjxfOlxQXT8E2LjbXUy0x2IjZ25Evfn9ZBsk07ttvNttvpZRLk/wAZlW0rO8Hi/PGj+s0/idenIfB+vzxo/rNLtHXhnXUAAR0AAAAAAAAttJYbu1CtR/W0qlP2otfWctV8PKlOdGaanSlKnNNWalF2eX+bzq40XXvg7pY+TxNGaoYm3hNxbpVbbtpLNPnR3hlpnyY76fCAbbW4N9KRk0qEZpbpRqZP0NXI+95pXzb+tGm4x8b8auDaO97pTzZ+1/Y873ulPNn7X9huHjfjWD02fve6U82ftf2He90p5t/WhuHjfjWD25s/e80r5t/Wh3vdK+av245jcPG/GtJl1T0dKrTT3JybbbSuoqyfrlMzb4P9KJN/gspS4ouaUPTJO9uZJdKMTX4MdOTk5yoxu+aKSSVkkrZJJJJcSRcc5jdl48spqfixr08NR+XUjUl+rotVG3zyXgx9LvzMwuNrzrO7SjCN9mC+RBcbbe97rt+5WS2ZcF2m/wBUvd9gq8Fum5pKVJWXEmkumyWbOsuaZJhw3FpFSS3R9MuXmXMUxgbsuCXTP6mPtL7C/wBFcDOk601GvKGHhfOTvLLmUfrMbdtvGsbwOaJlitM4eUU3DDPu85cS2M1d88rI6lNb1I1Nw2iaHcaCcpys6taSW3Uf1LmNkOLWkgACKAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA//Z",
                    id:2
                },
                {
                    price:999,
                    title:"Laptop",
                    qty: 4,
                    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTFsqb0zE7p47ozmO20_VFc-lZgGXp_nvSvjA&usqp=CAU",
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
        <div>Total:{this.getCartTotal()} </div>
      </div>
    );
  }
}

export default App;
