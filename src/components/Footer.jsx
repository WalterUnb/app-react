import styles from './Footer.module.sass'
import logo from '../assets/images/rimacBlack.png'

export default function Footer() {
  return (
    <footer className={`row ${styles.footer}`}>
      <div className="col-lg-6 col-md-6 col-sm-6 col-6">
        <img className={styles.photo} src={logo} alt="RIMAC Logo" />
      </div>
      <div className={`col-lg-6 col-md-6 col-sm-6 col-6 ${styles.title}`}>
        © {new Date().getFullYear()} RIMAC Seguros y Reaseguros.
      </div>
      {/* <small className={styles.title}>
        
      </small> */}
    </footer>
  )
}