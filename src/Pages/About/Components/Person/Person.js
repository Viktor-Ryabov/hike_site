import React from 'react'
import Styles from "./Person.module.css";
import ArticleAbout from '../../UI/ArticleAbout/ArticleAbout';
import FotoAbout from "../../UI/FotoAbout/FotoAbout.js";
import Title from '../../UI/Title/Title';

const Person = ({props}) => {
  console.log(props)
  return (
    <div className={Styles.person}>
      <ArticleAbout text={props.text}/>
      <FotoAbout image={props.image}/>
      <Title name={props.name}/>
    </div>
  )
}

export default Person