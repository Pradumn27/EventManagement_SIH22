import React from 'react'
import { Link } from 'react-router-dom'
import "../../CanteenRole/CanteenRole.css"
import "./styles.css"

function OrderConfirmed() {
    return (
        <>
            <nav id="navbar">
                <Link to="/roles" >Home</Link>
            </nav>
            <div className='order-confirmed'>
                <h1>Your Order has been confirmed, the vendor is notified via sms, we have also provided you with the vendor and order details on sms and mail.</h1>
            </div>
        </>
    )
}

export default OrderConfirmed