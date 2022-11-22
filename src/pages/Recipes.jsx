import React, { useEffect, useState } from 'react';

import { useParams } from 'react-router-dom';

const Recipes = () => {

    const [details, setDetail] = useState([])
    const params = useParams()

    const fetchDetails = async () =>{
        const api = await fetch(`https://api.spoonacular.com/recipes/${params.id}/information?apiKey=687263c096d34c3faaf65f835001563`)

        const data = await api.json()
        setDetail(data.results)
    }

    useEffect(()=>{
        fetchDetails()
    },[])
    return (
        <div>
            ssss
        </div>
    );
};

export default Recipes;