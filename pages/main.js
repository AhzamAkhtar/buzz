import Head from "next/head";
import { useState } from "react";
import Header from "../components/InsideComponent/Header";
import { useBuzz } from "../hook/buzz";
import { BsArrowRight } from "react-icons/bs";
import {BsArrowLeft} from 'react-icons/bs'
const main = () => {
  const { allUsers } = useBuzz();
  const [lowerBound , setLowerBound] = useState(0)
  const [upperBound, setUpperBound] = useState(3)
  console.log("length" , allUsers.length)
  const showNext = () => {
    setLowerBound(upperBound)
    setUpperBound(upperBound+3)
  }
  const showPrev = () => {
    setUpperBound(lowerBound)
    setLowerBound(lowerBound-3)
  }
  return (
    <>
      <Header />
      <section class="text-gray-600 body-font mx-5">
        <div class="container px-5 py-24 mx-auto">
          <div class="flex flex-wrap -m-2">
            {allUsers.map((item, keys) => {
              if (keys<upperBound && keys>=lowerBound) {
                return (
                  <div
                    key={keys}
                    class="lg:w-1/5 md:w-1/3 lg:mx-8 p-4 w-full cursor-pointer shadow-lg mx-8 mb-5 bg-gray-200 rounded-lg"
                  >
                    <a class="block relative rounded overflow-hidden">
                      <img
                        alt="ecommerce"
                        class="inset-0 w-full h-full object-cover object-center"
                        src="Dd"
                      />
                    </a>
                    <div class="mt-4 text-center md:text-left">
                      <h3 class="text-red-500 text-md  title-font mb-1">
                        PROJECTS {keys + 1}
                      </h3>
                      <h2 class="text-gray-900 title-font text-lg font-sans mt-2">
                        "lowerbound" + {lowerBound}
                      </h2>
                      <h2 class=" text-gray-900 title-font text-lg mt-4 font-sans">
                        "upperbound" + {upperBound}
                      </h2>
                    </div>
                  </div>
                );
              }
            })}
          </div>
        
        </div>
        <BsArrowRight onClick={()=> showNext()}/>
        <BsArrowLeft onClick={()=> showPrev()}/>
      </section>
    </>
  );
};

export default main;
