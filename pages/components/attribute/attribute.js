import styles from './attribute.module.css'

function Attribute({attributes}) {
    return <div className={styles.attributes}>
        {attributes.map(function(attribute, index) {
            return <span className={styles.attribute} key={index}>
                <img src={attribute.icon} alt=""/>
                {attribute.text}
            </span>
        })}
    </div>
}

export default Attribute;