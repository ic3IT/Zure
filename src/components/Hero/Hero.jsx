import { Link } from 'react-router-dom';
import css from './Hero.module.css'

function Hero() {
    return (
        <>
            <section className={css.hero}>
                <div className={css.info}>
                    <h1 className={css.h3}>From Real-Life to Digital</h1>
                    <p className={css.text}>Our vision is to empower individuals to purchase tokenized NFTs that symbolize genuine art crafted by talented artists from around the world.</p>
                    <img className={css.mobile} src='../src/images/heroanimation.gif' />
                    <button class='btn secondary filled btn_mobile'>
                        <img src='../src/images/Icons/RocketLaunch.svg' />
                        <Link to="/create-account">Get Started!</Link>
                    </button>
                    <div className={css.data}>
                        <div className={css.data_inside}>
                            <p className={css.data_number}>---</p>
                            <p className={css.data_text}>Total Sales</p>
                        </div>
                        <div className={css.data_inside}>
                            <p className={css.data_number}>---</p>
                            <p className={css.data_text}>Auctions</p>
                        </div>
                        <div className={css.data_inside}>
                            <p className={css.data_number}>---</p>
                            <p className={css.data_text}>Artists</p>
                        </div>
                    </div>
                </div>
                <img className={css.web} src='../src/images/heroanimation.gif' />
            </section >
        </>
    );
}

export default Hero;
