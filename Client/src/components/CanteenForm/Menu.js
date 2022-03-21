import React from 'react'
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';
import "./Menu.css"
import { useNavigate } from 'react-router-dom';
import { Link } from 'react-router-dom';
import "../CanteenRole/CanteenRole.css"

function Menu() {

    return (
        <>
            <nav id="navbar">
                <Link to="/roles" >Home</Link>
            </nav>
            <div className='Menu'>
                <h1>Please select one of the following</h1>
                <div className='menu-cards'>
                    <FoodCard foodType="Breakfast" imageLink={"images/breakfast.jpg"} path={"/menu/breakfast"} />
                    <FoodCard foodType="Lunch" imageLink={"images/lunch.jpg"} path={"/menu/lunch"} />
                    <FoodCard foodType="Dinner" imageLink={"images/dinner.jpg"} path={"/menu/dinner"} />
                </div>
            </div>
        </>
    )
}

const FoodCard = ({ foodType, imageLink, path }) => {
    return (
        <Link to={path} style={{ textDecoration: "none" }}>
            <Card sx={{ width: 300 }} >
                <CardActionArea >
                    <CardMedia
                        component="img"
                        height="250"
                        width="300"
                        image={imageLink}
                        alt="green iguana"
                    />
                    <CardContent>
                        <Typography variant="h4" color="primary" align="center">
                            {foodType}
                        </Typography>
                    </CardContent>
                </CardActionArea>
            </Card>
        </Link>
    )
}

export default Menu;