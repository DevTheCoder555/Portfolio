import styles from "./SkillsStyles.module.css"
import checkMarkIcon from "../../assets/checkmark-dark.svg"
import SkillsList from "../../common/SkillsList.jsx"
const Skills = () => {
  return (
    <section id="skills" className={styles.container}>
        <h1 className="sectiontitle">Skills</h1>
        <div className={styles.skillList}>
            <SkillsList src={checkMarkIcon} skill="HTML"/>
            <SkillsList src={checkMarkIcon} skill="CSS"/>
            <SkillsList src={checkMarkIcon} skill="Javascript"/>
            <SkillsList src={checkMarkIcon} skill="React"/>
        </div>
        <hr />  
         <div className={styles.skillList}>
        <SkillsList src={checkMarkIcon} skill="MongoDB"/>
            <SkillsList src={checkMarkIcon} skill="Nodejs"/>
            <SkillsList src={checkMarkIcon} skill="ExpressJs"/>
        </div>
        <hr />  
    </section>
  )
}

export default Skills
