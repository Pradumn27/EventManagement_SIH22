import React from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import EmptyCart from '../../Cart/EmptyCart'
import Menu from '../../Common/Menu';
import axios from "axios";
import {
    selectCartItems,
    selectCartItemsCount,
    selectCartTotal,
} from '../../redux/cart/cart.selector';
import './styles.css';
import Logo from '../../Common/Logo';
import { useStateValue } from "../../../../StateReducer/StateProvider"
import { useNavigate } from 'react-router-dom';

const Cart = ({ cartCount, cartList, cartTotal }) => {

    const [{ user },] = useStateValue();
    const navigate = useNavigate();
    const handleClick = () => {
        const a = [{}];
        cartList.map(car => {
            a.push({
                orderItem: car.name,
                quantity: car.quantity
            })
        })
        const data = {
            creatorName: user.username,
            eventName: "event",
            eventDate: "eventDate",
            eventVenue: "lokhandwala",
            orderDetails: a
        }
        axios.post("http://localhost:5001/api/canteenOrder", data)
            .catch(err => console.log(err));

        navigate("/order-confirmed", { replace: true });
    }


    return (
        <>
            <div className='container'>
                <div className='cart-header'>
                    <Logo />
                </div>
                {cartCount === 0 ? (
                    <EmptyCart />
                ) : (
                    <div className='orders'>
                        <h1 className='orders-heading'>Your Orders</h1>
                        <div className='orders-menu'>
                            <Menu list={cartList} />
                        </div>
                        <h3 className='orders-total'>Your Total ${cartTotal}</h3>
                        <div className='submit-order' onClick={() => handleClick()}>Submit Order</div>
                    </div>
                )}
            </div>
        </>
    );
};

const mapStateToProps = createStructuredSelector({
    cartCount: selectCartItemsCount,
    cartList: selectCartItems,
    cartTotal: selectCartTotal,
});

export default connect(mapStateToProps)(Cart);