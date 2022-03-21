import React from "react";
import Container from "@material-ui/core/Container";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import "../Form.css";
import { useNavigate } from "react-router-dom";

export const EventName = ({ formData, setForm, navigation }) => {
    const { eventName } = formData;

    const navigate = useNavigate();

    return (
        <>
            <div className="form-div" onClick={() => navigate('/event', { replace: true })}>
                <i className='fas fa-long-arrow-alt-left'></i>
            </div>
            <div className="form">

                <div className="eve">
                    <Container maxWidth="xs">
                        <div className="Event-heading">Enter a Name for the Event</div>
                        <TextField
                            label="Event Name"
                            name="firstName"
                            value={eventName}
                            onChange={(e) => setForm({
                                target: {
                                    name: 'eventName',
                                    value: e.target.value
                                }
                            })}
                            margin="normal"
                            variant="outlined"
                            autoComplete="off"
                            fullWidth
                        />
                        {eventName != "" &&
                            <Button
                                variant="contained"
                                fullWidth
                                color="primary"
                                style={{ marginTop: "1rem" }}
                                onClick={() => navigation.next()}
                            >
                                Next
                            </Button>
                        }
                    </Container>
                </div>
            </div>
        </>
    );
};