import styles from "./styles.module.css";

interface CardProps {
    img: string;
    alt: string;
}

const Card: React.FC<CardProps> = ({img, alt}) => {
    return (
        <>
            <div className={styles.card}>
                <img src={`/images/menu/${img}.png`} alt={alt}/>
            </div>
        </>
    )
}

export default Card;