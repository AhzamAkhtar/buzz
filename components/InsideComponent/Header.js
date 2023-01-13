import Head from "next/head";

const Header = () => {
  return (
    <>
      <header class="text-gray-600 body-font">
        <div class="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
          <button class="bg-white text-black py-2 px-4 rounded-3xl inline-flex items-center">
            EXPLORE
          </button>

          <button class="bg-white text-black py-2 px-4 rounded-3xl inline-flex items-center mx-5">
            MY SPACE
          </button>
        </div>
      </header>
    </>
  );
};

export default Header;
