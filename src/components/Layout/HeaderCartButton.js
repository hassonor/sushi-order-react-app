import {useContext} from "react";
import styles from './HeaderCartButton.module.css'
import CartIcon from "../Cart/CartIcon";
import CartContext from "../../store/contexts/cart-context";

const HeaderCartButton = props => {
    const cartContext = useContext(CartContext);
    const numberOfCartItems = cartContext.items.reduce((curNumber, item)=>{
        return curNumber + item.amount},0);

    return (

                <button className={styles.button} onClick={props.onClick}>
                    <span className={styles.icon}>
                        <CartIcon/>
                    </span>
                    <span>
                        Your Cart
                    </span>
                    <span className={styles.badge}>{numberOfCartItems}</span>
                </button>
     )
};


export default HeaderCartButton;