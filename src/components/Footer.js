import React from 'react'

function Footer() {
    return (
        <div id="footer" className="container-fluid">
            <div className="container">
                <h3 className="text-white py-3 text-center" >Reach out to me</h3>
                <div className="row">
                    <div className="col-md-12">
                        <div className="d-flex justify-content-center flex-wrap mb-5 px-2">
                            <a id="social1" target="_blank" href="https://www.linkedin.com/in/ujjawal-rachhoya-054297211" className="mx-3">
                                <img src="https://www.svgrepo.com/show/137278/linkedin.svg" height="40px" m width="40px" alt="" />
                            </a>
                            <a id="social2" target="_blank" href="https://github.com/noobtuber20103152" className="mx-3">
                                <img src="https://www.svgrepo.com/show/341847/github.svg" height="40px" m width="40px" alt="" />
                            </a>
                            <a id="social3" target="_blank" href="https://instagram.com/ujjawal_r100?utm_medium=copy_link" className="mx-3">
                                <img src="https://www.svgrepo.com/show/111199/instagram.svg" height="40px" m width="40px" alt="" />
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Footer
