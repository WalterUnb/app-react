import Header from '../components/Header.jsx'
import styles from './Plans.module.sass'
import one from '../assets/images/one.png'
import two from '../assets/images/two.png'
import left from '../assets/images/left.png'
import { useNavigate } from 'react-router-dom';
import SelectCard from '../components/SelectCard'
import { useState } from 'react';
import IconForMe from '../components/IconForMe'
import IconForOther from '../components/IconForOther'
import PlansGrid from '../components/PlansGrid'
import '../styles/select-cards.sass'
import '../index.sass'

export default function Plans() {
  const navigate = useNavigate();
  const [value, setValue] = useState(null)
  return (
    <div>
      <Header />
        <div className={`row ${styles.rower}`}>
          <div className={`col-lg-12 col-md-12 col-sm-12 col-12 ${styles.display}`}>
            <img className={styles.image} src={one} alt="" />{'\u00A0'}<h6 className={`${styles.title3}`}>{'\u00A0'}{'\u00A0'}Planes y coberturas{'\u00A0'}{'\u00A0'}</h6><h6 className={`${styles.title2}`}>- - - -{'\u00A0'}{'\u00A0'}</h6>
            <img className={styles.image} src={two} /> <h6 className={`${styles.titleDisabled}`}>{'\u00A0'}{'\u00A0'}Resumen</h6>
          </div>
        </div>
        <div className={`row`}>
            <div className={`col-lg-4 col-md-4 col-sm-4 col-4 mt-4 ${styles.center}`}>
                <img onClick={() => navigate('/#')} className={`${styles.left}`} src={left} alt="" /><h6 onClick={() => navigate('/#')} className={`${styles.back}`}>{'\u00A0'}Volver</h6>
            </div>
        </div>
        <div className={`row`}>
            <div className={`col-lg-12 col-md-12 col-sm-12 col-12 mt-4 ${styles.center}`}>
                <h1>Rocío ¿Para quién deseas</h1>
            </div>
        </div>
        <div className={`row`}>
            <div className={`col-lg-12 col-md-12 col-sm-12 col-12 ${styles.center}`}>
                <h1>cotizar?</h1>
            </div>
        </div>
        <div className={`row`}>
            <div className={`col-lg-12 col-md-12 col-sm-12 col-12 ${styles.center}`}>
                <h6>Seleccione la opción que se ajuste más a tus necesidades.</h6>
            </div>
        </div>
              <div className="cards-grid">
                <SelectCard
                  name="quoteFor"
                  value="me"
                  checked={value === 'me'}
                  onChange={setValue}
                  title="Para mí"
                  description="Cotiza tu seguro de salud y agrega familiares si así lo deseas."
                  icon={<IconForMe />}
                />

                <SelectCard
                  name="quoteFor"
                  value="other"
                  checked={value === 'other'}
                  onChange={setValue}
                  title="Para alguien más"
                  description="Realiza una cotización para uno de tus familiares o cualquier persona."
                  icon={<IconForOther />}
                />
            </div>
            {value ? (
            <div className='page-plans'>
              <PlansGrid />
            </div>
            ) : null}
       </div>
  )
}