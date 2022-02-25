import loading from '../../img/loading.svg'

import styles from './Loadingg.module.css'

function Loadingg() {
  return(
    <div className={styles.loader_container}>
      <img className={styles.loader} src={loading} alt="Loading" />
      <p></p>
    </div>
  )
}

export default Loadingg