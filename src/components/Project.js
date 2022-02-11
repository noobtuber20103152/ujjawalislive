import React from 'react'
import ProjectComponents from './ProjectComponents'

function Project() {
    return (
        <div className="container py-5">
            <div className="container my-3">
                <h1 className="text-dark text-center"> <img width="40px" src="https://www.svgrepo.com/show/232260/task.svg" alt="" /> Projects</h1>
            </div>
            <div className="row my-5">
                <ProjectComponents yes={false} title="YouTube simple clone" desc="A react JS project which use YouTube API to fetch the data and display them dynamically in differect type of categories." link="https://github.com/noobtuber20103152/React-YouTube-Source-Code" />

                <ProjectComponents yes={false} title="News App" desc="A react JS project which use a news API to fetch the data and display them dynamically in differect type of news categories" link="https://github.com/noobtuber20103152/NewsMoney-Source-Code" />

                <ProjectComponents yes={true} title="TextUtils" weblink="https://noobtuber20103152.github.io/TextUtils/" webSrc="https://www.svgrepo.com/show/340025/code.svg" desc="It is a simple react JS project or website in which we can Analyze text." link="https://github.com/noobtuber20103152/TextUtils" />

                <ProjectComponents yes={false} title="Unsplash Images" desc="A react JS project which use an unsplash API to fetch the images and display them dynamically in differect type of images categories and also this application based on react router" link="https://github.com/noobtuber20103152/Unsplash-API-source-code" />

                <ProjectComponents yes={true} title="W3school C++" weblink="https://noobtuber20103152.github.io/c-" webSrc="https://www.svgrepo.com/show/340025/code.svg" desc="It's a simple react-router based application which is help us to learn basics of c++ and all content of this application is taken from w3school website." link="https://github.com/noobtuber20103152/c-" />

                <ProjectComponents yes={false} title="Story" desc="It's a MERN stack website where you can upload your stories and also read out different  stories there." link="https://github.com/noobtuber20103152/MERN-WEB" />
                <ProjectComponents yes={true} weblink="https://noobtuber20103152.github.io/whiteboard/" webSrc="https://www.svgrepo.com/show/340025/code.svg" title="Whiteboard" desc="A whiteboard is a glossy, usually white or black surface for making non-permanent markings." link="https://github.com/noobtuber20103152/whiteboard" />
                <ProjectComponents yes={false} title="CSS Gradient" desc="Create interactive and awesome gradient colors in seconds and random colors also here." link="https://github.com/noobtuber20103152/Color-Gradient" />
            </div>
        </div>
    )
}

export default Project
