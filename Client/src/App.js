import React from 'react'
import "./App.css"
import { Routes, Route, BrowserRouter } from "react-router-dom";
import { EventForm } from './components/EventForm/EventForm';
import Menu from './components/CanteenForm/Menu';
import Breakfast from './components/CanteenForm/Components/Breakfast';
import Lunch from './components/CanteenForm/Components/Lunch';
import Dinner from './components/CanteenForm/Components/Dinner';
import Cart from './components/CanteenForm/pages/Cart';
import CanteenRole from './components/CanteenRole/CanteenRole';
import FirstPage from './FirstPage';
import Event from './components/EventForm/Event';
import Roles from './components/Roles/RolesAssigned';
import OrderConfirmed from "./components/CanteenForm/OrderConfirmed/OrderConfirmed"
import Socials from './components/Socials/Socials';
import UpcomingEvents from './components/UpcomingEvents/UpcomingEvents';

function App() {
    return (
        <BrowserRouter>
            <Routes>
                <Route exact path="/canteen" element={<CanteenRole />} />
                <Route exact path="/" element={<FirstPage />} />
                <Route exact path="/menu" element={<Menu />} />
                <Route exact path="/menu/cart" element={<Cart />} />
                <Route exact path="/menu/breakfast" element={<Breakfast />} />
                <Route exact path="/menu/lunch" element={<Lunch />} />
                <Route exact path="/menu/dinner" element={<Dinner />} />
                <Route exact path="/event" element={<Event />} />
                <Route exact path="/roles" element={<Roles />} />
                <Route exact path="/eventForm" element={<EventForm />} />
                <Route exact path="/menu/dinner" element={<Dinner />} />
                <Route exact path="/order-confirmed" element={<OrderConfirmed />} />
                <Route exact path="/upcomingEvents" element={<UpcomingEvents />} />
                <Route exact path="/socials" element={<Socials />} />
            </Routes>
        </BrowserRouter>
    )
}

export default App