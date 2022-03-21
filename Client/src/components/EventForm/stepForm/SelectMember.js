import React, { useEffect, useState } from "react";
import Container from "@material-ui/core/Container";
import Button from "@material-ui/core/Button";
import axios from 'axios';
import Loading from "../../Loading/Loading";

import Accordion from '@material-ui/core/Accordion';
import AccordionSummary from '@material-ui/core/AccordionSummary';
import AccordionDetail from '@material-ui/core/AccordionDetails';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';

import ListItemText from '@material-ui/core/ListItemText'

import IconButton from '@material-ui/core/IconButton';
import { Checkbox } from "@material-ui/core";

import "../Form.css"
import { useNavigate } from "react-router-dom";

export const SelectMember = ({ formData, setForm, navigation }) => {
    const { members } = formData;
    const [con, setCon] = useState(true);
    const [resp, setResp] = useState([]);
    const navigate = useNavigate();
    useEffect(async () => {
        await axios.get("http://localhost:5001/api/members")
            .then(function (response) {
                setResp(response.data);
                setCon(false);
            })
            .catch(function (error) {
                console.log(error);
            });
    }, [])

    const [selected, setSelected] = useState([]);
    const setMembers = (event) => {
        if (event.target.checked) {
            let a = {
                userName: event.target.value
            }
            selected.push(a)
            setForm({
                target: {
                    name: 'members',
                    value: [selected]
                }
            })
        } else {

        }
    }

    const bureaus = ["Approval", "Administration", "Finance", "Policy and Academic Planning"];

    return !con ? (
        <>
            <div className="form-div" onClick={() => navigate('/event', { replace: true })}>
                <i className='fas fa-long-arrow-alt-left'></i>
            </div>
            <div className="form">
                <div className="eve">
                    <Container maxWidth="xs">
                        <div className="Event-heading">Select Members for the Event</div>
                        {bureaus.map(res => {
                            return <RenderAccordion summary={res} setMembers={setMembers} details={
                                resp.filter(r => r.bureau == res).map(re => {
                                    return { 'Name': re.username }
                                })
                            } />
                        })}

                        <div className="Event-buttons">
                            <Button
                                color="secondary"
                                variant="contained"
                                style={{ marginRight: "1rem" }}
                                onClick={() => navigation.previous()}
                            >
                                Back
                            </Button>
                            {members.length != 0 &&
                                <Button
                                    color="primary"
                                    variant="contained"
                                    onClick={() => navigation.next()}
                                >
                                    Next
                                </Button>
                            }
                        </div>
                    </Container>
                </div>
            </div>
        </>
    ) : (
        <Loading />
    );
};

export const RenderAccordion = ({ summary, details, setMembers }) => (
    <Accordion>
        <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
        >{summary}</AccordionSummary>
        <AccordionDetail>
            <div>
                {details.map((data, index) => {
                    const objKey = Object.keys(data)[0];
                    const objValue = data[Object.keys(data)[0]];

                    return (
                        <div className="member">
                            <ListItemText key={index}>{`${objKey}: ${objValue}`}</ListItemText>
                            <Checkbox color="primary" value={objValue} onChange={setMembers} />
                        </div>
                    )

                })}
                <IconButton
                    color="primary"
                    component="span"
                    onClick={() => go(`${summary.toLowerCase()}`)}
                >
                </IconButton>
            </div>
        </AccordionDetail>
    </Accordion>
)