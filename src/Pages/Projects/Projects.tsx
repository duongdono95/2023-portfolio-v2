import React, { useEffect, useState } from 'react'
import images from '../../assets';
import data from './ProjectData.json';
import ProgrammeIcons from './ProgrammeIcons';
import './Project.scss'
const Projects = () => {
  const [selectedIndex, setSelectedIndex] = useState(0)
  const [displayedProject, setDisplayedProject] = useState(data[selectedIndex]);
  useEffect (() => {
    setDisplayedProject(data[selectedIndex])
  },[selectedIndex])
  console.log(displayedProject.imgUrl)
  return (
    <div className='projects'>
      <div className="projects-left">
        {data.map((project, index) => {
          return (
            <div onClick={() => {setSelectedIndex(index)}} key={index} className={ index === selectedIndex ? "title__box project-active" : "title__box"}>
                <h1>{project.title}</h1>
                <div>
                  {<ProgrammeIcons type={project.type}/>}
                  <p>{project.description}</p>
                </div>
            </div>
          )
        })}
      </div>
      <div className="projects-right">
        <div className="preview__container">
          <img src={data[0].imgUrl} alt="" />
          <div className="preview">
            {displayedProject.imgUrl === "web1" && <img src={images.web1}  alt="" />}
            {displayedProject.imgUrl === "web2" && <img src={images.web2}  alt="" />}
            {displayedProject.imgUrl === "web3" && <img src={images.web3}  alt="" />}
            {displayedProject.imgUrl === "uiux1" && <img src={images.uiux1}  alt="" />}
            {displayedProject.imgUrl === "uiux2" && <img src={images.uiux2}  alt="" />}
            {displayedProject.imgUrl === "uiux3" && <img src={images.uiux3}  alt="" />}
            {displayedProject.imgUrl === "uiux4" && <img src={images.uiux4}  alt="" />}
          </div>
          <p>{displayedProject.description}</p>
        </div>
      </div> 
    </div>
  )
}

export default Projects