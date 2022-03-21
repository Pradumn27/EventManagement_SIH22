import React, { useEffect, useState } from 'react'
import axios from 'axios'
import Sidebar from '../Sidebar/Sidebar';
import Typography from '@mui/material/Typography';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import CardHeader from '@mui/material/CardHeader';
import "./styles.css"

function UpcomingEvents() {

    const [resp, setResp] = useState([]);
    const [active, setActive] = useState(false);
    useEffect(async () => {
        await axios.get("http://localhost:5001/api/upcomingEvents")
            .then(function (response) {
                setResp(response.data);
                console.log(response.data);
            })
            .catch(function (error) {
                console.log(error);
            });
    }, [])


    return (
        <>
            <Sidebar active={active} />
            <div className={active ? "page-content p-5 active right-event" : "page-content p-5 right-event"} id="content">
                <button id="sidebarCollapse" type="button" onClick={() => setActive(!active)} className="btn btn-light bg-black rounded-pill shadow-sm px-3 mb-4"><i className="fa fa-chevron-left mr-2"></i><small className="text-uppercase font-weight-bold">Toggle</small></button>
                <div className='resp'>
                    {resp.map(resp => {
                        return (
                            <EventCard imageLink={"/images/image1.jpg"} eventName={resp.eventName} eventDate={resp.eventDate} eventVenue={resp.eventVenue} />
                        )
                    })}
                </div>


            </div>
        </>
    )
}

const EventCard = ({ eventName, imageLink, eventDate, eventVenue }) => {
    return (
        <Card sx={{ width: 300 }} >
            <CardHeader
                title={eventName}
                subheader={eventDate}
            />
            <CardMedia
                component="img"
                height="250"
                width="300"
                image={imageLink}
                alt="green iguana"
            />
            <CardContent>
                <Typography variant="body2" color="text.secondary">
                    This event celebrates the retirement of Mr. Wadiad.
                </Typography>
            </CardContent>
        </Card>
    )
}

export default UpcomingEvents