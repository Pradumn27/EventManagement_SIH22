import React from "react";
import Container from '@material-ui/core/Container';
import Button from '@material-ui/core/Button';
import Accordion from '@material-ui/core/Accordion';
import AccordionSummary from '@material-ui/core/AccordionSummary';
import AccordionDetail from '@material-ui/core/AccordionDetails';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import axios from "axios";
import ListItemText from '@material-ui/core/ListItemText'

import IconButton from '@material-ui/core/IconButton';
import EditIcon from '@material-ui/icons/Edit';
import { useNavigate } from "react-router-dom";

export const Review = ({ formData, navigation }) => {
    const { go } = navigation;
    const {
        eventName,
        members,
        date,
        roles
    } = formData;

    const handleClick = async () => {

        const data = {
            creatorName: "Roy",
            eventName: eventName,
            bookingDate: date,
            bookingVenue: "venue",
            peopleInvolved: members[0]
        }

        await axios.post("http://localhost:5001/api/eventOrder", data)
            .then(response => {
                navigate("/socials", { replace: true })
            })
            .catch(err => console.log(err));

    }

    const navigate = useNavigate();

    return (
        <>
            <div className="form-div" onClick={() => navigate('/event', { replace: true })}>
                <i className='fas fa-long-arrow-alt-left'></i>
            </div>
            <div className="form">
                <div className="eve">
                    <Container maxWidth='sm'>
                        <h3>Review</h3>
                        <RenderAccordion summary="Event Name" go={go} details={[
                            { 'Event Name': eventName },
                        ]} />
                        <RenderAccordion summary="Event Date" go={go} details={[
                            { 'Event Date': date },
                        ]} />
                        <RenderAccordion summary="Event Venue" go={go} details={[
                            { 'Event Venue': "Auditorium" },
                        ]} />
                        <Button
                            color="primary"
                            variant="contained"
                            style={{ marginTop: '1.5rem' }}
                            onClick={() => handleClick()}
                        >
                            Submit
                        </Button>

                    </Container>
                </div>
            </div>
        </>
    );
};

export const RenderAccordion = ({ summary, details, go }) => (
    <Accordion>
        <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
        >{summary}</AccordionSummary>
        <AccordionDetail>
            <div>
                {details.map((data, index) => {
                    const objKey = Object.keys(data)[0];
                    const objValue = data[Object.keys(data)[0]];

                    return <ListItemText key={index}>{`${objKey}: ${objValue}`}</ListItemText>

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