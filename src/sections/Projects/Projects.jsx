import React from 'react'
import styles from './ProjectsStyles.module.css';
import todo from "../../assets/todo.png"
import ProjectsCards from '../../common/ProjectsCards';
const Projects = () => {
  return (
    <section id="projects" className={styles.container}>
              <h1 className="sectionTitle">Projects</h1>
              <div className={styles.projectscontainer}>
                <ProjectsCards src={todo} link="https://todolist-vert-nu.vercel.app/" h3="To-Do List" p="Complete it"/>    
              </div>

    </section>
  )
}

export default Projects
