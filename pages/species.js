import React from 'react';
import Head from "next/head";
import SpeciesList from '../components/species/SpeciesList';

export const getServerSideProps = async () => {
    const URL = process.env.API_URL + process.env.SPECIES_ENTITY;
    const res = await fetch(URL);
    const data = await res.json();

    return {
        props: {data: data}
    }
}

const Species = ({ data }) => {
    return (
        <>
            <Head>
                <title>Species | Star Wars Dashboard</title>
            </Head>
            <SpeciesList data={data} />
        </>
    );
};

export default Species;
