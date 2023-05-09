import styles from './styles.module.css'

export default function Footer() {
    return (
        <>
            <footer className={styles.footer}>
                <div className={styles.general}>
                    <div className={styles.logo}>
                        <img src="/images/logo/morada-logo.png" alt=""/>
                    </div>
                    <div className={styles.title}>
                        <h2>¡Ven a Morada Ancestral!</h2>
                        <p>Y descubre la riqueza culinaria de Colombia en cada bocado.</p>
                        <a href="#">Reservar</a>
                    </div>

                    <div className={styles.contact}>
                        <div className={styles.item}>
                            <i className='bx bxs-map'></i>
                            <span>Granada, Cali Calle 15Norte #9n-32</span>
                        </div>
                        <div className={styles.item}>
                            <i className='bx bxs-phone'></i>
                            <span>(+57) 312 669 2073</span>
                        </div>
                        <div className={styles.social}>
                            <a target={"_blank"} href="https://www.instagram.com/moradancestral/"><i className='bx bxl-instagram'></i></a>
                            <a target={"_blank"} href="https://www.facebook.com/moradancestral"><i className='bx bxl-facebook'></i></a>
                        </div>
                    </div>
                    <div className={styles.apoyoGrafico}>
                        <img src="/images/apoyoGrafico/Morada-ancestral-footer.png" alt="Morada Ancestral fondo"/>
                    </div>
                </div>
            </footer>
        </>
    )
}