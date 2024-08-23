import React, { useState } from 'react';
import Link from 'next/link';
import { CiShoppingCart } from "react-icons/ci";
import { VscAccount } from "react-icons/vsc";
import Box from '../pages/Box';
import Hover from '../pages/Hover';
import Card from '../pages/Card';
import Footer from '../pages/Footer'
interface NavbarProps {
  location: string;
}
const Navbar: React.FC<NavbarProps> = ({ location }) => {
  const [showTrending, setShowTrending] = useState(false);
  const handleFocus = () => {
    setShowTrending(true);
  };
  const handleBlur = () => {
    setTimeout(() => setShowTrending(false), 200); // Delay to allow clicks
  };
  return (
    <div className="flex justify-between items-center p-4 bg-white border-b border-gray-200">
      <div className="flex items-center">
        <div className="flex items-center mr-8">
          <img src="/logo.png" alt="Urban Company" className="h-8 mr-2" />
        </div>
        <nav>
          <ul>
            <div className="flex space-x-5">
              <a href="/main" className="transition-colors duration-300 hover:text-red-600 cursor-pointer">Beauty</a>
              <a href="/main" className="transition-colors duration-300 hover:text-green-600 cursor-pointer">Homes</a>
              <a href="/main" className="transition-colors duration-300 hover:text-blue-600 cursor-pointer">Native</a>
              </div>
          </ul>
        </nav>
      </div>
      <div className="flex items-center space-x-8 relative">
        <div className="flex items-center space-x-2">
          <span>Nungambakkam, Chennai</span>
        </div>
        <div>
          <input
            type="text"
            placeholder="Search for Services"
            className="px-3 py-2 border rounded-md"
            onFocus={handleFocus}
            onBlur={handleBlur}
          />
          {showTrending && (
            <div className="absolute top-14 left-0 w-full bg-white border border-gray-200 rounded-md shadow-lg p-4">
              <p className="font-semibold text-gray-700 mb-2">Trending searches</p>
              <div className="grid grid-cols-2 gap-2">
                <button className="trending-item text-left text-sm">Professional cleaning</button>
                <button className="trending-item text-left text-sm">Electricians</button>
                <button className="trending-item text-left text-sm">Plumbers</button>
                <button className="trending-item text-left text-sm">Professional bathroom cleaning</button>
                <button className="trending-item text-left text-sm">Carpenters</button>
                <button className="trending-item text-left text-sm">Salon</button>
                <button className="trending-item text-left text-sm">Washing machine repair</button>
                <button className="trending-item text-left text-sm">Full home cleaning</button>
                <button className="trending-item text-left text-sm">RO repair</button>
                <button className="trending-item text-left text-sm">Refrigerator repair</button>
              </div>
            </div>
          )}
        </div>
        <div className="flex items-center space-x-4">
          <Link href="/cart">
              <CiShoppingCart className="w-8 h-8 text-gray-600 cursor-pointer" />
          </Link>
          <Link href="/Profile">
              <VscAccount className="w-7 h-7 text-gray-600 cursor-pointer" />
          </Link>
        </div>
      </div>
    </div>
  );
};
const Home: React.FC = () => {
  return (
    <>
      <Navbar location="Home" />
      <div className="mx-auto mt-8 px-4">
        <h1 className="flex justify-center text-4xl font-bold mb-4">Home services at your doorstep 🏠🧹🧽🚪</h1>
        <div className="m-24 flex justify-between gap-4">
          <div className="w-1/2">
            <Box />
          </div>
          <div className="w-1/2">
            <img src="https://res.cloudinary.com/urbanclap/image/upload/t_high_res_template,q_auto:low,f_auto/dpr_1,fl_progressive:steep,q_auto:low,f_auto,c_limit/images/growth/home-screen/1696852847761-574450.jpeg" alt=""/>
          </div>
        </div>
        <h1 className="text-4xl font-semi-bold mb-4">New and noteworthy</h1>
        <div className='flex -space-x-5 mt-6'>
          <Hover />
        </div>
        <h1 className="flex space-x-10 mt-10 text-4xl font-semi-bold mb-4">Most booked services</h1>
        <div className='flex space-x-7 mt-6'>
          <div className="relative overflow-hidden p-4 border rounded-md shadow-lg">
            <img src="https://res.cloudinary.com/urbanclap/image/upload/t_high_res_template/w_233,dpr_1,fl_progressive:steep,q_auto:low,f_auto,c_limit/images/growth/luminosity/1652168690740-f5ed68.png" />
            <h1 className="text-xl font-antialiased text-gray-800">AC repair(split/ window)</h1>
            <p>★ 4.80 (369.9K)</p>
            <p>₹299</p>
          </div>
          <div className="relative overflow-hidden p-4 border rounded-md shadow-lg">
            <img src="https://res.cloudinary.com/urbanclap/image/upload/t_high_res_template/w_233,dpr_1,fl_progressive:steep,q_auto:low,f_auto,c_limit/images/growth/home-screen/1659102409372-8ca38a.png" />
            <h1 className="text-xl font-antialiased text-gray-800">Intense bathroom cleaning</h1>
            <p>★ 4.78 (1.6M)</p>
            <p>₹549</p>
          </div>
          <div className="relative overflow-hidden p-4 border rounded-md shadow-lg">
            <img src="https://res.cloudinary.com/urbanclap/image/upload/t_high_res_template/w_233,dpr_1,fl_progressive:steep,q_auto:low,f_auto,c_limit/images/growth/home-screen/1659096798036-9b40ee.png" />
            <h1 className="text-xl font-antialiased text-gray-800">Sofa cleaning</h1>
            <p>★ 4.86 (152.5K)</p>
            <p>₹499</p>
          </div>
          <div className="relative overflow-hidden p-4 border rounded-md shadow-lg">
            <img src="https://res.cloudinary.com/urbanclap/image/upload/t_high_res_template/w_233,dpr_1,fl_progressive:steep,q_auto:low,f_auto,c_limit/images/growth/luminosity/1653636124596-424907.png" />
            <h1 className="text-xl font-antialiased text-gray-800">Tv Repair</h1>
            <p>★ 4.82 (47.6K)</p>
            <p>₹249</p>
          </div>
          <div className="relative overflow-hidden p-4 border rounded-md shadow-lg">
            <img src="https://res.cloudinary.com/urbanclap/image/upload/t_high_res_template/w_233,dpr_1,fl_progressive:steep,q_auto:low,f_auto,c_limit/images/growth/home-screen/1677519626723-82ff21.jpeg" />
            <h1 className="text-xl font-antialiased text-gray-800">Hair cut for men</h1>
            <p>★ 4.89 (516.7K)</p>
            <p>₹259</p>
          </div>
        </div>
        <h1 className="flex space-x-10 mt-10 text-4xl font-semi-bold mb-4">Salon For Women</h1>
        <div className='flex space-x-7 mt-6'>
          <Card />
        </div>
      </div>
      <div className='flex space-x-7 mt-20'></div>
      <Footer  />
    </>
  );
};
export default Home;