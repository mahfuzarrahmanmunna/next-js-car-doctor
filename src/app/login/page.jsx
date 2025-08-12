// pages/login.js
import Head from "next/head";
import Image from "next/image";
import { FaFacebookF, FaLinkedinIn, FaGoogle } from "react-icons/fa";
import login from "./../../../public/assets/images/login/login.svg";

export default function Login() {
    return (
        <>
            <Head>
                <title>Login | Car Doctor</title>
            </Head>
            <div className="flex min-h-screen">
                {/* Left Section - Illustration */}
                <div className="w-1/2 hidden md:flex items-center justify-center bg-orange-50 p-10">
                    <Image
                        width={600}
                        height={600}
                        src={login}
                        alt="Secure Login"
                        className="max-w-md w-full"
                    />
                </div>

                {/* Right Section - Form */}
                <div className="w-full md:w-1/2 flex items-center justify-center px-6 md:px-20">
                    <div className="w-full max-w-md">
                        <h2 className="text-3xl font-semibold text-gray-800 mb-6">Login</h2>
                        <form className="space-y-4">
                            <div>
                                <label className="block mb-1 text-sm font-medium">Email</label>
                                <input
                                    type="email"
                                    placeholder="Your email"
                                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-orange-500"
                                />
                            </div>
                            <div>
                                <label className="block mb-1 text-sm font-medium">Confirm Password</label>
                                <input
                                    type="password"
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

                        {/* Or sign in with */}
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
                            Have an account?{" "}
                            <a href="/register" className="text-orange-600 hover:underline">
                                Sign In
                            </a>
                        </p>
                    </div>
                </div>
            </div>
        </>
    );
}
