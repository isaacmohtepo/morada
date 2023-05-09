import styles from "./styles.module.css";
import CardImg from "@/business/views/reserva/cardImg/cardImg";
import CardContent from "@/business/views/reserva/cardContent/cardContent";

export default function Reserva() {
    return (
        <>
            <section className={styles.section}>
                <div className={styles.card_1}>
                    <CardImg img={"familia"} alt={"Familia Morada Ancestral"}/>
                    <CardContent title={"Una experiencia Ancestral completa"}
                                 content={"Un acercamiento hacia nuestras raíces colombianas te espera en Granada: excelente ambiente, coctelería de autor y sabores fusión que te sorprenderán."}
                                 link={"https://moradaancestral.precompro.com/select/"}/>
                </div>
                <div className={styles.card_2}>
                    <CardContent title={"Acogedor y familiar"}
                                 content={"Te ofrecemos un ambiente en el que te sentirás como en casa. Nuestros espacios están inspirados en las tradiciones ancestrales de nuestro país, y cada detalle ha sido cuidadosamente elegido para que puedas disfrutar del encanto colombiano."}
                                 link={"https://moradaancestral.precompro.com/select/"}/>
                    <CardImg img={"familia-morada-acestral"} alt={"Familia Morada Ancestral"}/>
                </div>
            </section>
        </>
    )
}