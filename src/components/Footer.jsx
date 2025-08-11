import styles from './Footer.module.sass'

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <small>
        © {new Date().getFullYear()} Mi App. Todos los derechos reservados.
      </small>
    </footer>
  )
}