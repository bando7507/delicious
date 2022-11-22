import React, { useState} from 'react';
import styled from 'styled-components';
import { FaSearch } from 'react-icons/fa';

import { useNavigate } from 'react-router-dom';


const Search = () => {

    const [input, setInput ] = useState('')
    const navigate = useNavigate()

    const handleSubmit = (e) =>{
        e.preventDefault()
        navigate('/searched/' + input)
    }

    return (
        <FormStyle onSubmit={handleSubmit}>
            <div>
                <FaSearch />
                    <input type="text" value={input} onChange={(e) =>{ setInput(e.target.value) }} />  
            </div>
        </FormStyle>
    );
};

const FormStyle = styled.form`
    position: relative;
    width: 100%;
    display: flex;
    justify-content: center;

    input{
        border: none;
        background: linear-gradient(43deg, #494949, #313131);
        color: #fff;
        font-size: 1.5rem;
        border-radius: 1rem;
        outline: none;
        padding: .5rem 2rem;
    }

    svg{
        position: absolute; 
        top: 50%;
        /* left: .5rem; */
        transform: translateY(-50%);
        color: #fff;
    }
`

export default Search;