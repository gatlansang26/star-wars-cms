import React from 'react';
import Head from 'next/head'
import TopNavBar from "./TopNavBar";
import LeftNavBar from "./LeftNavBar";

const Layout = ({ children }) => {
    return (
        <>
            <Head>
                <meta name="description" content="Star Wars Dashboard" />
                <meta name="viewport" content="width=device-width, initial-scale=1.0" />
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <TopNavBar />
            <LeftNavBar />
            <main className="mt-5 pt-3">
                <div className="container-fluid">
                    { children }
                </div>
            </main>
        </>
    );
};

export default Layout;
