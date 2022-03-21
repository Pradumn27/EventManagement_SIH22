import React from 'react'
import { Link, Navigate, useNavigate } from 'react-router-dom'
import { useStateValue } from "../../StateReducer/StateProvider"
import { actionTypes } from "../../StateReducer/Reducer"

function Sidebar({ active }) {

    const [{ user }, dispath] = useStateValue();
    const navigate = useNavigate();
    const handleClick = () => {
        dispatch({
            type: actionTypes.SET_USER,
            user: null,
        });
        navigate("/", { replace: true })
    }

    return (

        <div className={active ? "vertical-nav bg-white active" : "vertical-nav bg-white"} id="sidebar">
            <p className="text-gray font-weight-bold text-uppercase px-3 py-4 mb-0">AICTE</p>
            <ul className="nav flex-column bg-white mb-0">
                {user.isAdmin &&
                    <li className="nav-item">
                        <Link to="/event" className="nav-link text-dark" >
                            <i className="fa fa-plus-square-o mr-3 fa-fw"></i>
                            Add Event
                        </Link>
                    </li>
                }
                <li className="nav-item">
                    <Link to="/roles" className="nav-link text-dark">
                        <i className="fa fa-user mr-3 fa-fw"></i>
                        Roles
                    </Link>
                </li>
                <li className="nav-item">
                    <Link to="/upcomingEvents" className="nav-link text-dark">
                        <i className="fa fa-clock-o mr-3 fa-fw"></i>
                        Upcoming Events
                    </Link>
                </li>
                <li>
                    <a onClick={() => handleClick()} className='nav-link text-dark'>
                        <i className="fa fa-clock-o mr-3 fa-fw"></i>
                        Log Out
                    </a>
                </li>
            </ul>
        </div>
    )
}

export default Sidebar