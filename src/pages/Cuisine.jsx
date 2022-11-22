import React, { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import styled from 'styled-components';

const Cuisine = () => {


    const [cuisine, setCuisine] = useState([])

    let params = useParams()
    const getCuisine = async (names)=>{
        const api2 = await fetch(`https://api.spoonacular.com/recipes/complexSearch?apiKey=e2982fba611a4d3f9229d8261f91d493&cuisine=${names}`)

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
                <Link>
                    <img src={el.image} alt="" />
                </Link>
            ))}
        </Grid>
    );
    
}
    const Grid = styled.div`
        display: grid;
        grid-template-columns: repeat(auto-fit, minmax(20rem, 1fr));
        grid-gap: 3rem;
    `

    const Card = styled.div`
        width: 100%;
        border-radius: 2rem;

        a{
            text-decoration: none;
        }

        h4{
            text-align: center;
            padding: 1rem;
        }
    `

export default Cuisine;