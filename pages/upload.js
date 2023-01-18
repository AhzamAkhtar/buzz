import { useState } from "react";
import { useBuzz } from "../hook/buzz";
const upload = () => {
  const {
    addVideo,
    videoDiscription,
    videoUrl,
    videoDiscriptionHandler,
    videoUrlHandler,
    allvideo,
  } = useBuzz();
  const [upload, setUpload] = useState(false);
  return (
    <>
      <div class="p-2 w-full">
        <button class="flex mx-auto text-white bg-indigo-500 border-0 py-2 px-8 focus:outline-none hover:bg-indigo-600 rounded text-lg">
          Button
        </button>
      </div>
      {upload ? (
        <>
          <div class="lg:w-2/6 md:w-1/2 bg-white rounded-lg p-8 flex flex-col md:ml-auto w-full mt-10  md:mt-0 justify-center">
            <h2 class="text-gray-900 text-lg font-medium title-font mb-5">
              Upload
            </h2>
            <div class="relative mb-4">
              <label for="email" class="leading-7 text-sm text-gray-600">
                Video Description
              </label>
              <input
                value={videoDiscription}
                onChange={videoDiscriptionHandler}
                type="text"
                class="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
              />
            </div>
            <div class="relative mb-4">
              <label for="full-name" class="leading-7 text-sm text-gray-600">
                Our Video Url
              </label>
              <input
                value={videoUrl}
                onChange={videoUrlHandler}
                type="text"
                class="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
              />
            </div>
            <button
              onClick={() => addVideo()}
              class="text-white bg-black border-0 py-2 px-8 focus:outline-none hover:bg-indigo-600 rounded-full text-lg"
            >
              Upload
            </button>
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
