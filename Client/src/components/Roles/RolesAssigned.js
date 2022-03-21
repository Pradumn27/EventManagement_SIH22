import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import Sidebar from '../Sidebar/Sidebar'
import "../EventForm/Form.css"
import { useStateValue } from "../../StateReducer/StateProvider"

function Roles() {

    const [active, setActive] = useState(false);
    const [{ user },] = useStateValue();
    var a = user.rolesAssigned;

    return (
        <>
            <Sidebar active={active} />
            {
                a == "canteen" ? (
                    <div className={active ? "page-content p-5 active right-event" : "page-content p-5 right-event"} id="content">
                        <button id="sidebarCollapse" type="button" onClick={() => setActive(!active)} className="btn btn-light bg-black rounded-pill shadow-sm px-3 mb-4"><i className="fa fa-chevron-left mr-2"></i><small className="text-uppercase font-weight-bold">Toggle</small></button>
                        <h1>You have been assigned canteen role please click the below button to enter the canteen page</h1>
                        <Link to="/canteen" className='event-link' >Click here</Link>
                    </div>
                ) : a != "" ?
                    (<div className={active ? "page-content p-5 active right-event" : "page-content p-5 right-event"} id="content">
                        <button id="sidebarCollapse" type="button" onClick={() => setActive(!active)} className="btn btn-light bg-black rounded-pill shadow-sm px-3 mb-4"><i className="fa fa-chevron-left mr-2"></i><small className="text-uppercase font-weight-bold">Toggle</small></button>
                        <h1>Welcome to the event portal</h1>
                        <h2>Inorder to create an event please click on the button below ..</h2>
                        <Link to="/eventForm" className='event-link' >Click here</Link>
                    </div>) :
                    (<div className={active ? "page-content p-5 active right-event" : "page-content p-5 right-event"} id="content">
                        <   button id="sidebarCollapse" type="button" onClick={() => setActive(!active)} className="btn btn-light bg-black rounded-pill shadow-sm px-3 mb-4"><i className="fa fa-chevron-left mr-2"></i><small className="text-uppercase font-weight-bold">Toggle</small></button>
                        <h1>You haven't been given any event management roles, do checkout other events on the portal.</h1>
                    </div>)
            }
        </>
    )
}

export default Roles