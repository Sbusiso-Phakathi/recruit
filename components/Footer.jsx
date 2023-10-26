import React from 'react';
import style from '../styles/Footer.module.css';
export default function Navigation() {
    return (
        <div className={`container ${style.footer}`}>
            <div className="row">
                <div className="col-sm-12 sticky-md-bottom">
                    <div className={style.square}>Shaper</div>
                </div>
            </div>
        </div>
    );
}
