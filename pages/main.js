import Head from "next/head";
import Header from "../components/InsideComponent/Header";
import { useBuzz } from "../hook/buzz";
const main = () => {
  const { allUsers } = useBuzz();
  return (
    <>
      <Header />
      <section class="text-gray-600 body-font mx-5">
        <div class="container px-5 py-24 mx-auto">
          <div class="flex flex-wrap -m-2">
            {allUsers.map((item, keys) => {
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
                      ddd
                    </h2>
                    <h2 class=" text-gray-900 title-font text-lg mt-4 font-sans">
                      dd
                    </h2>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>
    </>
  );
};

export default main;
