import React from 'react'
import smilechat from "../smilechat.png"
import ProjectCard from './ProjectCard'
import NeoMangement from "../NeoManagement.png"
import hotelbooking from "../hotelbooking.png"
import videochat from "../videoChat.png"
import Todo from "../Todolist.png"
import { Link } from 'react-router-dom'
import Animated from '../Animated'
import neosmile from "../neosmile.png"
import ChurnAnalysis from "../Churn Analysis.jpg"
import ODIAnalysis from "../ODI Analysis.jpg"
import Restuarant from "../Restuarant analysis .jpg"

function Project() {
    let projectList = [
        {
            image: ChurnAnalysis,
            title: "Customer Churn Analysis and Prediction",
            description: "Analyze customer churn in a telecommunications company and develop predictive models to identify at-risk customers. The goal is to provide actionable insights and recommendations to reduce churn and improve retention.",
            frontEnd: "https://github.com/Tennis95/Saiket-Systems-Customer-Churn-Analysis-and-Prediction-",
            webLink: "https://colab.research.google.com/drive/1a-X4WIs7OWIKupP3_NFQXaLalLxwym_A?usp=share_link",
            
        },
        {
            image: ODIAnalysis,
            title: "ODI World Cup 2023 analysis",
            description: "Analyze ICC Men's ODI World Cup 2023 data using Python to explore player and team performances, game highlights, and gain insights for sports data analysis.",
            frontEnd: "https://github.com/Tennis95/PythonProject/blob/main/README.md",
            webLink: "https://colab.research.google.com/drive/1JSiFWWAVk0sqyj8U9SiNKtKo2AUs4th1?usp=sharing",
            
        },
        {
            image: Restuarant,
            title: "Restaurant Analysis",
            description: "I'll guide you through determining the top three most common cuisines and calculating the percentage of restaurants that serve each of these cuisines using Python",
            frontEnd: "https://github.com/Tennis95/Restaurant-Project",
            webLink: "https://colab.research.google.com/drive/1HD1ZTq7_hXeR0dm5DiS76lMKtMOzv4B6?usp=sharing",
           
        },

        
    ]
    return (
        <Animated>
            <div className="top">
                <h4 className="text-center mt-4 fs-1 text-white project-main-head">Project</h4>
            </div>
            <div className="container project">
                <div className="next-page">
                    <Link className="btn btn-dark rounded-circle ml-4" to={"/skill"}><i class="fa fa-arrow-left" aria-hidden="true"></i></Link>
                    <div className="row mt-5">
                        {
                            projectList.map((card) => {
                                return <ProjectCard card={card} />
                            })
                        }
                    </div>
                    <Link className="btn btn-dark rounded-circle ml-4" to={"/achieve"}><i class="fa fa-arrow-right" aria-hidden="true"></i></Link>
                </div>

            </div>
        </Animated>

    )
}

export default Project