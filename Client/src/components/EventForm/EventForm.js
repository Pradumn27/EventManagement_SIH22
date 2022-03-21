import React from "react";
import { useForm, useStep } from "react-hooks-helper";
import { EventName } from "./stepForm/EventName";
import { SelectMember } from "./stepForm/SelectMember";
import { EventDate } from "./stepForm/EventDate";
import { Review } from "./stepForm/Review";
import { SelectRoles } from "./stepForm/SelectRoles";
import "./Form.css"


const defaultData = {
    eventName: "",
    members: [],
    roles: [],
    date: "",
};

const steps = [
    { id: "names" },
    { id: "selectMember" },
    { id: "selectRoles" },
    { id: "eventDate" },
    { id: "review" }
];

export const EventForm = () => {
    const [formData, setForm] = useForm(defaultData);
    const { step, navigation } = useStep({
        steps,
        initialStep: 0,
    });

    const props = { formData, setForm, navigation };

    switch (step.id) {
        case "names":
            return <EventName {...props} />;
        case "selectMember":
            return <SelectMember {...props} />;
        case "selectRoles":
            return <SelectRoles {...props} />;
        case "eventDate":
            return <EventDate {...props} />;
        case "review":
            return <Review {...props} />;
    }

    return (
        <div>
            <h1>Multi step form</h1>
        </div>
    );
};