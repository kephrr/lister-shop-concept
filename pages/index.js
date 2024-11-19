import Head from 'next/head';
import styles from '../styles/global.module.css';
import home from '../styles/home.module.css';
import Header from "./components/header/header";
import Hero from "./components/hero/hero";
import Card from "./components/card/card";

function Home() {
    const cards = [
        {
            src:'./studio.png',
            code:'KVQ 194',
            title:'HeadPhones Wireless with 6 EQ modes',
            text: 'Feel the new sound with this model of headphones. New features...'
        },
        {
            src:'./gamer.png',
            code:'LGY 078',
            title:'Trust GXT 433K pylo gaming headset',
            text: 'Are you a gamer and need new headphones ? Consider this option...'
        },
        {
            src:'./sound.png',
            code:'JHR 654',
            title:'The new generation of headphones',
            text: 'Wireless Bluetooth Headphones with Noise Canceling Over-Ear Stereo Earp'
        }
    ]


  return <div   className={styles.body}>
            <div className={styles.container}>
                <Head>
                    <title>LISTER Shop</title>
                    <link rel="icon" href="/sparkle.svg" />
                </Head>
                <Header></Header>
                <Hero></Hero>
                <div className={home.cards}>
                    {cards.map(function (item) {
                        return <Card item={item}></Card>
                    })}
                </div>
            </div>
         </div>
}

export default Home;
