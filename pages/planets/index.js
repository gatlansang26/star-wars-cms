import React from 'react';
import PlanetList from '../../components/planets/PlanetList';

export const getServerSideProps = async () => {
    const URL = process.env.API_URL + process.env.PLANETS_ENTITY;
    const res = await fetch(URL);
    const data = await res.json();

    return {
        props: {data: data}
    }
}

const Planets = ({ data }) => {
    return (
        <PlanetList data={data} />
    );
};

export default Planets;
