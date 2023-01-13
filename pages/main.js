import Head from "next/head";
import { useState } from "react";
import Header from "../components/InsideComponent/Header";
import { useBuzz } from "../hook/buzz";
import { BsArrowRight } from "react-icons/bs";
import { BsArrowLeft } from "react-icons/bs";
import {IoMdPersonAdd} from "react-icons/io"
import Image from "next/image";
const main = () => {
  const { allUsers } = useBuzz();
  const [lowerBound, setLowerBound] = useState(0);
  const [upperBound, setUpperBound] = useState(3);
  console.log("length", allUsers.length);
  const showNext = () => {
    setLowerBound(upperBound);
    setUpperBound(upperBound + 3);
  };
  const showPrev = () => {
    setUpperBound(lowerBound);
    setLowerBound(lowerBound - 3);
  };
  return (
    <>
      <Header />
      <section class="text-gray-600 body-font mx-5">
        <div class="container px-5 py-5 mx-auto">
          <div class="flex flex-wrap -m-5 px-24 py-1 ">
            {allUsers.map((item, keys) => {
              if (keys < upperBound && keys >= lowerBound) {
                return (
                  <>
                    <div
                      key={keys}
                      class="lg:w-1/4 md:w-1/3 lg:mx-8 p-4 w-auto cursor-pointer shadow-lg mx-8 mb-5 bg-gray-200 rounded-lg"
                    >
                      <a class="block relative rounded overflow-hidden">
                        <img
                          alt="ecommerce"
                          class="inset-0 w-full h-full object-cover object-center"
                          src={item.account.profileUrl}
                        />
                      </a>
                      <div class="mt-2 text-center md:text-left">
                        <h3 class="text-red-500 text-md  title-font mb-1">
                          {item.account.name}
                        </h3>
                        <div class="flex justify-start">
                          <h2 class=" text-gray-900 title-font text-base  font-sans">
                            Gender-{item.account.gender}
                          </h2>
                          <h2 class=" text-gray-900 title-font text-base mx-5 font-sans">
                            Country-{item.account.country}
                          </h2>
                          <IoMdPersonAdd className="text-2xl"/>
                        </div>
                        <h2 class=" text-gray-900 title-font text-base mt-2 font-sans">
                          Age - {item.account.age}
                        </h2>
                        <h2 class=" text-gray-900 title-font text-base mt-2 font-sans">
                          No of Friends - {item.account.totalFriend}
                        </h2>
                        <h2 class=" text-gray-900 title-font text-sm mt-2 font-sans">
                          Description about {item.account.name} - {item.account.description.slice(0,10)+"....."}
                        </h2>
                      </div>
                    </div>
                    
                  </>
                );
              }
            })}
          </div>
        </div>
        <div className="bg-white rounded-xl">

        <BsArrowRight className="m-auto text-xl" onClick={() => showNext()} />
        <BsArrowLeft className="m-auto text-xl" onClick={() => showPrev()} />
        </div>
      </section>
      
    </>
  );
};

export default main;
