import Head from 'next/head';
import React from 'react';
import Apply from '../../components/Apply';
import style from '../../styles/Apply.module.css';

const index = () => {
    return (
        <>
            <Head>
                <title>Application</title>
            </Head>
            <div className={`${style.more__info}`}>
                <Apply />
            </div>
        </>
    );
};

export default index;
