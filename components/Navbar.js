import { WalletMultiButton } from "@solana/wallet-adapter-react-ui";
import {AiOutlineArrowRight} from 'react-icons/ai'
const Navbar = () => {
  return (
    <>
      <header class="text-gray-600 body-font">
        <div class="container mx-auto flex flex-wrap p-10 flex-col md:flex-row items-center">
          <a class="flex title-font font-medium items-center text-gray-900 mb-4 md:mb-0">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              stroke="currentColor"
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              class="w-10 h-10 text-white p-2 bg-yellow-500 rounded-full"
              viewBox="0 0 24 24"
            >
              <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"></path>
            </svg>
            <h1 class="ml-3 text-4xl text-white">BUZZ</h1>
          </a>
          <nav class="md:mr-auto md:ml-4 md:py-1 md:pl-4 md:border-l md:border-gray-400	flex flex-wrap items-center text-base justify-center">
            <a class="mr-5 hover:text-white text-xl">First Link</a>
            {/* <a class="mr-5 hover:text-gray-900">Second Link</a>
            <a class="mr-5 hover:text-gray-900">Third Link</a>
            <a class="mr-5 hover:text-gray-900">Fourth Link</a> */}
          </nav>
          <WalletMultiButton
          
            style={{
              margin : "10px",
              borderRadius : "50vw"
              
            }}
          />
          <button class="bg-white text-black  font-bold py-2 px-4 rounded-3xl inline-flex items-center">
            <span>DIVE IN</span>
            <AiOutlineArrowRight className="ml-1 w-8"/>
          </button>
        </div>
      </header>
    </>
  );
};

export default Navbar;
