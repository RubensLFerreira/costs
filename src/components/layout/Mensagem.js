import styles from './Mensagem.module.css';

function Mensagem({ type, msg }) {
  return(
   <p><div className={`${styles.Mensagem} ${styles[type]}`}>{msg}</div></p>
  )
}

export default Mensagem