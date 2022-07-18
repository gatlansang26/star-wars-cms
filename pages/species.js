import React from 'react';
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
        <SpeciesList data={data} />
    );
};

export default Species;
