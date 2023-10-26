import Head from 'next/head';
import HomePage from '../components/home/Home.jsx';
import styles from '../styles/Home.module.css';

export default function Home() {
    return (
        <>
            <div className={styles.container}>
                <Head>
                    <title>Shaper - recruitment</title>
                    <meta
                        name="description"
                        content="shaper learner recruitment"
                    />
                    <link rel="icon" href="/favicon.ico" />
                </Head>
            </div>
            <HomePage />
        </>
    );
}
