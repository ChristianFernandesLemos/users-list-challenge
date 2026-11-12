import styles from './Loading.module.css'

export function Loading() {
  return (
    <div className={styles.loading} role="status">
      <span className={styles.spinner} aria-hidden="true" />
      <span>Carregando usuários...</span>
    </div>
  )
}
