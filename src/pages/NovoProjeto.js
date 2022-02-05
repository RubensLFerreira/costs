import { useHistory } from 'react-router-dom' ///cjs/react-router-dom.min'
import ProjetoForm from '../components/project/ProjetoForm'
import styles from './NovoProjeto.module.css'

function NovoProjeto() {

  const history = useHistory()

  function createPost(project) {
    // initialize cost and services
    project.cost = 0
    project.services = []

    fetch('http://localhost:5000/projects', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(project),
    })
      .then((resp) => resp.json())
      .then((data) => {
        history.push('/projects', { message: 'Projeto criado com sucesso!' })
      })
  }

  return (
    <div className={styles.novoprojeto_container}>
      <h1>Criar Projetos</h1>
      <p>Crie seu projeto para depois adicionar os serviços</p>
      <ProjetoForm handleSubmit={createPost} btnText="Criar projeto"/>
    </div>
  )
}

export default NovoProjeto