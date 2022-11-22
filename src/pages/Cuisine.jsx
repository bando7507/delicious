import React, { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import styled from 'styled-components';

const Cuisine = () => {


    const [cuisine, setCuisine] = useState([])

    let params = useParams()
    const getCuisine = async (names)=>{
        const api2 = await fetch(`https://api.spoonacular.com/recipes/complexSearch?apiKey=687263c096d34c3faaf65f835001563d&cuisine=${names}`)

        const data = await api2.json()
        setCuisine(data.results)
        console.log(cuisine);
    }

    useEffect(() =>{
        getCuisine(params.type)
    }, [params.type])


    return (
        <Grid>
            {cuisine.map((el) =>(
                    <Card key={el.id}>
                        <img src={el.image} alt="" />
                        <h4>{el.title}</h4>
                    </Card>
            ))}
        </Grid>
    );
    
}
    const Grid = styled.div`
        display: grid;
        grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
        gap: 3rem;
    `

    const Card = styled.div`
        width: 100%;
        border-radius: 2rem;
        border-radius: 2rem;
        overflow: hidden;

        img{
            width: 100%;
            border-radius: 2rem;
            object-fit: contain;
        }

        a{
            text-decoration: none;
        }

        h4{
            text-align: center;
            padding: 1rem;
        }
    `

export default Cuisine;