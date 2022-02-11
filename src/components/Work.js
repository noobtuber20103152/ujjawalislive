import React from 'react'
import WorkComponents from './WorkComponents'

function Work() {
    return (
        <div className="container px-0 my-5">
            <div id="workbox1" className="container my-2">
                <div className="container">
                    <h1 className="text-center">What I do</h1>
                </div>
                <div className="container px-0 my-4">
                    <h5 id="Passion" className="text-wrap text-uppercase text-center px-0">A JavaScript/React JS web developer and  PASSIONATE about backend</h5>
                </div>
            </div>

            <div className="container">
                <div className="row">
                    <div id="workbox2" className="col-md-6 my-3">
                        <div className="container text-center">
                            <img style={{ width: "90%" }} src="./7SvE.gif" alt="" />
                        </div>
                    </div>
                    <div id="workbox3" className="col-md-6 my-4">
                        <div className="d-flex justify-content-center flex-wrap mb-5 px-2">
                            <WorkComponents title="HTML" link="https://www.svgrepo.com/show/55451/html.svg" />
                            <WorkComponents title="CSS" link="https://www.svgrepo.com/show/303481/css-3-logo.svg" />
                            <WorkComponents title="JavaScript" link="https://www.svgrepo.com/show/349419/javascript.svg" />
                            <WorkComponents title="React JS" link="https://www.svgrepo.com/show/355190/reactjs.svg" />
                            <WorkComponents title="C++" link="https://www.svgrepo.com/show/373526/cpp.svg" />
                            <WorkComponents title="BootStrap" link="https://www.svgrepo.com/show/353498/bootstrap.svg" />
                            <WorkComponents title="PHP" link="https://www.svgrepo.com/show/354180/php.svg" />
                            <WorkComponents title="MySQL" link="https://www.svgrepo.com/show/306453/mysql.svg" />
                            <WorkComponents title="Node JS" link="https://www.svgrepo.com/show/303658/nodejs-1-logo.svg"/>
                            <WorkComponents title="Mongo DB" link="https://www.svgrepo.com/show/331488/mongodb.svg"/>
                            <WorkComponents title="Video Editing" link="https://www.svgrepo.com/show/31314/video-player.svg" />
                            <WorkComponents title="YouTube" link="https://www.svgrepo.com/show/157839/youtube.svg" />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Work
