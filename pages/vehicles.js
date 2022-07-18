import React from 'react';
import Head from 'next/head';
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
        <>
            <Head>
                <title>Vehicles | Star Wars Dashboard</title>
            </Head>
            <VehicleList data={data} />
        </>
    );
};

export default Vehicles;
