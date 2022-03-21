import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import Sidebar from '../Sidebar/Sidebar'
import "./Form.css"

function Event() {

    const [active, setActive] = useState(false);

    return (
        <>
            <Sidebar active={active} />
            <div className={active ? "page-content p-5 active right-event" : "page-content p-5 right-event"} id="content">
                <button id="sidebarCollapse" type="button" onClick={() => setActive(!active)} className="btn btn-light bg-black rounded-pill shadow-sm px-3 mb-4"><i className="fa fa-chevron-left mr-2"></i><small className="text-uppercase font-weight-bold">Toggle</small></button>
                <h1>Welcome to the event portal</h1>
                <h2>Inorder to create an event please click on the button below ..</h2>
                <Link to="/eventForm" className='event-link' >Click here</Link>
            </div>
        </>
    )
}

export default Event