import React from 'react';
import Head from "next/head";
import PeopleList from '../components/people/PeopleList';

export const getServerSideProps = async () => {
    const URL = process.env.API_URL + process.env.PEOPLE_ENTITY;
    const res = await fetch(URL);
    const data = await res.json();

    return {
        props: {data: data}
    }
}

const People = ({ data }) => {
    return (
        <>
            <Head>
                <title>People | Star Wars Dashboard</title>
            </Head>
            <PeopleList data={data} />
        </>
    );
};

export default People;
