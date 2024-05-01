import React from "react";
import Button from "../components/Button";
import Footer from "../components/Footer";
import Header from "../components/Header";
import loginImage from "../assets/login.png"; 

const LoginPage = () => {
  return (
    <div>
      <Header />
        <section id="login" className="bg-slate-50 text-black py-0 my-36 mx-80 px-10 flex justify-center items-center border border-black rounded-lg">
      <div className="container flex justify-center items-center bg-teal-50 rounded-lg p-12">
        <div className="text-left mx-4">
          <h1 className="text-4xl py-1 px-4 tracking-tight md:text-4xl font-semibold italic mb-2 md:mb-4">Login</h1>
          <form className="space-y-4">
            <div>
              <input
                type="text"
                placeholder="Username"
                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-blue-500"
              />
            </div>
            <div>
              <input
                type="password"
                placeholder="Password"
                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-blue-500"
              />
            </div>
            <div className="flex justify-center items-center">
              <Button text="Login!" className="bg-green-600 text-white py-auto px-8 hover:bg-green-800" />
            </div>
          </form>
        </div>
        <div className="ml-12">
          <img src={loginImage} alt="Login" className="py-1 w-64" />
        </div>
      </div>
    </section>
    <Footer />
    </div>
  );
};

export default LoginPage;
