import { useState } from "react";
import { useBuzz } from "../hook/buzz";
import { AiOutlinePlus } from "react-icons/ai";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Image from "next/image";
import {BsArrow90DegLeft} from 'react-icons/bs'
const upload = () => {
  const {
    addVideo,
    videoDiscription,
    videoUrl,
    videoDiscriptionHandler,
    videoUrlHandler,
    allvideo,
    loading,
    transactionPending,
  } = useBuzz();
  const [upload, setUpload] = useState(false);
  const uploadVideo = () => {
    addVideo();
    if (loading && transactionPending == false) {
      setUpload(false);
    }
  };

  const switchView = () => {
    if(upload==false){
      setUpload(true)
    }
    if(upload==true){
      setUpload(false)
    }
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
      <div class="p-2 w-full flex flex-col justify-end items-end ">
      {upload ? (
        <>
        <button
          onClick={() => switchView()}
          class="text-black bg-white py-2 px-8 mt-5 mr-5 rounded-full"
        >
          <BsArrow90DegLeft/>
        </button>
        </>
      ): (
        <>
        <button
          onClick={() => switchView()}
          class="text-black bg-white py-2 px-8 mt-5 mr-5 rounded-full"
        >
          <AiOutlinePlus/>
        </button>
        </>
      )}
      
      </div>

      {upload ? (
        <>
        <section class="text-gray-600 body-font relative my-18" id='login'>
        <div class="container px-5 py-24 mx-auto flex sm:flex-nowrap flex-wrap">
          <div class="lg:w-2/3 md:w-1/2 bg-gray-300 rounded-lg overflow-hidden sm:mr-10 p-10 flex items-end justify-start relative">
            <div
              width="100%"
              height="100%"
              class="absolute inset-0 bg-black"
              frameborder="0"
              title="map"
              marginheight="0"
              marginwidth="0"
              scrolling="no"
              src="https://maps.google.com/maps?width=100%&amp;height=600&amp;hl=en&amp;q=%C4%B0zmir+(My%20Business%20Name)&amp;ie=UTF8&amp;t=&amp;z=14&amp;iwloc=B&amp;output=embed"
            >
            <h2 className='flex flex-col items-end  justify-end mx-10 text-white text-8xl mt-5'>Upload</h2>
              <h2 className='flex flex-col items-end justify-end mx-10 text-white text-6xl mt-5'>your videos</h2>
              <h2 className='flex flex-col items-end justify-end mx-10 text-yellow-400 text-5xl mt-5'>start your new journey !!!!</h2>
              
            </div>
           
          </div>
          <div class="lg:w-2/6 md:w-1/2 bg-black rounded-lg p-8 flex flex-col md:ml-auto w-full mt-10  md:mt-0 justify-center">
            <h2 class="text-white text-lg font-medium title-font mb-5">
              Upload
            </h2>
            <div class="relative mb-4">
              <label for="email" class="leading-7 text-sm text-white">
                Video Description
              </label>
              <input
                value={videoDiscription}
                onChange={videoDiscriptionHandler}
                type="text"
                class="w-full mt-2 bg-white rounded-2xl border border-gray-300 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
              />
            </div>
            <div class="relative mb-4">
              <label for="full-name" class="leading-7 text-sm text-white">
                Our Video Url
              </label>
              <input
                value={videoUrl}
                onChange={videoUrlHandler}
                type="text"
                class="w-full mt-2 bg-white border text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out rounded-2xl"
              />
            </div>
            {loading ? (
              <>
              <Image src="/yellowLoader.gif" width={50} height={50} className="m-auto"/>
              </>
            ) : (
              <>
                <button
                  onClick={() => uploadVideo()}
                  class="bg-white text-black border-0 py-2 px-8 focus:outline-none rounded-full text-lg"
                >
                  Upload
                </button>
              </>
            )}

            <p class="text-xs text-gray-500 mt-3">
              Literally you probably haven't heard of them jean shorts.
            </p>
          </div>
          </div>
          </section>
        </>
      ) : (
        <>
          {allvideo.map((item) => {
            return (
              <>
                <div className="flex flex-col justify-center items-center mt-5">
                  <iframe
                    allow="autoplay; gyroscope;"
                    allowfullscreen
                    className="w-1/2 aspect-square  object-fill rounded-3xl"
                    src={item.account.content}
                  ></iframe>
                </div>
              </>
            );
          })}
        </>
      )}

    </>
  );
};

export default upload;
