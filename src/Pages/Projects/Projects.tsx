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
          <div className="preview">
            {displayedProject.imgUrl === "web1" && <img src={images.web1}  alt="" />}
            {displayedProject.imgUrl === "web2" && <img src={images.web2}  alt="" />}
            {displayedProject.imgUrl === "web3" && <img src={images.web3}  alt="" />}
            {displayedProject.imgUrl === "uiux1" && <img src={images.uiux1}  alt="" />}
            {displayedProject.imgUrl === "uiux2" && <img src={images.uiux2}  alt="" />}
            {displayedProject.imgUrl === "uiux3" && <img src={images.uiux3}  alt="" />}
            {displayedProject.imgUrl === "uiux4" && <img src={images.uiux4}  alt="" />}
          </div>
          <div>
            {<ProgrammeIcons type={displayedProject.type}/>}
            <p>{displayedProject.description}</p>
            <p>-</p>
            <p>{displayedProject.year}</p>
          </div>
          {displayedProject.programmes && (
            <div className='programmes'>{displayedProject.programmes.map((program, index) => {
              return (
                <React.Fragment key={index}><ProgrammeIcons type={program} /></React.Fragment>
              )
            })}</div>
          )}
          {displayedProject.role && (
            <div className="roles">
              <h3><i className="fa-solid fa-user"></i></h3>
              {displayedProject.role.map((role, index) => {
                return(
                  <p key={index}>{role}</p>
                )
              })}
            </div>
          )}
          <div className="project__buttons">
            {displayedProject.processDeck && <div className="button pd"><p><a rel="noreferrer" target="_blank" href={displayedProject.processDeck}>Process Deck</a></p></div>}
            {displayedProject.github && <div className="button git"><p><a rel="noreferrer" target="_blank" href={displayedProject.github}>Github Repository</a></p></div>}
            {displayedProject.site && <div className="button site"><p><a rel="noreferrer" target="_blank" href={displayedProject.site}>Visit The Site</a></p></div>}
          </div>
        </div>
      </div>
    </div>
  )
}

export default Projects