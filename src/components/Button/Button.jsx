import styles from './Button.module.sass'

export default function Button({ variant = 'default', className = '', ...props }) {
  const classes = [
    styles.button,
    variant === 'primary' && styles['button--primary'],
    className
  ]
    .filter(Boolean)
    .join(' ')

  return <button className={classes} {...props} />
}