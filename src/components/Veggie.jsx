import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import { Splide, SplideSlide } from '@splidejs/react-splide';
import { Link } from 'react-router-dom';
import '@splidejs/react-splide/css';

const Veggie = () => {

    const [veggie, setVeggie] = useState([])

    useEffect(() =>{
        getPolular()
    },[])

    const getPolular = async () =>{
        // const api = await fetch(`https://api.spoonacular.com/recipes/random??apiKey=${process.env.API_KEY}&number=1`)
        const api = await fetch(`https://api.spoonacular.com/recipes/random?apiKey=687263c096d34c3faaf65f835001563d&number=9`)

        const data = await api.json()
        // console.log(data);
        setVeggie(data.recipes)
    }
    
    return (
        <div>
            <Wrapper >
                <h3>Our Vegetarian Picks</h3>
                <Splide options = {{
                    perPage: 3,
                    gap: "1.5rem",
                    arrows: false,
                    pagination: false,
                    drag: "free"
                }}>
                    {veggie.map((el) =>(
                        <SplideSlide key={el.id}>
                        <Card>
                            <Link to={'/recipes/' + el.id}>                            
                                <p>{el.title}</p>
                                    <img src={el.image} alt={el.title} />
                                <Gradient />
                            </Link>
                        </Card>
                        </SplideSlide>
                    ))} 
                </Splide>
            </Wrapper>
        </div>
    );
};

const Wrapper = styled.div`
 margin: 4rem 0rem;
`;

const Card = styled.div`
    min-height: 13rem;
    border-radius: 2rem;
    overflow: hidden; 
    position: relative;

 img{
    position: absolute;
    left: 0;
    width: 100%;
    height: 100%;
    border-radius: 2rem;
    object-fit: cover;
 }

 p{
    position: absolute;
    bottom: 0;
    left: 50%;
    z-index: 10;
    color: #fff;
    transform: translateX(-50%);
    text-align: center;
    font-size: 1rem;
    display: flex;
    align-items: center;
    justify-content: center;
    }
`

const Gradient = styled.div`
    position: absolute;
    width: 100%;
    height: 100%;
    z-index: 3;
    background: linear-gradient(rgba(0, 0, 0, 0), rgba(0, 0, 0, 0.5));
`

export default Veggie;