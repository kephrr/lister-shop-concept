import ButtonDark from '../button-dark/button';
import Button from '../button/button';
import styles from './hero.module.css'
import Attribute from "../attribute/attribute";
import Selector from "../selector/selector";

function Hero(){
    const heroAttribbutes = [
        {
            icon: "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgdmlld0JveD0iMCAwIDI0IDI0IiBmaWxsPSJub25lIiBzdHJva2U9IiM2MWQxNDEiIHN0cm9rZS13aWR0aD0iMiIgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIiBzdHJva2UtbGluZWpvaW49InJvdW5kIiBjbGFzcz0ibHVjaWRlIGx1Y2lkZS1hdWRpby1saW5lcyI+PHBhdGggZD0iTTIgMTB2MyIvPjxwYXRoIGQ9Ik02IDZ2MTEiLz48cGF0aCBkPSJNMTAgM3YxOCIvPjxwYXRoIGQ9Ik0xNCA4djciLz48cGF0aCBkPSJNMTggNXYxMyIvPjxwYXRoIGQ9Ik0yMiAxMHYzIi8+PC9zdmc+",
            text: "Clear sound"
        },
        {
            icon: "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgdmlld0JveD0iMCAwIDI0IDI0IiBmaWxsPSJub25lIiBzdHJva2U9IiM2MWQxNDEiIHN0cm9rZS13aWR0aD0iMiIgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIiBzdHJva2UtbGluZWpvaW49InJvdW5kIiBjbGFzcz0ibHVjaWRlIGx1Y2lkZS1zZXR0aW5ncy0yIj48cGF0aCBkPSJNMjAgN2gtOSIvPjxwYXRoIGQ9Ik0xNCAxN0g1Ii8+PGNpcmNsZSBjeD0iMTciIGN5PSIxNyIgcj0iMyIvPjxjaXJjbGUgY3g9IjciIGN5PSI3IiByPSIzIi8+PC9zdmc+",
            text: "Latest settigns"
        }
    ]

    const options = [
        {
            color: "black",
            src: "./jbl-black.png",
            active: true
        },
        {
            color: "gray",
            src: "./jbl-gray.png",
            active: false
        },
        {
            color: "purple",
            src: "./jbl-purple.png",
            active: false
        },
        {
            color: "white",
            src: "./jbl-white.png",
            active: false
        }
    ]


    return <div className={styles.hero}>
        <div className={styles.left}>
            <p className={styles.mini}>play it ti-y 5.2</p>
            <p className={styles.title}>Meet the sounds from the future</p>
            <p className={styles.sub}>Enjoy the sound of music every day with a new stylish and comfortable
                model of Headphones. Stylize, inspire, reproduce</p>
            <div className={styles.buttons}>
                <Attribute attributes={heroAttribbutes}></Attribute>
            </div>
            <div className={styles.buttons}>
                <ButtonDark text="Buy Now"></ButtonDark>
                <Button text="See More" ></Button>
            </div>
        </div>
        <div className={styles.right}>
            <Selector options={options}></Selector>
        </div>
        </div>
}
export default Hero;