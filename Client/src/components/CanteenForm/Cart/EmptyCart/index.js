import React from 'react';
import { useNavigate } from 'react-router-dom';
import './styles.css';

const EmptyCart = () => {
    const navigate = useNavigate();
    return (
        <div className='emptyCart'>
            <img src='https://merchlist.co/assets/emptycart.png' alt='' />
            <button onClick={() => navigate('/menu', { replace: true })}>
                <i className='fas fa-long-arrow-alt-left'></i> Select some items
            </button>
        </div>
    );
};

export default EmptyCart;