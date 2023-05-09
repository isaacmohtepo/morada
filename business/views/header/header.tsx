import SwiperJs from "@/business/views/header/swiperJs/swiperJs";
import {SwiperSlide} from "swiper/react";
import styles from './styles.module.css'

export default function Header() {
    return (
        <>
            <section className={styles.section}>
                <SwiperJs>
                    <SwiperSlide>
                        <img src="/images/slider/Morada-ancestral-slider.png" alt=""/>
                        <div className={styles.content}>
                            <h1>Sabores Ancestrales</h1>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <img src="/images/slider/Morada-ancestral-slider.png" alt=""/>
                        <div className={styles.content}>
                            <h1>Una experiencia gastronómica inolvidable</h1>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <img src="/images/slider/Morada-ancestral-slider.png" alt=""/>
                        <div className={styles.content}>
                            <h1>Conecta con tu raíces</h1>
                        </div>
                    </SwiperSlide>
                </SwiperJs>

            </section>
        </>
    )
}