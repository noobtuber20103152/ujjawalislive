import React from 'react'

function Education() {
    return (
        <section id="Education" className="section pb-0 bg-gradient-info my-5">
            <div className="container py-5 d-flex justify-content-center flex-column">
                <h1 className="text-white mb-4" id="edu"> <img height="40px" width="40px" src="https://www.svgrepo.com/show/339158/education.svg" alt="" /> Education</h1>
                <div className="row">
                    <div id="edubox1" className="col-md-4 d-flex justify-content-center my-2">
                        <div class="card " style={{ width: "21rem" }}>
                            <div class="card-body">
                                <h3 style={{ fontSize: "1.2rem", color: "#11cdef", marginBottom: "10px" }} className="mb-2">Dr. B.R. Ambedkar National Institute of Technology, Jalandhar</h3>
                                <h5 style={{ fontSize: "0.9rem" }}>Computer Science and Engineering</h5>
                                <button style={{ boxShadow: "none" }} type="button" class="my-3 btn btn-sm btn-primary">
                                    DECEMBER 2020 - PRESENT
                                </button>
                                <p>Participated in various coding contest and sports events within institute. ( wo alg bat h ki abhi tk sakal nhi dekhi institute ki)</p>
                            </div>
                        </div>
                    </div>
                    <div id="edubox2" className="col-md-4 d-flex justify-content-center my-2">
                        <div class="card " style={{ width: "21rem" }}>
                            <div class="card-body">
                                <p className="py-0 my-0">12th pass out</p>
                                <h3 style={{ fontSize: "1.2rem", color: "#11cdef", marginBottom: "10px" }} className="mb-2">Saraswati Sr. Sec. School , Neemkathana, Sikar</h3>
                                <h5 style={{ fontSize: "0.9rem" }}>Science and Math</h5>
                                <button style={{ boxShadow: "none" }} type="button" class="my-3 btn  btn-sm btn-primary">
                                    MAY 2019 - JUNE 2020
                                </button>
                                <p>92% marks in board exam</p>
                            </div>
                        </div>
                    </div>
                    <div id="edubox3" className="col-md-4 d-flex justify-content-center my-2">
                        <div class="card " style={{ width: "21rem" }}>
                            <div class="card-body">
                                <p className="py-0 mb-2">Sports achievments</p>
                                <h3 style={{ fontSize: "1.2rem", color: "#11cdef", marginBottom: "10px" }} className="mb-2">District level kabbadi player</h3>
                                <h5 style={{ fontSize: "0.9rem" }}>Team captain , Main Raider</h5>
                                <button style={{ boxShadow: "none" }} type="button" class="my-3 btn  btn-sm btn-primary">
                                    OCTOBER 2019
                                </button>
                                <p>Semi-finalist. It was a great experience in my life</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Education
