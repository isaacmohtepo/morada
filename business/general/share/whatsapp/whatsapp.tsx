import styles from './styles.module.css';
import useAnalyticsEventTracker from "../../../services/analytics/useAnalyticsEventTracker";

export default function Whatsapp() {
    const gaEventTracker = useAnalyticsEventTracker('KRU-WSP');

    const wps_analytic= () =>{
        gaEventTracker('WhatsApp');
    }
    return (
        <>
            <div className={styles.whatsapp}>
                <a href="https://wa.me/573245450191" target="_blank" rel="noreferrer" onClick={wps_analytic}>
                    <i className='bx bxl-whatsapp'></i>
                </a>
            </div>
        </>
    )
}

