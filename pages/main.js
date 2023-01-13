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
          <div class="flex flex-wrap -m-5">
            {allUsers.map((item, keys) => {
              if (keys < upperBound && keys >= lowerBound) {
                return (
                  <>
                    <div
                      key={keys}
                      class="lg:w-1/5 md:w-1/3 lg:mx-8 p-4 w-auto cursor-pointer shadow-lg mx-8 mb-5 bg-gray-200 rounded-lg"
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
                          Description about {item.account.name} - {item.account.description.slice(0,60)+"....."}
                        </h2>
                      </div>
                    </div>
                    
                  </>
                );
              }
            })}
          </div>
        </div>
        <BsArrowRight onClick={() => showNext()} />
        <BsArrowLeft onClick={() => showPrev()} />
      </section>
      {/* <section class="text-gray-600 body-font">
  <div class="container px-5 py-24 mx-auto">
    
    <div class="flex flex-wrap -m-4">
      <div class="p-4 md:w-1/3">
        <div class="flex rounded-lg h-full bg-gray-100 p-8 flex-col">
          <div class="flex items-center mb-3">
            <div class="w-8 h-8 mr-3 inline-flex items-center justify-center rounded-full bg-indigo-500 text-white flex-shrink-0">
              <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="w-5 h-5" viewBox="0 0 24 24">
                <path d="M22 12h-4l-3 9L9 3l-3 9H2"></path>
              </svg>
            </div>
            <h2 class="text-gray-900 text-lg title-font font-medium">Shooting Stars</h2>
          </div>
          <div class="flex-grow">
            <p class="leading-relaxed text-base">Blue bottle crucifix vinyl post-ironic four dollar toast vegan taxidermy. Gastropub indxgo juice poutine.</p>
            <a class="mt-3 text-indigo-500 inline-flex items-center">Learn More
              <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="w-4 h-4 ml-2" viewBox="0 0 24 24">
                <path d="M5 12h14M12 5l7 7-7 7"></path>
              </svg>
            </a>
          </div>
        </div>
      </div>
      
      
    </div>
  </div>
</section> */}
    </>
  );
};

export default main;
