import styles from './button.module.css';
import {User} from "lucide-react";

function Button({text}){
    return <button className={styles.normal}>
                {text}
                <User size={24}></User>
            </button>;
}

export default Button;