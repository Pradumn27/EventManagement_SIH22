import React from "react";
import "./CanteenRole.css";
import { Link } from 'react-router-dom'
import "../EventForm/Form.css"

const CanteenRole = () => {

  return (
    <div>
      <nav id="navbar">
        <Link to="/roles" >Home</Link>
      </nav>
      <section id="home">
        <h1 className="h-primary">Welcome to AICTE Canteen Portal</h1>
        <p>
          You have been assigned a <b>canteen role</b>.
        </p>
        <p>Click on the button below and place your order.</p>
        <Link to="/menu" className="btn">Order Now</Link>
      </section>
    </div>
  );
};
export default CanteenRole;
