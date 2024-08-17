import React from 'react'
import python1 from "../python1.png"
import sql from "../Sql.png"
import css from "../css.png"
import excel from "../excel1.png"
import powerbi from "../power3.png"
import code from "../coding.png"
import github from "../github.png"
import python from "../python.png"
import photoshop from "../photoshop.png"
import skill from "../settings.gif"
import mongo from "../mongo.png"
import machinelearning from "../machine learning.png"
import Animated from '../Animated'
import { Link } from 'react-router-dom'
import node from "../nodejs.png"
import SkillCard from './SkillCard'
import express from "../express.png"
function Skill() {
    let skillList=[
      {
        image: python1,
        title: "Python",
        bar:"html",
        percentage:"85%"
      },
      {
        image: sql,
        title: "SQL",
        bar:"css",
        percentage:"80%"
      },
      {
        image: powerbi,
        title: "Power Bi",
        bar:"javascript",
        percentage:"75%"
      },
      {
        image: excel,
        title: "Excel",
        bar:"bootstrap",
        percentage:"95%"
      },
      {
        image: machinelearning,
        title: "ML",
        bar:"react",
        percentage:"75%"
      },
      
      {
        image: github,
        title: "GitHub",
        bar:"github",
        percentage:"65%"
      },
      
    ]
  return (
    <Animated>
      <div className="container heading">
        <div className="main-skill">
          <h1 className="text-center"><img className="size-2" src={skill} />Skill</h1>
        </div>
        
        <div className="row justify-content-center">
          <div className="col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12 m-4 skill-content">
            <div className='row skill-set'>
              {
                skillList.map((list)=>{
                  return <SkillCard list={list}/>
                })
              }
              {/* <div className='animea justify-content-space-evenly col-sm-6 col-md-6 col-lg-3 col-xl-3 col-xxl-3 mb-4'>
                <img className="size" src={css} />
                <p className='skill-name'>CSS</p>
              </div>
              <div className='animea justify-content-space-evenly col-sm-6 col-md-6 col-lg-3 col-xl-3 col-xxl-3 mb-4'>
                <img className="size" src={bootstrap} />
                <p className='skill-name'>Bootstrap</p>
              </div>
              <div className='animea justify-content-space-evenly col-sm-6 col-md-6 col-lg-3 col-xl-3 col-xxl-3 mb-4'>
                <img className="size" src={javascript} />
                <p className='skill-name'>JavaScript</p>
              </div>
              <div className='animea justify-content-space-evenly col-sm-6 col-md-6 col-lg-3 col-xl-3 col-xxl-3 mb-4'>
                <img className="size" src={react} />
                <p className='skill-name'>React</p>
              </div>
              <div className='animea justify-content-space-evenly col-sm-6 col-md-6 col-lg-3 col-xl-3 col-xxl-3 mb-4'>
                <img className="size" src={node} />
                <p className='skill-name'>nodejs</p>
              </div>
              <div className='animea justify-content-space-evenly col-sm-6 col-md-6 col-lg-3 col-xl-3 col-xxl-3 mb-4'>
                <img className="size" src={mongo} />
                <p className='skill-name'>MongoDB</p>
              </div>
              <div className='animea justify-content-space-evenly col-sm-6 col-md-6 col-lg-3 col-xl-3 col-xxl-3 mb-4'>
                <img className="size" src={github} />
                <p className='skill-name'>GitHub</p>
              </div>
              <div className='animea justify-content-space-evenly col-sm-6 col-md-6 col-lg-3 col-xl-3 col-xxl-3 mb-4'>
                <img className="size" src={photoshop} />
                <p className='skill-name'>Photshop</p>
              </div> */}
            </div>
          </div>
        </div>
      </div>
    </Animated>
  )
}

export default Skill