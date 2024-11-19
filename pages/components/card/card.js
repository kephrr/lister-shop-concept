import styles from './card.module.css';

function Card({item}){
    return <div className={styles.productcard}>
        <div className="left">
            <p className={styles.mini}>
                {item.code}
            </p>
            <p className={styles.title}>
                {item.title}
            </p>
            <p className={styles.sub}>
                {item.text}
            </p>
        </div>
        <img className="D" src={item.src}></img>
    </div>
}

export default Card;