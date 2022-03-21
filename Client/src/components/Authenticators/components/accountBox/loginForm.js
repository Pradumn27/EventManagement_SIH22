import React, { useContext, useState } from "react";
import axios from 'axios';
import {
    BoldLink,
    BoxContainer,
    FormContainer,
    Input,
    MutedLink,
    SubmitButton,
} from "./common";
import { Marginer } from "../marginer";
import { AccountContext } from "./accountContext";
import { useStateValue } from "../../../../StateReducer/StateProvider";
import { actionTypes } from "../../../../StateReducer/Reducer";

export function LoginForm(props) {
    const [, dispatch] = useStateValue();
    const { switchToSignup } = useContext(AccountContext);
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        const a = {
            email: email,
            password: password
        }
        axios.post("http://localhost:5001/api/auth/login", a)
            .then(res => {
                dispatch({
                    type: actionTypes.SET_USER,
                    user: res.data,
                });
                console.log(res)
            })
            .catch(err => console.log(err))
    }
    return (
        <BoxContainer>
            <FormContainer>
                <Input type="email" placeholder="Email" onChange={(e) => setEmail(e.target.value)} />
                <Input type="password" placeholder="Password" onChange={(e) => setPassword(e.target.value)} />
            </FormContainer>
            <Marginer direction="vertical" margin={10} />
            <MutedLink href="#">Forget your password?</MutedLink>
            <Marginer direction="vertical" margin="1.6em" />
            <SubmitButton type="submit" onClick={(e) => handleSubmit(e)}>Signin</SubmitButton>
            <Marginer direction="vertical" margin="1em" />
            <MutedLink href="#">
                Don't have an account?{" "}
                <BoldLink href="#" onClick={switchToSignup}>
                    Signup
                </BoldLink>
            </MutedLink>
        </BoxContainer>
    );
}