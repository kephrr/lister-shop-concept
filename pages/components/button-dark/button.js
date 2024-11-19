import styles from './button.module.css';
import {MoveUpRight} from "lucide-react";

function ButtonDark({text}){
    return <button className={styles.dark}>
                {text}
                <MoveUpRight size={24}></MoveUpRight>
            </button>;
}

export default ButtonDark;