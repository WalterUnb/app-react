import styles from './Header.module.sass'
import logo from '../assets/images/RIMAC.png'
import phone from '../assets/images/phone.png'

export default function Header() {
  return (
    <header className={`row ${styles.header}`}>
        <div className="col-lg-6 col-md-6 col-sm-6 col-6">
          <div>
            <img className={styles.logo} src={logo} alt="Rimac Logo" />
          </div>
        </div>
        <div className={`col-lg-6 col-md-6 col-sm-6 col-6 ${styles.alignRight}`}>
          <nav className={styles.nav}>
            <a className={styles.link} href="#">
              ¡Compra por este medio!
            </a>
            <a className={styles.number} href="#"><img className={styles.phone} src={phone} alt="Phone Icon" />  (01) 411 6001</a>
          </nav>
        </div>
    </header>
  );
}