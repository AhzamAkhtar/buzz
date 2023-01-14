import Header from "../components/InsideComponent/Header";
import { useBuzz } from "../hook/buzz";
const MySpace = () => {
  const { allStatus, statusHandler, status, addStatus , loading ,currentUser } = useBuzz();

  return (
    <>
      <Header />
      <section class="text-gray-600 body-font">
        <div class="container px-5 py-5 mx-auto">
          <div class="flex flex-wrap w-full mb-20 flex-col items-center text-center">
            <h1 class="sm:text-3xl text-2xl font-medium title-font mb-2 text-white">
              see what your Friends are talking about.....
            </h1>
            <div
              class="flex relative mb-3
            "
            >
              <input
                value={status}
                onChange = {statusHandler}
                placeholder="whats going on .....!!"
                type="text"
                class="w-full bg-white rounded-full mt-2 border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-black py-1 px-3 leading-8 transition-colors duration-200 ease-in-out "
              />
              <button onClick={()=>addStatus()}
               class="bg-white text-black py-2 mx-3 px-4 rounded-3xl  items-center">
                Post
              </button>
            </div>
            {/* <input class="lg:w-90 mt-2 h-70 leading-relaxed text-gray-500 bg-white rounded-full"></input> */}
          </div>
          <div class="container px-5 py-5 mx-auto">
            <div class="flex flex-wrap -m-5 px-24 py-1 ">
              {allStatus.map((item, keys) => {
                if (allStatus) {
                  return (
                    <>
                      <div
                        key={keys}
                        class="lg:w-1/4 md:w-1/3 lg:mx-8 p-4 w-auto cursor-pointer shadow-lg mx-8 mb-5 bg-gray-200 rounded-lg"
                      >
                        <div class="mt-2 text-center md:text-left">
                          <h3 class="text-red-500 text-md mb-2 title-font ">
                            {currentUser.name}
                          </h3>
                          <h3 class="text-black text-md  title-font ">
                            {item.account.status}
                          </h3>
                        </div>
                      </div>
                    </>
                  );
                }
              })}
            </div>
          </div>
         
        </div>
      </section>
    </>
  );
};

export default MySpace;
