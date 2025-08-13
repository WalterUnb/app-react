import Header from '../components/Header.jsx'
import Footer from '../components/Footer.jsx'
import styles from '../components/Home.module.sass'
import photo from '../assets/images/family.png'
import NumericInput from '../components/NumericInput'
import { useNavigate } from 'react-router-dom';
import { useState } from 'react';

export default function Home({
  onChangeTipo,
  onChangeNumero,
}) {
  const navigate = useNavigate();
  const [tipo, setTipo] = useState(null)
  const [numero, setNumero] = useState('')
  const [cel, setCel] = useState('')

  const opciones = ['DNI', 'Pasaporte']
  const labelBoton = tipo ?? 'Seleccione documento'

  const handleSelect = (op) => {
    setTipo(op)
    onChangeTipo?.(op)
  }

  const handleNumero = (next) => {
    setNumero(next)
    onChangeNumero?.(next)
  }

  const handle = (next) => {
    setCel(next)
    onChange?.(next)
  }

  const maxLenDoc = tipo === 'DNI' ? 8 : 12
  return (
    <div className={styles.app}>
      <Header />

      <main className="row">
        <div className={`col-lg-6 col-md-6 col-sm-12 col-12 mt-4 ${styles.display}`}>
          <img className={styles.photo} src={photo} alt="Family"/>
        </div>

        <div className={`col-lg-6 col-md-6 col-sm-12 col-12 mt-4 ${styles.display2}`}>
          <div className='row'>
            <div className={`col-lg-6 col-md-6 col-sm-12 col-12`}>
              <h5 className={styles.fondo}>Seguro Salud Flexible</h5>
            </div>
            <div className={`col-lg-12 col-md-12 col-sm-12 col-12 mt-4`}>
              <h1 className={styles.title}>Creado para ti y tu
                <br />
                familia</h1>
            </div>
            <div className={`col-lg-12 col-md-12 col-sm-12 col-12`}>
              <h6>Tú eliges cuánto pagar. Ingresa tus datos, cotiza y <br /> recibe nuestra asesoría. 100% online.</h6>
            </div>
            <div className={`col-lg-12 col-md-12 col-sm-12 col-12 mt-4`}>
              <div className={`input-group w-100 mb-3 ${styles.ancho}`}>
                <div className="dropdown w-20">
                  <button
                    className={`btn btn-outline-secondary dropdown-toggle ${styles.radius}`}
                    type="button"
                    data-bs-toggle="dropdown"
                    aria-expanded="false"
                  >
                    {tipo ? tipo : 'Seleccione documento'}
                  </button>
                  <ul className="dropdown-menu">
                    {opciones.map(op => (
                      <li key={op}>
                        <button
                          type="button"
                          className={`dropdown-item ${tipo === op ? 'active' : ''}`}
                          onClick={() => handleSelect(op)}
                        >
                          {op}
                        </button>
                      </li>
                    ))}
                  </ul>
                </div>
                <NumericInput
                  placeholder="Nro. de documento"
                  className={`form-control w-70 ${styles.celular}`}
                  value={numero}
                  onChange={handleNumero}
                  maxLength={maxLenDoc}
                />
              </div>
            </div>
            <div className={`col-lg-12 col-md-12 col-sm-12 col-12`}>
              <NumericInput
                placeholder="Celular"
                className={`form-control w-70 ${styles.celular}`}
                value={cel}
                onChange={handle}
                maxLength={9}           // ajusta según tu país
                autoComplete="tel"
              />
            </div>
            <div className={`col-lg-12 col-md-12 col-sm-12 col-12 mt-4`}>
              <div className="form-check">
                <input className={`form-check-input ${styles.checkbox}`} type="checkbox" value="" id="checkDefault" />
                <label className="form-check-label" htmlFor="checkDefault">
                  Acepto la Política de Privacidad
                </label>
              </div>
            </div>
            <div className={`col-lg-12 col-md-12 col-sm-12 col-12 mt-4`}>
              <div className="form-check">
                <input className={`form-check-input ${styles.checkbox}`} type="checkbox" value="" id="checkDefault" />
                <label className="form-check-label" htmlFor="checkDefault">
                  Acepto la Política Comunicaciones Comerciales
                </label>
              </div>
            </div>
            <div className={`col-lg-12 col-md-12 col-sm-12 col-12 mt-4`}>
              <a className={styles.link} href="">Aplican Términos y Condiciones.</a>
            </div>
            <div className={`col-lg-12 col-md-12 col-sm-12 col-12 mt-4 mb-4`}>
              <button onClick={() => navigate('/plans')} type="button" className={`btn btn-primary btn-lg ${styles.input}`}>Cotiza aquí</button>
            </div>
          </div>
        </div>

      </main>

      <Footer />
    </div>
  )
}