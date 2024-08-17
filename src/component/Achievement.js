import React from 'react'
import Timeline from './Timeline'
import { Link } from 'react-router-dom'
import Animated from '../Animated'
import Goal from "../goal.gif"

function Achievement() {
    let details=
    [
        {
            month:"",
            image:false,
            year:"Jan 2024 – Jun 2024 ",
            title:"Data Analyst Intern",
            description:"Data Analyst Intern – Einstro Technical Services Pvt Ltd ",
        },
        {
            month:"",
            year:"Aug 2023 - Nov 2023",
            title:"Full Stack of Data Science",
            description:"At credo Systemz, I finished a full stack data science course.",
        }
    ]
    return (
        <>
        <Animated>
            <div className="top"><h4 className="text-center mt-4 fs-1 text-white"><img className="size-2" src={Goal}/>Acheivements</h4></div>
            <div class="container achieve text-name text-white">
            <div className="page"><Link className="btn btn-dark rounded-circle ml-4" to={"/project"}><i class="fa fa-arrow-left" aria-hidden="true"></i></Link></div>
                <div class="main-timeline">
                    {
                        details.map((list)=>{
                            return <Timeline list={list}/>
                        })
                    }
                </div>
                <div className="page"><Link className="btn btn-dark rounded-circle ml-4" to={"/contact"}><i class="fa fa-arrow-right" aria-hidden="true"></i></Link></div>
            </div>
            </Animated>
        </>
    )
}

export default Achievement