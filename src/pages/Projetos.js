import { useLocation } from 'react-router-dom'
import { useState, useEffect } from 'react'

import Mensagem from "../components/layout/Mensagem"
import Container from '../components/layout/Container'
import LinkButton from '../components/layout/LinkButton'
import ProjectCard from '../components/project/ProjectCard'

import styles from './Projetos.module.css'

function Projetos() {
  const [projects, setProjects] = useState([])

  const location = useLocation();
  let message = ''
  if(location.state){
    message = location.state.message
  }

  useEffect(() => {
    fetch('http://localhost:5000/projetos', {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
      },
    })
    .then((resp) => resp.json())
    .then((data) => {
      setProjects(data)
    })
    .catch((err) => console.log(err))
  }, [])

  return (
    <div className={styles.project_container}>
      <div className={styles.tittle_container}>
        <h1>Meus projeto</h1>
        <LinkButton to="/novoprojeto" text="Criar projeto" />
      </div>
      {message && <Mensagem type="sucess" msg={message} />}
      <Container customClass="start">
        {projects.length > 0 &&
          projects.map((project) => 
          <ProjectCard
            id={project.id}
            name={project.name}
            budget={project.budget}
            category={project.category}
            key={project.key}
          />)}
      </Container>
    </div>
  )
}

export default Projetos