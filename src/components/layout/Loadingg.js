import Loading from '../../img/Loading.svg'

import styles from './Loadingg.module.css'

function Loadingg() {
  return(
    <div className={styles.loader_container}>
      <img className={styles.loader} src={Loading} alt="Loading" />
    </div>
  )
}

export default Loadingg