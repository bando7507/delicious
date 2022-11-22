import React, { useEffect, useState } from 'react';

import { useParams } from 'react-router-dom';
import styled from 'styled-components';

const Recipes = () => {

    const [details, setDetail] = useState([])
    const [active, setActive] =useState('Instruction')
    const params = useParams()

    const fetchDetails = async () =>{
        const api = await fetch(`https://api.spoonacular.com/recipes/${params.id}/information?apiKey=${process.env.REACT_APP_API_KEY}`)

        const data = await api.json()
        setDetail(data)
        console.log(details);
    }

    useEffect(()=>{
        fetchDetails()
    },[params.id])
    return (
        <DetailWrapper>
            <div>
                <h2>{details.title}</h2>
                <img src={details.image} alt="" />
            </div>
            <Info>
                <Row>
                    <Button className={active=== 'Instruction' ? 'active' : ''} onClick={() => { setActive('Instruction')}}>Instruction</Button>
                    <Button className={active=== 'Ingredients' ? 'active' : ''} onClick={() => { setActive('Ingredients')}}>Ingredients</Button>
                </Row>

                {active=== 'Instruction' &&
                <div>
                    <h3 dangerouslySetInnerHTML={{__html: details.summary}} />
                    <h3 dangerouslySetInnerHTML={{__html: details.instructions}} className="ele" />
                </div>
                }

                {active === 'Ingredients' &&
                <ul>
                    {details.extendedIngredients.map((el) =>(
                        <li key={el.id}>{el.original}</li>
                    ))}
                </ul>
                }

                

           
            </Info>
        </DetailWrapper>
    );
};

const DetailWrapper = styled.div`
    margin-top: 10rem;
    margin-bottom: 5rem;
    display: flex;

    .active{
        background: linear-gradient(43deg, #494949, #313131);
        color: #fff;
    }

    h2{
        margin-bottom: 2rem;
        
    }

    h3{
        margin-top: 2rem;
        font-size: 1rem;
        line-height: 20px;
    }

    li{
        font-size: 1rem;
        /* line-height: 2.5rem; */
    }

    ul{
        margin-top: 2rem;
    }

`
const Button = styled.button`
    padding: 1rem 2rem;
    color: #313131;
    background: #ffd;
    border: solid 2px #000;
    margin-right: 2rem;
`

const Info = styled.div`
    margin-left: 10rem;

    .ele{
        margin-top: 2rem;
        font-size: 1rem;
        line-height: 20px;
    }
    


`

const Row = styled.div`
    display: flex;
`
export default Recipes;