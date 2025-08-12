import Header from './components/Header.jsx'
import Footer from './components/Footer.jsx'
import Button from './components/Button/Button.jsx'
import styles from './App.module.sass'
import photo from './assets/images/family.png'

export default function App() {
  return (
    <div className={styles.app}>
      <Header />

      <main className="row">
        <div className={`col-lg-6 col-md-6 col-sm-6 col-6 mt-4 ${styles.display}`}>
          <img className={styles.photo} src={photo} alt="Family"/>
        </div>

        <div className={`col-lg-6 col-md-6 col-sm-6 col-6 mt-4 ${styles.display2}`}>
          <div className='row'>
            <div className={`col-lg-6 col-md-6 col-sm-6 col-6`}>
              <h5 className={styles.fondo}>Seguro Salud Flexible</h5>
            </div>
            <div className={`col-lg-12 col-md-12 col-sm-12 col-12 mt-4`}>
              <h1 className={styles.title}>Creado para ti y tu
                <br />
                familia</h1>
            </div>
            <div className={`col-lg-12 col-md-12 col-sm-12 col-12 mt-4`}>
              <h6>Tú eliges cuánto pagar. Ingresa tus datos, cotiza y <br /> recibe nuestra asesoría. 100% online.</h6>
            </div>
            <div className={`col-lg-12 col-md-12 col-sm-12 col-12 mt-4`}>
              <div className="input-group w-100 mb-3">
                <div className="dropdown w-30">
                  <button
                    className="btn btn-outline-secondary dropdown-toggle w-100"
                    type="button"
                    data-bs-toggle="dropdown"
                    aria-expanded="false"
                  >
                    Seleccione documento
                  </button>
                  <ul className="dropdown-menu">
                    <li><button className="dropdown-item" type="button">DNI</button></li>
                    <li><button className="dropdown-item" type="button">Pasaporte</button></li>
                  </ul>
                </div>
                <input
                  type="text"
                  className="form-control w-70"
                  aria-label="Text input with dropdown button"
                  id="documentInput"
                  placeholder="Nro. de documento"
                />
                {/* <label htmlFor="documentInput">Nro. de documento</label> */}
              </div>
            </div>
          </div>
        </div>

      </main>

      <Footer />
    </div>
  )
}