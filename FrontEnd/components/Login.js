import Image from 'next/image'
import { useState } from "react";
import { useBuzz } from "../Connector/buzz";
import { LoginUtil } from './LoginUtil';
import { Link } from 'react-scroll';
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
const Login = () => {
  const {
    initialized,
    transactionPending,
    name,
    age,
    gender,
    profileUrl,
    country,
    description,
    nameHandler,
    ageHandler,
    genderHandler,
    profileUrlHandler,
    countryHandler,
    descriptionHandler,
    initializeUser,
    loading,
  } = useBuzz();

  const {turnLoginFalse} = LoginUtil()
  


  const LoginClick = () => {
    initializeUser()
    turnLoginFalse()
    
  }
  return (
    <>
        <ToastContainer
        position="bottom-left"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
      />
      <section class="text-gray-600 body-font relative my-18" id='login'>
        <div class="container px-5 py-24 mx-auto flex sm:flex-nowrap flex-wrap">
          <div class="lg:w-2/3 md:w-1/2 bg-black rounded-lg overflow-hidden sm:mr-10 p-10 flex items-end justify-start relative">
            <div
             
              width="100%"
              height="100%"
              class="absolute inset-0 bg-black rounded-3xl"
              frameborder="0"
              title="map"
              marginheight="0"
              marginwidth="0"
              scrolling="no"
              src="https://maps.google.com/maps?width=100%&amp;height=600&amp;hl=en&amp;q=%C4%B0zmir+(My%20Business%20Name)&amp;ie=UTF8&amp;t=&amp;z=14&amp;iwloc=B&amp;output=embed"
            >
            <h2 className='flex justify-left mx-10 text-white text-9xl mt-5'>a</h2>
              <h2 className='flex justify-left mx-10 text-yellow-400 text-9xl mt-5'>decentralized</h2>
              <h2 className='flex justify-left mx-10 text-white text-9xl mt-5'>way to</h2>
              <h2 className='flex justify-left mx-10 text-yellow-400 text-9xl mt-5'>socialize ...... !!</h2>
            </div>
           
          </div>
          <div class="lg:w-1/3 md:w-1/2 bg-black flex flex-col md:ml-auto w-full md:py-8 mt-8 md:mt-0 p-10 rounded-3xl">
            <h2 class="text-white text-lg mb-1 font-medium title-font">
              CREATE YOUR ACCOUNT
            </h2>
            <p class="leading-relaxed mb-5 text-white">
              Enter some basic details to create your account ....
            </p>
            <div class="relative mb-4">
              <label for="name" class="leading-7 text-sm text-white">
                Name
              </label>
              <input
                placeholder="Enter Your Name"
                onChange={nameHandler}
                value={name}
                type="text"
                class="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-black py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
              />
            </div>
            <div class="relative mb-4">
              <label for="email" class="leading-7 text-sm text-white">
                Age
              </label>
              <input
                placeholder="Enter Your Age"
                onChange={ageHandler}
                value={age}
                type="text"
                class="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-black py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
              />
            </div>
            <div class="relative mb-4">
              <label for="message" class="leading-7 text-sm text-white">
                Gender
              </label>
              <input
                placeholder="Enter Your Gender"
                onChange={genderHandler}
                value={gender}
                type="text"
                class="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-black py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
              />
            </div>
            <div class="relative mb-4">
              <label for="message" class="leading-7 text-sm text-white">
                Profile Picture Url
              </label>
              <input
                placeholder="Enter Your Profile Url"
                onChange={profileUrlHandler}
                value={profileUrl}
                type="text"
                class="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-black py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
              />
            </div>
            <div class="relative mb-4">
              <label for="message" class="leading-7 text-sm text-white">
              Description Yourself
              </label>
              <input
                placeholder="Tell Abount Yourself"
                onChange={countryHandler}
                value={country}
                type="text"
                class="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-black py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
              />
            </div><div class="relative mb-4">
              <label for="message" class="leading-7 text-sm text-white">
                Enter Your Country
              </label>
              <input
                placeholder="Enter Your Country"
                onChange={descriptionHandler}
                value={description}
                type="text"
                class="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-black py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
              />
            </div>
            {loading ? (
              <>
                <Image src="/yellowLoader.gif" width={50} height={50} className="m-auto"/>
              </>
            ) : (
              <>
        
                <button
                  onClick={() => LoginClick()}
                  disabled={transactionPending}
                  class="text-gray-500 bg-white border-0 py-2 px-6 focus:outline-none hover:bg-transparent text-lg rounded-2xl"
                >
                  Create Your Account Now !!
                </button>
              
              </>
            )}

            <p class="text-xs text-white mt-3">
              Chicharrones blog helvetica normcore iceland tousled brook viral
              artisan.
            </p>
          </div>
        </div>
      </section>
    </>
  );
};

export default Login;
