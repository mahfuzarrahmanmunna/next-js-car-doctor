"use client"
import React from 'react';
import { FaFacebookF, FaLinkedinIn, FaGoogle } from 'react-icons/fa';
import { signIn } from "next-auth/react"


const LoginForm = () => {
    const handleSubmit = async (e) => {
        e.preventDefault();
        const form = e.target;
        // Add login logic here
        const email = form.email.value;
        const password = form.password.value;
        // console.log({ email, password });
        try {
            await signIn("credentials", { email, password, callbackUrl: '/' });
            // router.push("/")
        } catch (error) {
            console.log(error);
        }
    };

    return (
        <>
            <h2 className="text-3xl font-semibold text-gray-800 mb-6">Login</h2>
            <form className="space-y-4" onSubmit={handleSubmit}>
                <div>
                    <label className="block mb-1 text-sm font-medium">Email</label>
                    <input
                        type="email"
                        name='email'
                        placeholder="Your email"
                        className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-orange-500"
                    />
                </div>
                <div>
                    <label className="block mb-1 text-sm font-medium">Password</label>
                    <input
                        type="password"
                        name='password'
                        placeholder="Your password"
                        className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-orange-500"
                    />
                </div>
                <button
                    type="submit"
                    className="w-full bg-orange-600 text-white py-2 rounded-md font-semibold hover:bg-orange-700 transition"
                >
                    Sign In
                </button>
            </form>

            <div className="my-6 text-center text-gray-500">Or Sign In with</div>
            <div className="flex justify-center space-x-4 mb-6">
                <button className="bg-gray-100 p-3 rounded-full hover:bg-gray-200 transition">
                    <FaFacebookF className="text-blue-600 text-xl" />
                </button>
                <button className="bg-gray-100 p-3 rounded-full hover:bg-gray-200 transition">
                    <FaLinkedinIn className="text-blue-500 text-xl" />
                </button>
                <button className="bg-gray-100 p-3 rounded-full hover:bg-gray-200 transition">
                    <FaGoogle className="text-red-500 text-xl" />
                </button>
            </div>

            <p className="text-center text-sm">
                Don’t have an account?{" "}
                <a href="/register" className="text-orange-600 hover:underline">
                    Sign Up
                </a>
            </p>
        </>
    );
};

export default LoginForm;
