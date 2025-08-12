// pages/login.js
import Head from "next/head";
import Image from "next/image";
import LoginForm from "./components/LoginForm";

const Login = () => {
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
                        src="/assets/images/login/login.svg"
                        alt="Secure Login"
                        className="max-w-md w-full"
                    />
                </div>

                {/* Right Section - Form */}
                <div className="w-full md:w-1/2 flex items-center justify-center px-6 md:px-20">
                    <div className="w-full max-w-md">
                        <LoginForm />
                    </div>
                </div>
            </div>
        </>
    );
}

export default Login