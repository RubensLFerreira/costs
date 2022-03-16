//import styles from './Project.module.css'

import { useParams} from 'react-router-dom'
import { useState} from 'react'
import { useEffect} from 'react'
function Project() {

    const { id } = useParams();
    const [project, setProject] = useState([])

    useEffect(() => {
      fetch(`http://localhost:5000/projetos/${id}`, {
        method: 'GET',
        headers: {
        'Content-Type': 'applicationjson',
        },
      })
      .then(resp => resp.json())
      .then((data) => {
        setProject(data)
      })
      .catch(err => console.log(err))
    }, [id])

    return(
    <p>{project.name}</p>
  )
}

export default Project