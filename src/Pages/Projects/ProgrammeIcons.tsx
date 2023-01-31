import React from 'react'

type Type = string

interface Props {
    type : Type;
}

const ProgrammeIcons:React.FC<Props> = (props) => {
    const html = <i className="fa-brands fa-html5"></i>;
    const css = <i className="fa-brands fa-css3-alt"></i>;
    const js = <i className="fa-brands fa-square-js"></i>;
    const vuejs = <i className="fa-brands fa-vuejs"></i>;
    const react = <i className="fa-brands fa-react"></i>;
    const typescript = <p>TS</p>;
    const mongodb = <span>MongoDB</span>;
    const postman = <span>Postman</span>;
  return (

      <>
          {props.type === "html" && <div className="programme__icon">HTML</div>}
          {props.type === "css" && <div className="programme__icon">CSS</div>}
          {props.type === "vuejs" && <div className="programme__icon">VUE</div>}
          {props.type === "js" && <div className="programme__icon">JS</div>}
          {props.type === "react" && <div className="programme__icon">REACT</div>}
          {props.type === "typescript" && <div className="programme__icon">TS</div>}
          {props.type === "mongodb" && <div className="programme__icon">MONGODB</div>}
          {props.type === "postman" && <div className="programme__icon">POSTMAN</div>}
          {props.type === 'uiux' && <div className="type__icon">Ui/Ux</div>}
          {props.type === 'webDev' && <div className="type__icon">Web Dev</div>}
      </>

  )
}

export default ProgrammeIcons