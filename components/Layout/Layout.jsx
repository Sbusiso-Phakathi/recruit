import React from 'react';
import style from '../../styles/Layout.module.css';
import Footer from '../Footer';
import Navigation from '../Navigation';

export default function Layout({ children }) {
    return (
        <div className={style.body}>
            <Navigation />
            <div className="container">{children}</div>
            <Footer />
        </div>
    );
}
