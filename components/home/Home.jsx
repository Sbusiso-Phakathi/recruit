// import Head from 'next/head';
// import Image from 'next/image';
// import Link from 'next/link';
// import React from 'react';
// import style from '../../styles/Home.module.css';

// const HomePage = () => {
//     return (
//         <>
//             <Head>
//                 <title>Shaper</title>
//             </Head>

//             <div className={`${style.content} container mt-5`}>
//                 <div className="row">
//                     <section className="col-md-8">
//                         <div className="about__shaper">
//                             <header>
//                                 <h1 className="fw-bolder fs-3">
//                                     What is Shaper all about?
//                                 </h1>
//                             </header>
//                             <div className="summary mt-4">
//                                 <p className="small">
//                                     Shaper, formally{' '}
//                                     <span className="fw-bold">
//                                         The Digital Academy
//                                     </span>
//                                     , focuses on creating innovative digital
//                                     products in Africa.
//                                 </p>
//                                 <p className="small">
//                                     Launched in response to a frustrating lack
//                                     of digital skills on the continent, their
//                                     vision is to create opportunities for youth
//                                     through incentive-based learning with
//                                     strategic corporate partners who share a
//                                     common vision.
//                                 </p>
//                                 <p className="small">
//                                     Interns learn practical, hands-on skills
//                                     that are needed in the real world whilst
//                                     building commercial facing products via a
//                                     rapid internship programme.
//                                 </p>
//                             </div>
//                         </div>
//                     </section>
//                     <section className="col-md-4">
//                         <Image
//                             src="/images/shaper__lady.png"
//                             priority={true}
//                             width={300}
//                             height={400}
//                             alt="Shaper ambassador lady"
//                         />
//                     </section>
//                 </div>
//                 <div className="row mt-5">
//                     <div className="cta col-sm-12">
//                         <p className="text-center fw-bolder fst-italic">
//                             <span className={style.quote}>&ldquo;</span> Join us
//                             in helping bring the world&apos;s creative ideas to
//                             life
//                             <span className={style.quote}>&ldquo;</span>
//                         </p>
//                     </div>
//                     <div className="join text-center col-sm-12 mt-4 mb-5">
//                         <button className={style.btn__join}>
//                             <Link className={style.button__link} href="/apply">
//                                 join shaper
//                             </Link>
//                         </button>
//                     </div>
//                 </div>
//             </div>
//         </>
//     );
// };

// // export default HomePage;
'use client'

// import styled from '@emotion/styled';
import getConfig from 'next/config';
import Router from 'next/router';
import { setCookie } from 'nookies';
import { useState } from 'react';
import { Box } from "reflexbox";

const { publicRuntimeConfig } = getConfig();

// axios.get('http://localhost:1337/api/teamleaders/1').then(response => {
//   console.log(response.data[0]);
// });

fetch('http://localhost:1337/api/teamleaders/1', {
  method: 'GET',
  headers: {
    'Content-Type': 'application/json',
  },
})
  .then(response => response.json())
  .then(data => console.log(data));


function Login() {
    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')

    async function handleLogin() {
        const loginInfo = {
            identifier: username,
            password: password
        }

        const login = await fetch('http://localhost:3006/auth/local/User', {
            method: "POST",
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                identifier: "phaks323@gmail.com",
                password: "Letsdoit!"
            })
        })
        console.log({BODY: JSON.stringify(loginInfo)})
        // Router.push('/apply')
        const loginResponse = await login.json();
        
        setCookie(null, 'jwt', loginResponse.jwt , {
            maxAge: 30 * 24 * 60 * 60,
            path: '/',
        })

        Router.push('/apply')
    }

	return (
		<>
                <Box variant="container">
                    <Box as="h2" my={40}>
                        You need to login to access this page
                    </Box>

                    <form>
                        <input type="email" onChange={e => setUsername(e.target.value) } value={username} /><br />
                        <input type="password" onChange={e => setPassword(e.target.value) } value={password} /><br />
                        <button type="button" onClick={() => handleLogin() }>Login</button>
                    </form>
                </Box>
		</>
	);
}

// const LoginStyled = styled.div`
//     input {
//         padding: 10px;
//         margin-bottom: 20px;
//         border: 1px solid #cccccc;
//         border-radius: 4px;
//     }
// `

export default Login;

// 'use client';

// import { signIn } from 'next-auth/react';
// import { useRouter } from 'next/navigation';
// import { FormEvent } from 'react';

// export default function Form() {
//   const router = useRouter();
//   const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
//     e.preventDefault();
//     const formData = new FormData(e.currentTarget);
//     const response = await signIn('credentials', {
//       email: formData.get('email'),
//       password: formData.get('password'),
//       redirect: false,
//     });

//     console.log({ response });
//     if (!response?.error) {
//       router.push('/');
//       router.refresh();
//     }
//   };
//   return (
//     <form
//       onSubmit={handleSubmit}
//       className="flex flex-col gap-2 mx-auto max-w-md mt-10"
//     >
//       <input
//         name="email"
//         className="border border-black text-black"
//         type="email"
//       />
//       <input
//         name="password"
//         className="border border-black  text-black"
//         type="password"
//       />
//       <button type="submit">Login</button>
//     </form>
//   );
// }