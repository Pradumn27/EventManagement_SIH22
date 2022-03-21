import React, { useState } from 'react'
import "./style.css"
import Sidebar from "../Sidebar/Sidebar"

function index() {

    const [active, setActive] = useState(false);

    return (
        <div className='mainpage'>
            <Sidebar active={active} />
            <div className={active ? "page-content p-5 active" : "page-content p-5"} id="content">
                <button id="sidebarCollapse" type="button" onClick={() => setActive(!active)} className="btn btn-light bg-black rounded-pill shadow-sm px-3 mb-4"><i className="fa fa-chevron-left mr-2"></i><small className="text-uppercase font-weight-bold">Toggle</small></button>

                <h2 className="display-4 text-white">Recent Events</h2>
                <p className="lead text-white mb-0">Welcome to AICTE admin website.</p>
                <div className="separator"></div>
                <div className="row text-white">
                    <div className="col-lg-7">
                        <div id="carouselExampleIndicators" className="carousel slide" data-ride="carousel">
                            <ol className="carousel-indicators">
                                <li data-target="#carouselExampleIndicators" data-slide-to="0" className="active"></li>
                                <li data-target="#carouselExampleIndicators" data-slide-to="1"></li>
                                <li data-target="#carouselExampleIndicators" data-slide-to="2"></li>
                            </ol>
                            <div className="carousel-inner">
                                <div className="carousel-item active">
                                    <img className="d-block w-100" src="/images/image2.jpg" alt="First slide" />
                                </div>
                                <div classNameName="carousel-item">
                                    <img className="d-block w-100" src="/images/image3.jpg" alt="Second slide" />
                                </div>
                                <div className="carousel-item">
                                    <img className="d-block w-100" src="/images//image1.jpg" alt="Third slide" />
                                </div>
                            </div>
                            <a classNameName="carousel-control-prev" href="#carouselExampleIndicators" role="button" data-slide="prev">
                                <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                                <span className="sr-only">Previous</span>
                            </a>
                            <a classNameName="carousel-control-next" href="#carouselExampleIndicators" role="button" data-slide="next">
                                <span className="carousel-control-next-icon" aria-hidden="true"></span>
                                <span className="sr-only">Next</span>
                            </a>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    )
}

export default index;