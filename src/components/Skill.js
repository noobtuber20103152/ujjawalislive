import React, { useState } from 'react'

function Skill() {
    const [date, setdate] = useState(new Date())
    return (
        <div className="container">
            <div className="row">
                <div id="pro1" className="col-md-6 my-5">
                    <div className="container my-3">
                        <h3>Skills</h3>
                    </div>
                    <div className="container my-4">
                        <div class="progress-info my-3">
                            <div class="progress-label my-3"><span>Frontend</span>
                            </div>
                            <div style={{ height: ".5rem" }} role="progressbar" aria-label="Frontend" class="progress"><div class="progress-bar bg-info" style={{ width: "80%" }} role="progressbar" aria-valuenow="100" aria-valuemin="0" aria-valuemax="100">
                            </div>
                            </div>
                        </div>
                        <div class="progress-info my-3">
                            <div class="progress-label my-3"><span>Programming</span>
                            </div>
                            <div style={{ height: ".5rem" }} role="progressbar" aria-label="Frontend" class="progress"><div class="progress-bar bg-info" style={{ width: "75%" }} role="progressbar" aria-valuenow="100" aria-valuemin="0" aria-valuemax="100">
                            </div>
                            </div>
                        </div>
                        <div class="progress-info my-3">
                            <div class="progress-label my-3"><span>Video Editing</span>
                            </div>
                            <div style={{ height: ".5rem" }} role="progressbar" aria-label="Frontend" class="progress"><div class="progress-bar bg-info" style={{ width: "60%" }} role="progressbar" aria-valuenow="100" aria-valuemin="0" aria-valuemax="100">
                            </div>
                            </div>
                        </div>
                        <div class="progress-info my-3">
                            <div class="progress-label my-3"><span>Gaming - Battle Royale</span>
                            </div>
                            <div style={{ height: ".5rem" }} role="progressbar" aria-label="Frontend" class="progress"><div class="progress-bar bg-info" style={{ width: "90%" }} role="progressbar" aria-valuenow="100" aria-valuemin="0" aria-valuemax="100">
                            </div>
                            </div>
                        </div>

                    </div>
                </div>
                <div id="pro2" className="col-md-6">
                    <img style={{ width: "100%" }} src={(date.getHours()>=21 || date.getHours()<=3)?"https://media2.giphy.com/media/fw8NZkFA6V75loV17v/giphy.gif?cid=ecf05e47h30pvxu5ug9i78dbhk14planrpymasxp8q2f3v87&rid=giphy.gif&ct=g":"https://media1.giphy.com/media/QAhOQ5y6Ycb5q6m2ub/giphy.gif?cid=ecf05e47wsafnrtft7f68mpt2rimtdqr4mxad8cucmvh4lr2&rid=giphy.gif&ct=g"} alt="" />
                </div>
               
            </div>
        </div>
    )
}

export default Skill
