import styles from "./styles.module.css";

export default function CallToAction() {
    return (
        <>
            <div className={styles.call_to_action}>
                <hr/>
                <div className={styles.title}>
                    <span>Haz tu reserva</span>
                    <a target={"_blank"} href="https://moradaancestral.precompro.com/select/">Reservar</a>
                </div>
                <hr/>

            </div>
        </>
    )
}