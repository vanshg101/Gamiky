// import React, { useState, useEffect } from "react";
// import { useNavigate } from "react-router-dom";
// import { useDispatch } from "react-redux";
// import { useForm } from "react-hook-form";
// import { login as authLogin } from "../store/authSlice.js";
// import authService from "../appwrite/auth";
// import "./Login.css";

// function Login() {
//   const navigate = useNavigate();
//   const dispatch = useDispatch();
//   const { register, handleSubmit, formState: { errors } } = useForm();
//   const [error, setError] = useState("");
//   const [isSignIn, setIsSignIn] = useState(true);

//   const toggle = () => {
//     setIsSignIn(!isSignIn);
//   };

//   useEffect(() => {
//     const container = document.getElementById("container");
//     if (isSignIn) {
//       container.classList.add("sign-in");
//       container.classList.remove("sign-up");
//     } else {
//       container.classList.add("sign-up");
//       container.classList.remove("sign-in");
//     }
//   }, [isSignIn]);

//   useEffect(() => {
//     const container = document.getElementById("container");
//     setTimeout(() => {
//       container.classList.add("sign-in");
//     }, 200);
//   }, []);

//   const CreateAccount = async data => {
//     console.log("CreateAccount function called", data);
//     setError("");
//     try {
//       const newUser = await authService.createAccount({
//         email: data.email,
//         password: data.password,
//         username: data.name,
//       });

//       if (newUser) {
//         console.log(newUser);
//         const userData = await authService.getCurrentUser();
//         if (userData) {
//           console.log(userData);
//           dispatch(authLogin(userData));
//           navigate("/");
//         }
//       }
//     } catch (error) {
//       setError(error.message);
//       console.error("Create account error:", error);
//     }
//   };

//   const Login = async data => {
//     setError("");
//     try {
//       const session = await authService.login(data);
//       if (session) {
//         const userData = await authService.getCurrentUser();
//         if (userData) {
//           dispatch(authLogin(userData));
//           navigate("/");
//         }
//       }
//     } catch (error) {
//       setError(error.message);
//       console.error("Login error:", error);
//     }
//   };

//   return (
//     <div id="container" className="container">
//       {/* FORM SECTION */}
//       <div className="row">
//         {/* SIGN UP */}
//         <div className="col align-items-center flex-col sign-up">
//           <div className="form-wrapper align-items-center">
//             <div className="form sign-up">
//               <form onSubmit={CreateAccount}>
//                 <div className="input-group">
//                   <i className="bx bxs-user" />
//                   <input
//                     placeholder="Enter your full name"
//                     {...register("name", { required: "Full Name is required" })}
//                   />
//                   {errors.name && <p>{errors.name.message}</p>}
//                 </div>

//                 <div className="input-group">
//                   <i className="bx bx-mail-send" />
//                   <input
//                     placeholder="Enter your email"
//                     type="email"
//                     {...register("email", {
//                       required: "Email is required",
//                       pattern: {
//                         value: /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/,
//                         message: "Invalid email address"
//                       }
//                     })}
//                   />
//                   {errors.email && <p>{errors.email.message}</p>}
//                 </div>

//                 <div className="input-group">
//                   <i className="bx bxs-lock-alt" />
//                   <input
//                     type="password"
//                     placeholder="Enter your password"
//                     {...register("password", { required: "Password is required" })}
//                   />
//                   {errors.password && <p>{errors.password.message}</p>}
//                 </div>

//                 <button type="submit">Sign up</button>
//                 <p>
//                   <span>Already have an account?</span>
//                   <b onClick={toggle} className="pointer">
//                     Sign in here
//                   </b>
//                 </p>
//               </form>
//             </div>
//           </div>
//         </div>

//         {/* SIGN IN */}
//         <div className="col align-items-center flex-col sign-in">
//           <div className="form-wrapper align-items-center">
//             <div className="form sign-in">
//               <form onSubmit={Login}>
//                 <div className="input-group">
//                   <i className="bx bxs-user" />
//                   <input
//                     placeholder="Enter your email"
//                     type="email"
//                     {...register("email", {
//                       required: "Email is required",
//                       pattern: {
//                         value: /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/,
//                         message: "Invalid email address"
//                       }
//                     })}
//                   />
//                   {errors.email && <p>{errors.email.message}</p>}
//                 </div>
//                 <div className="input-group">
//                   <i className="bx bxs-lock-alt" />
//                   <input
//                     type="password"
//                     placeholder="Enter your password"
//                     {...register("password", { required: "Password is required" })}
//                   />
//                   {errors.password && <p>{errors.password.message}</p>}
//                 </div>
//                 <button type="submit">Sign in</button>
//                 <p>
//                   <b>Forgot password?</b>
//                 </p>
//               </form>
//               <p>
//                 <span>Don't have an account?</span>
//                 <b onClick={toggle} className="pointer">
//                   Sign up here
//                 </b>
//               </p>
//             </div>
//           </div>
//         </div>
//       </div>

//       {/* CONTENT SECTION */}
//       <div className="row content-row">
//         {isSignIn ? (
//           <div className="col align-items-center flex-col">
//             <div className="text sign-in">
//               <h2>Welcome</h2>
//             </div>
//             <div className="img sign-in"></div>
//           </div>
//         ) : (
//           <div className="col align-items-center flex-col">
//             <div className="img sign-up"></div>
//             <div className="text sign-up align-items-end">
//               <h2>Join with us</h2>
//             </div>
//           </div>
//         )}
//       </div>
//     </div>
//   );
// }

// export default Login;


import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useDispatch } from "react-redux";
import { useForm } from "react-hook-form";
import { login as authLogin } from '../store/authSlice.js';
import authService from "../appwrite/auth.js"
import Input from '../components/Input.jsx';

function Login() {
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const { register, handleSubmit } = useForm();
    const [error, setError] = useState("");

    const login = async (data) => {
        setError("");
        try {
            const session = await authService.login(data);
            if (session) {
                const userData = await authService.getCurrentUser();
                if (userData) {
                    dispatch(authLogin({ userData }));
                    navigate("/");
                }
            }
        } catch (error) {
            setError(error.message);
        }
    };

    return (
        <div className='flex mr-32'>
            <div className='mx-auto mt-36 max-w-lg bg-gray-700 rounded-xl p-10 border border-black/10'>
                <h2 className="text-center text-2xl font-bold leading-tight">Sign in to your account</h2>
                <p className="mt-2 text-center text-base text-black/60">
                    Don't have an account?&nbsp;
                    <Link to="/signup" className="font-medium text-primary transition-all duration-200 hover:underline">
                        Sign Up
                    </Link>
                </p>
                {error && <p className="text-red-600 mt-8 text-center">{error}</p>}
                <form onSubmit={handleSubmit(login)} className='mt-8'>
                    <div className='space-y-5'>
                        <Input
                            label="Email: "
                            placeholder="Enter your email"
                            type="email"
                            {...register("email", {
                                required: "Email is required",
                                pattern: {
                                    value: /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/,
                                    message: "Email address must be a valid address",
                                },
                            })}
                        />
                        <Input
                            label="Password: "
                            type="password"
                            placeholder="Enter your password"
                            {...register("password", {
                                required: "Password is required",
                            })}
                        />
                        <button type="submit" className="w-36 rounded-lg h-7 text-white bg-blue-600">
                            Sign in
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
}

export default Login;