import {Search, ShoppingCart} from "lucide-react";
import Button from '../button/button'
import styles from "./header.module.css";

function Header(){
    return <div className={styles.nav}>
                <ul>
                    <li>Shop</li>
                    <li>Accessories</li>
                    <li>About</li>
                    <li>Contact</li>
                </ul>
                <div className={styles.midNav}>
                    <img src="/sparkle.svg" alt=""/>
                    LISTER
                </div>
                <div className={styles.endNav}>
                    <Search size={24} color="gray"></Search>
                    <div className={styles.icon}>
                        <ShoppingCart size={24} color="white"></ShoppingCart>
                    </div>
                    <Button text="Log In"></Button>
                </div>
           </div>
}

export default Header;