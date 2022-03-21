import React, { useState, useEffect } from "react";
import Container from "@material-ui/core/Container";
import Button from "@material-ui/core/Button";
import { MuiPickersUtilsProvider, KeyboardTimePicker, KeyboardDatePicker } from "@material-ui/pickers"
import { Grid } from "@material-ui/core";
import DateFnsUtils from "@date-io/date-fns";
import { useNavigate } from "react-router-dom";

export const EventDate = ({ formData, setForm, navigation }) => {
    const [selectedDate, setSelectedDate] = useState();

    const handleDateChange = (date) => {
        setSelectedDate(date);
        setForm({
            target: {
                name: 'date',
                value: date
            }
        })
    }

    const navigate = useNavigate();

    return (
        <>
            <div className="form-div" onClick={() => navigate('/event', { replace: true })}>
                <i className='fas fa-long-arrow-alt-left'></i>
            </div>
            <div className="form">

                <div className="eve">
                    <Container maxWidth="xs">
                        <div className="Event-heading">Choose the event date</div>
                        <MuiPickersUtilsProvider utils={DateFnsUtils}>
                            <Grid container justifyContent="space-around">
                                <KeyboardDatePicker
                                    disableToolbar
                                    variant="inline"
                                    format="MM/dd/yy"
                                    margin="normal"
                                    id="date-picker"
                                    label="Date-Picker"
                                    value={selectedDate}
                                    onChange={handleDateChange}
                                    KeyboardButtonProps={{
                                        'aria-label': 'change date'
                                    }}
                                    disablePast
                                />
                            </Grid>
                        </MuiPickersUtilsProvider>
                        <div className="Event-buttons">
                            <Button
                                color="secondary"
                                variant="contained"
                                style={{ marginRight: "1rem" }}
                                onClick={() => navigation.previous()}
                            >
                                Back
                            </Button>
                            {(selectedDate != undefined) &&
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
    );
};