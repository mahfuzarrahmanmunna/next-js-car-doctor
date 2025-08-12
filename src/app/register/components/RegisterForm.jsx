"use client"

import { registerUser } from '@/app/actions/auth/registerUser';
import React from 'react';
import { FaFacebook, FaGoogle, FaLinkedin } from "react-icons/fa";

const RegisterForm = () => {
    const handleSubmit = async (e) => {
        e.preventDefault();

        const form = e.target;
        const name = form.name.value;
        const email = form.email.value;
        const password = form.password.value;

        if (!name || !email || !password) {
            alert("All fields are required.");
            return;
        }
        console.log({ name, email, password });
        await registerUser({ name, email, password });

        // Proceed with signup logic (Firebase/Auth API/etc)
    };

    return (
        <>
            <form onSubmit={handleSubmit} className="space-y-4">
                <input
                    name="name"
                    type="text"
                    placeholder="Your name"
                    className="w-full border rounded px-4 py-2 focus:outline-none focus:ring-2 focus:ring-orange-400"
                />
                <input
                    name="email"
                    type="email"
                    placeholder="Your email"
                    className="w-full border rounded px-4 py-2 focus:outline-none focus:ring-2 focus:ring-orange-400"
                />
                <input
                    name="password"
                    type="password"
                    placeholder="Your password"
                    className="w-full border rounded px-4 py-2 focus:outline-none focus:ring-2 focus:ring-orange-400"
                />
                <button
                    type="submit"
                    className="w-full bg-orange-500 text-white py-2 rounded hover:bg-orange-600 transition"
                >
                    Sign Up
                </button>
            </form>

            <div className="text-center my-4 text-gray-500">Or Sign Up with</div>

            <div className="flex justify-center gap-4 mb-4">
                <FaFacebook className="text-blue-600 text-xl cursor-pointer hover:scale-110 transition" />
                <FaLinkedin className="text-blue-800 text-xl cursor-pointer hover:scale-110 transition" />
                <FaGoogle className="text-red-600 text-xl cursor-pointer hover:scale-110 transition" />
            </div>

            <p className="text-center text-sm text-gray-500">
                Already have an account?{" "}
                <a href="/login" className="text-orange-500 font-semibold hover:underline">
                    Login
                </a>
            </p>
        </>
    );
};

export default RegisterForm;
