import React from 'react'
import ButtonCartCount from '../Common/ButtonCartCount';
import Menu from '../Common/Menu';
import { menuItemsData } from '../Common/Menu/data';
import { useNavigate } from 'react-router-dom';

function Dinner() {
    const navigate = useNavigate();
    return (
        <div className='container'>
            <div>
                <h1 className='orders-heading'>Dinner Menu
                    <button onClick={() => navigate('/menu', { replace: true })}>
                        <i className='fas fa-long-arrow-alt-left'></i>
                    </button>
                </h1>
                <Menu list={menuItemsData} />
                <ButtonCartCount />
            </div>
        </div>
    )
}

export default Dinner