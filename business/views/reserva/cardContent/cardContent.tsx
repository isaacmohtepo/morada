import styles from "./styles.module.css";

interface CardContentProps {
    title: string;
    content: string;
    link: string;
}

const CardContent: React.FC<CardContentProps> = ({title, content, link}) => {
    return (
        <>
            <div className={styles.card}>
                <div className={styles.content}>
                    <h2>{title}</h2>
                    <p>{content}</p>
                    <a target={"_blank"} href={link}>Reservar</a>
                </div>
            </div>
        </>
    )
}

export default CardContent;