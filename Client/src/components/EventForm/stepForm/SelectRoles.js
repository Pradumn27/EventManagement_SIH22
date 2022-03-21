import React, { useEffect } from "react";
import Container from '@material-ui/core/Container';
import Button from '@material-ui/core/Button';
import ListItemText from '@material-ui/core/ListItemText'
import { Checkbox, InputLabel, MenuItem, Select } from "@material-ui/core";
import { useNavigate } from "react-router-dom";

export const SelectRoles = ({ formData, setForm, navigation }) => {
    const {
        members,
        roles
    } = formData;

    var a = Array(members.length);
    a.fill('');
    const navigate = useNavigate();

    const handleChange = (e, index) => {
        a[index] = e.target.value;
        setForm({
            target: {
                name: "roles",
                value: a
            }
        })
    }

    useEffect(() => {
        setForm({
            target: {
                name: "roles",
                value: a
            }
        })
        console.log(members)
    }, [])

    return (
        <>
            <div className="form-div" onClick={() => navigate('/event', { replace: true })}>
                <i className='fas fa-long-arrow-alt-left'></i>
            </div>
            <div className="form">
                <div className="eve">
                    <Container maxWidth='sm'>
                        <div className="Event-heading">Select Roles for the Members</div>
                        {members[0].map((data, index) => {
                            console.log(data)
                            return (
                                <div className="member">
                                    <ListItemText key={index}>{data.userName}</ListItemText>
                                    <Select
                                        labelId="demo-simple-select-label"
                                        id="demo-simple-select"
                                        label="Role"
                                        onChange={(e) => handleChange(e, index)}
                                    >
                                        <MenuItem value="none">None</MenuItem>
                                        <MenuItem value="canteen">Canteen</MenuItem>
                                    </Select>
                                </div>
                            )
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
                            {(a.length === members.length) &&
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