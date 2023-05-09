import styles from "./styles.module.css";

interface CardImgProps {
    img: string;
    alt: string;
}
const CardImg: React.FC<CardImgProps> = ({img, alt}) => {
    return (
        <>
            <div className={styles.card}>
                <img src={`/images/galery/${img}.png`} alt={alt}/>
            </div>
        </>
    )
}

export default CardImg;