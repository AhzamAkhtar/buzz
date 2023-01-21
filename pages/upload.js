import { useState } from "react";
import { useBuzz } from "../hook/buzz";
import { AiOutlinePlus } from "react-icons/ai";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Image from "next/image";
import { BsArrow90DegLeft } from "react-icons/bs";
import Header from "../components/InsideComponent/Header";
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
    videoLoading,
  } = useBuzz();
  const [upload, setUpload] = useState(false);
  const uploadVideo = () => {
    addVideo();
    if (loading && transactionPending == false) {
      setUpload(false);
    }
  };

  const switchView = () => {
    if (upload == false) {
      setUpload(true);
    }
    if (upload == true) {
      setUpload(false);
    }
  };
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
      <Header />
      <h2 className="flex flex-col text-3xl justify-center items-center">
        Explore !!!
      </h2>
      <div class="p-2 w-full flex flex-col justify-end items-end ">
        {upload ? (
          <>
            <button
              onClick={() => switchView()}
              class="text-black bg-white py-2 px-8 mt-5 mr-5 rounded-full"
            >
              <BsArrow90DegLeft />
            </button>
          </>
        ) : (
          <>
            <button
              onClick={() => switchView()}
              class="text-black bg-white py-2 px-8 mt-5 mr-5 rounded-full"
            >
              <AiOutlinePlus />
            </button>
            <h2 className="mt-2 mr-5">Upload Here!!</h2>
          </>
        )}
      </div>

      {upload ? (
        <>
          <section class="text-gray-600 body-font relative my-18" id="login">
            <div class="container px-5 py-24 mx-auto flex sm:flex-nowrap flex-wrap">
              <div class="lg:w-2/3 md:w-1/2  bg-[url('/3.jpg')] rounded-lg overflow-hidden sm:mr-10 p-10 flex items-end justify-start relative">
                <div
                  style={{
                    zIndex: -1,
                    position: "fixed",
                    width: "100vw",
                    height: "100vh",
                  }}
                >
                  <Image
                    src="/3.jpg"
                    className="rounded-3xl"
                    alt="Mountains with snow"
                    layout="fill"
                    objectFit="cover"
                  />
                </div>
                <div
                  width="100%"
                  height="100%"
                  class="absolute inset-0 bg-black"
                  frameborder="0"
                  title="map"
                  marginheight="0"
                  marginwidth="0"
                  scrolling="no"
                >
                  <h2 className="flex flex-col items-end mx-10  justify-end text-white text-8xl mt-10">
                    Upload
                  </h2>
                  <h2 className="flex flex-col items-end mx-10 justify-end text-white text-6xl mt-5">
                    your videos
                  </h2>
                  <h2 className="flex flex-col items-end mx-10 justify-end text-yellow-400 text-5xl mt-5">
                    start your new journey !!!!
                  </h2>
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
                    <Image
                      src="/yellowLoader.gif"
                      width={50}
                      height={50}
                      className="m-auto"
                    />
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
          {videoLoading ? (
            <>
              <Image
                src="/yellowLoader.gif"
                width={50}
                height={50}
                className="m-auto"
              />
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
                      <div className="flex flex-wrap justify-start">
                        <div className="w-6/12 sm:w-4/12 px-4">
                          <img
                            src={item.account.profileUrl}
                            alt="..."
                            className="shadow-lg rounded-full max-w-full h-auto align-middle border-none"
                          />
                        </div>
                        <div class="mt-2 text-center md:text-left">
                          <h3 class="text-red-500 text-md mb-2 mt-5 title-font ">
                            {item.account.userName}
                          </h3>
                        </div>
                      </div>
                    </div>
                  </>
                );
              })}
            </>
          )}
        </>
      )}
    </>
  );
};

export default upload;
