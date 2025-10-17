import React from 'react'

const SkillsList = ({src,skill}) => {
  return (
<span>
    <img src={src} alt="checkmarkicon" />
     <p>{skill}</p>              
</span>
  )
}

export default SkillsList
