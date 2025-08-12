import Header from '../components/Header.jsx'
import styles from './Plans.module.sass'
import one from '../assets/images/one.png'
import two from '../assets/images/two.png'
import left from '../assets/images/left.png'
import { useNavigate, useParams } from 'react-router-dom';

export default function Plans() {
  const navigate = useNavigate();
  return (
    <div>
      <Header />
        <div className={`row ${styles.rower}`}>
          <div className={`col-lg-12 col-md-12 col-sm-12 col-12 ${styles.display}`}>
            <img className={styles.image} src={one} alt="" />{'\u00A0'}<h6 className={`${styles.title}`}>{'\u00A0'}{'\u00A0'}Planes y coberturas{'\u00A0'}{'\u00A0'}</h6><h6 className={`${styles.title2}`}>- - - -{'\u00A0'}{'\u00A0'}</h6>
            <img className={styles.image} src={two} /> <h6 className={`${styles.titleDisabled}`}>{'\u00A0'}{'\u00A0'}Resumen</h6>
          </div>
        </div>
        <div className={`row`}>
            <div className={`col-lg-4 col-md-4 col-sm-4 col-4 mt-4 ${styles.center}`}>
                <img onClick={() => navigate('*')} className={`${styles.left}`} src={left} alt="" /><h6 className={`${styles.back}`}>{'\u00A0'}Volver</h6>
            </div>
        </div>
    </div>
  )
}