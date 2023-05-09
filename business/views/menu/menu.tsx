import styles from "./styles.module.css";
import Card from "@/business/views/menu/card/card";

export default function Menu() {
    return (
        <>
            <section className={styles.section} id={"menu"}>
                <div className={styles.general}>
                    <div className={styles.content}>
                        <h2>Menú</h2>
                        <p>Nuestro menú explora la cocina y sabores de cada rincón de Colombia. La cultura indígena, los
                            trabajadores de la tierra, pescadores, bosques y selvas nos inspiraron para crear platos
                            memorables llenos de tradición y magia culinaria.
                        </p>
                        <a target={"_blank"} href="https://qr.precompro.com/?source=moradaancestral.precompro.com">Ver Menú</a>
                    </div>
                    <div className={styles.cardGeneral}>
                        <Card img={"entrada-menu"} alt={"Entrada menú"}/>
                        <Card img={"morada-ancestral-bienvenido-2"} alt={"Menú"}/>
                    </div>
                </div>
            </section>
        </>
    )
}