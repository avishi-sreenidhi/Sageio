import React, { useRef } from "react";
import Button from "../components/Button";
import Footer from "../components/Footer";
import Header from "../components/Header";
import signupImage from "../assets/signup.png"; 

const Signup= () => {
  const formRef = useRef(null);

  const handleReset = () => {
    formRef.current.reset();
  };

  const handleFocus = () => {
    formRef.current.username.focus();
  };

  return (
    <div>
      <Header />
      <section id="Signup" className="bg-slate-50 text-black py-0 my-36 mx-80 px-10 flex justify-center items-center border border-black rounded-lg">
        <div className="container flex justify-center items-center bg-teal-50 rounded-lg p-12">
          <div className="text-left mx-4">
            <h1 className="text-4xl py-1 px-4 tracking-tight md:text-4xl font-semibold italic mb-2 md:mb-4">Signup</h1>
            <form ref={formRef} className="space-y-4">
              <div>
                <input
                  type="text"
                  name="username"
                  placeholder="Username"
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-blue-500"
                />
              </div>
              <div>
                <input
                  type="password"
                  name="password"
                  placeholder="Password"
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-blue-500"
                />
              </div>
              <div>
                <input
                  type="email"
                  name="email"
                  placeholder="Email"
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-blue-500"
                />
              </div>
              <div>
                <select
                  name="gender"
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-blue-500"
                >
                  <option value="" disabled selected>Select Gender</option>
                  <option value="male">Male</option>
                  <option value="female">Female</option>
                </select>
              </div>
              <div>
                <input type="checkbox" id="terms" name="terms" />
                <label htmlFor="terms">  I agree to the Terms and Conditions</label>
              </div>
              <div>
                <input type="radio" id="subscribe" name="subscribe" value="subscribe" />
                <label htmlFor="subscribe">  Subscribe to our Newsletter</label>
              </div>
              <div className="flex justify-center items-center space-x-4">
                <Button text="Signup!" className="bg-green-600 text-white py-auto px-8 hover:bg-green-800" />
              </div>
            </form>
          </div>
          <div className="ml-12">
            <img src={signupImage} alt="Signup" className="py-1 w-64" />
          </div>
        </div>
      </section>
      <Footer />
    </div>
  );
};

export default Signup;
