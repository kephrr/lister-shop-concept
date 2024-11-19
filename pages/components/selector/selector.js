import {useEffect, useState} from "react";
import styles from './selector.module.css'

function Selector({options}) {

    const [activeIndex, setActiveIndex] = useState(0);


    const activeStyle = (index) =>{
        if (index === activeIndex) {
             return styles.hover;
        }
        return styles.option
    }

    const handleClick = (index) => {
        setActiveIndex(index);
    }

    return <div className={styles.selector}>
        {activeIndex !== -1 && (
            <div className="selector-item">
                <img src={options[activeIndex].src} alt=""/>
            </div>
        )}
        <div className={styles.select}>
            {options.map(function (item, index) {
                return <div className={activeStyle(index)} onClick={() => handleClick(index)}>
                        {item.color}
                    </div>
                }
            )}
        </div>
    </div>
}

export default Selector;