import ProjetoForm from '../components/project/ProjetoForm'
import styles from './NovoProjeto.module.css'

function NovoProjeto() {
  return (
    <div className={styles.novoprojeto_container}>
      <h1>Criar Projetos</h1>
      <p>Crie seu projeto para depois adicionar os serviços</p>
      <ProjetoForm />
    </div>
  )
}

export default NovoProjeto