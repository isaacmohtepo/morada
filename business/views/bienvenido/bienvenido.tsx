import styles from "./styles.module.css";

export default function Bienvenido() {
    return (
        <>
            <section className={styles.section}>
                <div className={styles.general}>
                    <div className={styles.single}>
                        <img src="/images/galery/morada-ancestral-bienvenido.png" alt=""/>
                    </div>
                    <div className={styles.content}>
                        <div className={styles.title}>
                            <div>
                                <h3>Bienvenido a</h3>
                                <h2>Morada Ancestral</h2>
                            </div>
                            <hr/>
                        </div>

                        <div className={styles.card}>
                            <p>Un lugar donde experimentarás de la alta cocina con platos innovadores que resaltan nuestra cultura colombiana
                            </p>
                            <a href="#">Reservar</a>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}