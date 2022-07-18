import React from 'react';
import VehicleList from '../components/vehicles/VehicleList';

export const getServerSideProps = async () => {
    const URL = process.env.API_URL + process.env.VEHICLES_ENTITY;
    const res = await fetch(URL);
    const data = await res.json();

    return {
        props: {data: data}
    }
}

const Vehicles = ({ data }) => {
    return (
        <VehicleList data={data} />
    );
};

export default Vehicles;
