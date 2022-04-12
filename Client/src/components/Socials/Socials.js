import React, { useState } from "react";
import "./Socials.css";
import axios from 'axios';
import { useNavigate } from "react-router-dom";
import Loading from "../Loading/Loading";

export default function Socials() {

  const [text, setText] = useState("Type To Post");
  const [load, setLoad] = useState(false);
  var a = [];
  const navigate = useNavigate();
  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoad(true);
    const bod = {
      text: text,
      platforms: a
    }
    axios.post("http://localhost:5001/api/post", bod).then(
    ).catch(err => console.log(err));
    setTimeout(() => { navigate("/upcomingEvents", { replace: true }) }, 2000);
  }

  const handleOnchange = (event) => {
    setText(event.target.value);
  };

  const handleChange = (e) => {
    if (e.target.checked) a.push(e.target.value)
  }

  return (
    load ? <Loading /> :
      <div className="form-body">
        <div className="form-container">
          <form className="register-form">
            <h3>Post To Social Media</h3>
            <br />
            <span>
              <input type="checkbox" id="sm1" name="sm1" value="facebook" onChange={handleChange} checked={true} />
              <label htmlFor="sm1"> Facebook</label>
            </span>

            <span>
              <input type="checkbox" id="sm2" name="sm2" value="twitter" onChange={handleChange} checked={true} />
              <label htmlFor="sm2"> Twitter</label>
            </span>

            <textarea
              className="form-control"
              value={text}
              onChange={(e) => handleOnchange(e)}
              id="inputText"
              rows="10"
            ></textarea>
            <div onClick={(e) => handleSubmit(e)} className="form-field" type="submit">
              Click to Post
            </div>
          </form >
        </div >
      </div>
  );
}
