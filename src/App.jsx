import Header from './components/Header.jsx'
import Footer from './components/Footer.jsx'
import Button from './components/Button/Button.jsx'
import styles from './App.module.sass'

export default function App() {
  return (
    <div className={styles.app}>
      <Header />

      <main className={styles.container}>
        <section>
          <h1>Hola React</h1>
          <p>Este es tu layout básico listo para construir.</p>

          <div style={{ marginTop: '1rem' }}>
            <Button onClick={() => alert('Click!')}>Botón normal</Button>
            <Button variant="primary" style={{ marginLeft: '0.5rem' }}>
              Botón primario
            </Button>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  )
}