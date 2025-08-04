// components/RegisterForm.jsx
import Image from "next/image";
import RegisterForm from "./components/RegisterForm";

export default function RegisterPage() {
    return (
        <div className="min-h-screen flex items-center justify-center bg-white">
            <div className="w-full max-w-6xl flex flex-col md:flex-row items-center justify-between p-6">

                {/* Left Illustration Section */}
                <div className="w-full md:w-1/2 mb-8 md:mb-0 flex justify-center">
                    <Image alt="register" src={'/assets/images/login/login.svg'} height={450} width={450} />
                </div>

                {/* Right Form Section */}
                <div className="w-full md:w-1/2 bg-white border rounded-lg shadow-md p-8 max-w-md">
                    <h2 className="text-2xl font-semibold text-center mb-6">Sign Up</h2>

                    <RegisterForm/>

                    
                </div>
            </div>
        </div>
    );
}
