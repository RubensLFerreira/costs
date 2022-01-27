import styles from './Home.module.css'
import savings from '../../src/img/savings.svg'
import LinkButton from '../components/layout/LinkButton'


function Home() {
  return (
    <sectio className={styles.home_container}>
      <h1>Bem-vindo so <span>Costs</span></h1>
      <p>Comece a gerenciar seus projetos agora mesmo!</p>
      <LinkButton to="/novoprojeto" text="Criar projeto" />
      <img src={savings} alt="costs" />
    </sectio>
  )
}

export default Home