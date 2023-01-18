import { useState } from "react";
import { useBuzz } from "../hook/buzz";
import { AiOutlinePlus } from "react-icons/ai";
import Image from "next/image";
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
  return (
    <>
      <div class="p-2 w-full flex flex-col justify-end items-end ">
        <button
          onClick={() => setUpload(true)}
          class="text-black bg-white py-2 px-8 mt-5 mr-5 rounded-full"
        >
          <AiOutlinePlus />
        </button>
      </div>

      {upload ? (
        <>
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
                class="w-full bg-white rounded-full border border-gray-300 focus:ring-8 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
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
                class="w-full bg-white border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out rounded-full"
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
                  class="text-white bg-black border-0 py-2 px-8 focus:outline-none hover:bg-gray-600 rounded-full text-lg"
                >
                  Upload
                </button>
              </>
            )}

            <p class="text-xs text-gray-500 mt-3">
              Literally you probably haven't heard of them jean shorts.
            </p>
          </div>
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
      {/* <input
        value={videoDiscription}
        onChange={videoDiscriptionHandler}
        type="text"
        placeholder="desc"
      ></input>

      <input
        value={videoUrl}
        onChange={videoUrlHandler}
        type="text"
        placeholder="url"
      ></input>

      <button onClick={()=> addVideo()}>
        Upload
      </button> */}
    </>
  );
};

export default upload;
