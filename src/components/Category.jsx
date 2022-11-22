import React from 'react';
import { FaHamburger, FaPizzaSlice } from 'react-icons/fa'
import { GiFastNoodles, GiChopsticks } from 'react-icons/gi'
import { NavLink } from 'react-router-dom';
import  styled from 'styled-components'
const Category = () => {
    return (
        <List>
            <NavLink to={'/cuisine/Italian'}>
                <FaPizzaSlice />
                <h4>Italian</h4>
            </NavLink>
            <NavLink to={'/cuisine/American'}>
                <FaHamburger />
                <h4>American</h4>
            </NavLink>
            <NavLink to={'/cuisine/Thai'}>
                <GiFastNoodles />
                <h4>Thai</h4>
            </NavLink>
            <NavLink to={'/cuisine/Japanese'}>
                <GiChopsticks />
                <h4>Japaness</h4>
            </NavLink>
        </List>
    );
};


const List = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 2rem 0;
`

export default Category;