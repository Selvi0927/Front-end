import React from 'react';
import { CiShoppingCart } from 'react-icons/ci';

const CartEmptyPage: React.FC = () => {
  return (
 
    <div className="flex flex-col items-center justify-center min-h-screen bg-white">
      <button onClick={() => window.history.back()} className="self-start ml-4 mt-4">
        <svg
          className="w-6 h-6 text-black"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M15 19l-7-7 7-7"
          ></path>
        </svg>
      </button>
      <div className="flex flex-col items-center">
        <CiShoppingCart className="w-24 h-24 text-gray-600" />
        <h1 className="mt-4 text-2xl font-bold ">Your cart is empty</h1>
        <p className="mt-2 text-gray-600">Let's add some services</p>
    </div>
    <div className='flex space-x-5 mt-4'>
      <button className="px-8 py-2 rounded-md bg-violet-500 text-white font-bold transition duration-200 hover:bg-white hover:text-black border-2 border-transparent hover:border-violet-500">
    Explore Services
  </button>
  </div>
    </div>
     
  );
};
export default CartEmptyPage;
