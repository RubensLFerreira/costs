import { useLocation } from 'react-router-dom'

import Mensagem from "../components/layout/Mensagem"
import Container from '../components/layout/Container'
import LinkButton from '../components/layout/LinkButton'

import styles from './Projetos.module.css'

function Projetos() {
  const location = useLocation();
  let message = ''
  if(location.state){
    message = location.state.message
  }

  return (
    <div className={styles.project_container}>
      <div className={styles.tittle_container}>
        <h1>Meus projeto</h1>
        <LinkButton to="/novoprojeto" text="Criar projeto" />
      </div>
      {message && <Mensagem type="sucess" msg={message} />}
      <Container customClass="start">
        <p>Projetos...</p>
      </Container>
    </div>
  )
}

export default Projetos