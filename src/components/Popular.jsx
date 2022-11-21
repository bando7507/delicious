import React, { useEffect, useState } from 'react';
import styled from 'styled-components';

const Popular = () => {

    const [popular, setPopular] = useState([])

    useEffect(() =>{
        getPolular()
    },[])

    const getPolular = async () =>{
        // const api = await fetch(`https://api.spoonacular.com/recipes/random??apiKey=${process.env.API_KEY}&number=1`)
        const api = await fetch(`https://api.spoonacular.com/recipes/random?apiKey=af0b6eb0e79946769ba14eddd70ddb92&number=9`)

        const data = await api.json()
        console.log(data);
        setPopular(data.recipes)
    }
    return (
        <div>
           {popular.map((el, id) =>(
            <Wrapper>
                <h3> Popular Picks</h3>
            <p key={id}>
                {/* {el.title} */}
            </p>
            </Wrapper>

           ))

           } 
        </div>
    );
};

const Wrapper = styled.div`
 margin: 4rem 0rem;
`;

export default Popular;