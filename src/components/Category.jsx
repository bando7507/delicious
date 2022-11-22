import React from 'react';
import { FaHamburger, FaPizzaSlice } from 'react-icons/fa'
import { GiFastNoodles, GiChopsticks } from 'react-icons/gi'
import { NavLink } from 'react-router-dom';
import  styled from 'styled-components'
const Category = () => {
    return (
        <List>
            <Slink to={'/cuisine/Italian'}>
                <FaPizzaSlice />
                <h4>Italian</h4>
            </Slink>
            <Slink to={'/cuisine/American'}>
                <FaHamburger />
                <h4>American</h4>
            </Slink>
            <Slink to={'/cuisine/Thai'}>
                <GiFastNoodles />
                <h4>Thai</h4>
            </Slink>
            <Slink to={'/cuisine/Japanese'}>
                <GiChopsticks />
                <h4>Japaness</h4>
            </Slink>
        </List>
    );
};


const List = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 2rem 0;
`

const Slink = styled(NavLink)`
    display: flex;
    align-items: center;
    flex-direction: column;
    justify-content: center;
    margin-right: 2rem ;
    gap: .5rem;
    width: 5rem;
    height: 5rem;
    background: linear-gradient(43deg, #494949, #313131);
    border-radius: 50%;
    transform: scale(.8);

    h4{
        color: #fff;
        font-size: .8rem;
    }

    svg{
        color: #FFF;
        font-size: 1.5rem;
    }

    &.active{
        background: linear-gradient(43deg, #f27121, #e94057);

        h4{
        color: #fff;
        font-size: .8rem;
        }

        svg{
            color: #FFF;
            font-size: 1.5rem;
        }
    }
`

export default Category;