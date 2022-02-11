import React from 'react';

function ProjectComponents(props) {
    return (
        <>
            <div id="project1" className="col-md-6 my-2 d-flex justify-content-center ">
                <div class="card shadow-lg p-3 mb-5 bg-body rounded" style={{ width: "25rem" }}>
                    <div class="card-body">
                        <h5 style={{ opacity: "0.8" }} class="card-title">{props.title}</h5>
                        <p style={{ opacity: "0.6" }} class="card-text">{props.desc}</p>
                        {props.yes && <a style={{ boxShadow: "none" }} href={props.weblink} target="_blank" class="btn-icon btn btn-github" aria-label="Github"><span class="btn-inner--icon"><img src={props.webSrc} height="30px" width="30px" alt="" /></span></a>}
                        <a style={{ boxShadow: "none" }} href={props.link} target="_blank" class="btn-icon btn btn-github" aria-label="Github"><span class="btn-inner--icon"><img src="https://www.svgrepo.com/show/341847/github.svg" height="30px" width="30px" alt="" /></span></a>
                    </div>
                </div>
            </div>
        </>
    );
}

export default ProjectComponents;
