import React ,{useState} from 'react'

function Front() {
    return (
        <>
            <section id="Front" className="section section-lg section-shaped pb-250">
                <div className="container py-lg-md d-flex">
                    <div className="col px-0">
                        <div className="row">
                            <div className="col-lg-6">
                                <div id="HeyAllbegin" className="my-4 container">
                                    <h2 id="HeyAll">Hey all, I'm Ujjawal</h2>
                                </div>
                                <div id="Introbegin" className=" my-3 container">
                                    <p id="Intro" >A passionate Web developer building quality websites and applications with JavaScript / React JS and some other cool libraries and frameworks.</p>
                                </div>
                                <div id="icons" className="container d-flex">
                                    <a target="_blank" href="https://instagram.com/ujjawal_r100?utm_medium=copy_link" className="my-2">
                                        <i style={{ color: "rgb(131, 58, 180)" }} class="fab fa-instagram"></i>
                                    </a>
                                    <a target="_blank" href="https://www.linkedin.com/in/ujjawal-rachhoya-054297211" className="my-2 ">
                                        <i class="fab fa-linkedin-in"></i>
                                    </a>
                                    <a target="_blank" href="https://github.com/noobtuber20103152" className="my-2">
                                    <i style={{color:"black"}} class="fab fa-github-square"></i>
                                    </a>

                                </div>
                            </div>
                            <div className="col-lg-6">
                                <div className="container w-75 my-3 d-flex justify-content-center ">
                                    <img id="CodingImg" src="./75ez.gif" alt="" />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320"><path fill="#3ee8c3" fill-opacity="1" d="M0,128L18.5,112C36.9,96,74,64,111,74.7C147.7,85,185,139,222,144C258.5,149,295,107,332,122.7C369.2,139,406,213,443,240C480,267,517,245,554,218.7C590.8,192,628,160,665,149.3C701.5,139,738,149,775,170.7C812.3,192,849,224,886,202.7C923.1,181,960,107,997,64C1033.8,21,1071,11,1108,37.3C1144.6,64,1182,128,1218,170.7C1255.4,213,1292,235,1329,218.7C1366.2,203,1403,149,1422,122.7L1440,96L1440,0L1421.5,0C1403.1,0,1366,0,1329,0C1292.3,0,1255,0,1218,0C1181.5,0,1145,0,1108,0C1070.8,0,1034,0,997,0C960,0,923,0,886,0C849.2,0,812,0,775,0C738.5,0,702,0,665,0C627.7,0,591,0,554,0C516.9,0,480,0,443,0C406.2,0,369,0,332,0C295.4,0,258,0,222,0C184.6,0,148,0,111,0C73.8,0,37,0,18,0L0,0Z"></path></svg>
        </>
    )
}

export default Front
