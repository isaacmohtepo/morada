import styles from './styles.module.css'
import Link from "next/link";

export default function Navbar() {
    return (
        <>
            <nav className={styles.nav}>
                <div className={styles.general}>
                    <div className={styles.menu}>
                        <div className={styles.item}>
                            <Link href="/">
                                <a>Home</a>
                            </Link>
                            <Link href="/">
                                <a>Menú</a>
                            </Link>
                            <Link href="/">
                                <a>Reservas</a>
                            </Link>
                            <Link href="https://www.moradaancestral.com/wp-content/uploads/2023/01/Carta-del-chef_compressed.pdf">
                                <a target={"_blank"}>Carta del Chef</a>
                            </Link>
                        </div>
                    </div>
                    <div className={styles.logo}>
                        <img src="/images/logo/morada-logo.png" alt="Logo"/>
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
                </div>
            </nav>
        </>
    )
}