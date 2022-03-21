import React, { useState } from "react";
import "./Socials.css";
import axios from 'axios';
import { useNavigate } from "react-router-dom";

export default function Socials() {

  const [text, setText] = useState("Type To Post");

  var a = [];

  const navigate = useNavigate();
  const handleSubmit = async (e) => {
    e.preventDefault;
    const bod = {
      text: text,
      platforms: a
    }
    axios.post("http://localhost:5001/api/post", bod).then(navigate("/upcomingEvents", { replace: true })).catch(err => console.log(err));

  }

  const handleOnchange = (event) => {
    setText(event.target.value);
  };

  const handleChange = (e) => {
    if (e.target.checked) a.push(e.target.value)
  }

  return (
    <div className="form-body">
      <div className="form-container">
        <form className="register-form">
          <h3>Select Social Platform to Post</h3>
          <br />
          <span>
            <input type="checkbox" id="sm1" name="sm1" value="facebook" onChange={handleChange} />
            <label htmlFor="sm1"> Facebook</label>
          </span>

          <span>
            <input type="checkbox" id="sm2" name="sm2" value="twitter" onChange={handleChange} />
            <label htmlFor="sm2"> Twitter</label>
          </span>

          <span>
            <input type="checkbox" id="sm3" name="sm3" value="linkedin" onChange={handleChange} />
            <label htmlFor="sm3"> LinkedIn</label>
          </span>

          <span>
            <input type="checkbox" id="sm4" name="sm4" value="instagram" />
            <label htmlFor="sm4"> Instagram</label>
          </span>

          <textarea
            className="form-control"
            value={text}
            onChange={(e) => handleOnchange(e)}
            id="inputText"
            rows="7"
          ></textarea>
          <div onClick={(e) => handleSubmit(e)} className="form-field" type="submit">
            Post
          </div>
        </form >
      </div >
    </div>
  );
}
