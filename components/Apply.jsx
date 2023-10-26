import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import style from '../styles/Apply.module.css';

const Apply = () => {
    const programs = [
        {
            name: 'Data Science',
            subheader: 'Data Science',
            description:
                ' Some quick example text to build on the card title and make up the bulk of the cards content.',
            link: '/data-science',
        },
        {
            name: 'Full Stack',
            subheader: 'Full Stack',
            description:
                ' Some quick example text to build on the card title and make up the bulk of the cards content.',
            link: '/fs',
        },
        {
            name: 'Full Stack PWD',
            subheader: 'Full Stack PWD',
            description:
                ' Some quick example text to build on the card title and make up the bulk of the cards content.',
            link: '/fs-pwd',
        },
        {
            name: 'Everyday Banking',
            subheader: 'Everyday Banking',
            description:
                ' Some quick example text to build on the card title and make up the bulk of the cards content.',
            link: '/eb',
        },
    ];
    return (
        <div className="container mb-5">
            <div className="row">
                <section className="col-md-8">
                    <header>
                        <h1 className="fw-bold fs-2">
                            Who does shaper exist for?
                        </h1>
                        <div className="shaper__for mt-4">
                            <p className="small">
                                Shaper exists for two groups of people - the
                                employees and the employers.
                            </p>
                            <p className="small">
                                With a focus on critical and scarce skills,
                                Shaper offers companies across industries the
                                opportunity to invest in specific and deliberate
                                training and development of potential employees.
                                Through tailored internship programmes built to
                                meet the needs of each client’s specific
                                situation, Shaper is able to create a pipeline
                                of up-skilled talent that can be seamlessly
                                integrated into the client’s company, no matter
                                how big or small.
                            </p>
                            <p className="small">
                                But Shaper doesn’t just focus on skills. A large
                                component of Shaper’s training is ensuring
                                interns are work-ready following completion of
                                their internship. This involves the development
                                of soft skills that are so vital in work
                                environments and help interns to exceed employer
                                expectations.
                            </p>
                            <p className="small">
                                Shaper recognises that great talent exists
                                within Africa while remaining cognisant of the
                                vast complexities that lie within the education
                                systems across the continent.
                            </p>
                            <p className="small">
                                There are great opportunities out there and even
                                greater people ready to meet them. Shaper brings
                                the two together.
                            </p>
                        </div>
                    </header>
                </section>
                <section className="col-md-4">
                    <Image
                        src="/images/shaper__guy.png"
                        priority={true}
                        width={300}
                        height={400}
                        alt="Shaper ambassador lady"
                    />
                </section>
            </div>
            <div className="program mt-5">
                <div className={style.leftSquare}></div>
                <h1
                    className="fw-bold text-center fs-4"
                    style={{ color: '#FF820A' }}
                >
                    Take Your First Step: Pick the Program That Fits You Best
                </h1>
                <p className="text-center text-secondary">Your future awaits</p>

                <div
                    className={`float-md-end d-none d-md-block d-lg-block ${style.rightSquare}`}
                ></div>
            </div>
            <div className="row mt-5">
                {programs &&
                    programs.map((item, index) => (
                        <div className="col-md-6 col-lg-3" key={index}>
                            <div className="card border-0">
                                <div className="card-body">
                                    <h5 className="card-title">{item.name}</h5>
                                    <h6 className="card-subtitle mb-2 text-body-secondary">
                                        {item.subheader}
                                    </h6>
                                    <p className="card-text">
                                        {item.description}
                                    </p>
                                    <div className="join col-sm-12 mt-4 mb-5">
                                        <button className={style.btn__join}>
                                            <Link
                                                className={style.button__link}
                                                href="/apply"
                                            >
                                                Select program
                                            </Link>
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
            </div>
        </div>
    );
};

export default Apply;
