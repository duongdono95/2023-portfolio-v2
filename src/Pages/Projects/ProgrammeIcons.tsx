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
    <div className="programme__icon">
        {props.type === "html" && html}
        {props.type === "css" && css}
        {props.type === "vuejs" && vuejs}
        {props.type === "js" && js}
        {props.type === "react" && react}
        {props.type === "typescript" && typescript}
        {props.type === "mongodb" && mongodb}
        {props.type === "postman" && postman}
        {props.type === 'uiux' && "Ui/Ux"}
        {props.type === 'webDev' && "Web Dev"}
    </div>
  )
}

export default ProgrammeIcons