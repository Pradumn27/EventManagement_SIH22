import React, { useContext, useState } from "react";
import axios from 'axios'
import {
    BoldLink,
    BoxContainer,
    FormContainer,
    Input,
    Label,
    MutedLink,
    Select,
    SubmitButton,
} from "./common";
import { Marginer } from "../marginer";
import { AccountContext } from "./accountContext";
import { useStateValue } from '../../../../StateReducer/StateProvider'
import { actionTypes } from "../../../../StateReducer/Reducer";

export function SignupForm(props) {
    const [, dispatch] = useStateValue();
    const { switchToSignin } = useContext(AccountContext);
    const [info, setInfo] = useState({
        firstName: "",
        lastName: "",
        email: "",
        username: "",
        phone: "",
        bureau: "Approval",
        password: "",
    })

    const handleChange = (e) => {
        setInfo({ ...info, [e.target.name]: e.target.value });
    }

    const handleSignUp = () => {
        axios.post("http://localhost:5001/api/auth/register", info).
            then(res => {
                dispatch({
                    type: actionTypes.SET_USER,
                    user: res.data,
                });
            }).
            catch(err => console.log(err))
    }

    return (
        <BoxContainer>
            <FormContainer>
                <Input type="text" placeholder="First Name" name="firstName" onChange={handleChange} />
                <Input type="text" placeholder="Last Name" name="lastName" onChange={handleChange} />
                <Input type="text" placeholder="Select a User Name" name="username" onChange={handleChange} />
                <Input type="email" placeholder="Email" name="email" onChange={handleChange} />
                <Input type="phone" placeholder="Phone Number" name="phone" onChange={handleChange} />
                <Select id="bureaus" name="bureau" onChange={handleChange}>
                    <option value="Bureau">Bureau</option>
                    <option value="Approval">Approval</option>
                    <option value="Administration">Administration</option>
                    <option value="Finance">Finance</option>
                    <option value="Policy and Academic Planning">Policy and Academic Planning</option>
                </Select>
                <Input type="password" placeholder="Password" name="password" onChange={handleChange} />
            </FormContainer>
            <Marginer direction="vertical" margin={10} />
            <SubmitButton type="submit" onClick={handleSignUp}>Signup</SubmitButton>
            <Marginer direction="vertical" margin="1em" />
            <MutedLink href="#">
                Already have an account?
                <BoldLink href="#" onClick={switchToSignin}>
                    Signin
                </BoldLink>
            </MutedLink>
        </BoxContainer>
    );
}