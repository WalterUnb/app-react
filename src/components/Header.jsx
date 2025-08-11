import styles from './Header.module.sass'
import logo from '../assets/images/RIMAC.png'

export default function Header() {
  return (
    <header className={styles.header}>
      <div><img className={styles.logo} src={logo} alt="Rimac Logo"/></div>

      <nav className={styles.nav}>
        <a className={styles.link} href="#">
          ¡Compra por este medio!
        </a>
        <a className={styles.link} href="#">
          Acerca
        </a>
      </nav>
    </header>
  )
}