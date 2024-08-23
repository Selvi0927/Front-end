import React from 'react';
const Box :React.FC = ()=>{
  return (
    <div>
    <div className="max-w-lg bg-white shadow-sm p-5 rounded border border-gray">
      <p className="text-lg font-semibold mb-8">What are you looking for?</p>
      <div className="grid grid-cols-3 gap-4">
        <div className="text-center">
          <img src="https://res.cloudinary.com/urbanclap/image/upload/t_high_res_category/w_56,dpr_1,fl_progressive:steep,q_auto:low,f_auto,c_limit/images/supply/customer-app-supply/1678864013225-bfc1de.jpeg" alt="women's saloon" className="rounded-lg bg-neutral-100 mx-auto px-8 py-3"/>
          <p className="text-xs mt-1">Women's Salon & Spa</p>
        </div>
        <div className="text-center">
          <img src="https://res.cloudinary.com/urbanclap/image/upload/t_high_res_category/w_56,dpr_1,fl_progressive:steep,q_auto:low,f_auto,c_limit/images/growth/luminosity/1710241114433-5cfa7c.jpeg" alt="men's saloon" className="rounded-lg bg-neutral-100 mx-auto px-8 py-3"/>
          <p className="text-xs mt-1">Men's Salon & Massage</p>
        </div>
        <div className="text-center">
          <img src="https://res.cloudinary.com/urbanclap/image/upload/t_high_res_category/w_56,dpr_1,fl_progressive:steep,q_auto:low,f_auto,c_limit/images/growth/home-screen/1679292077307-6143d7.jpeg" alt="AC appliance & repir" className="rounded-lg bg-neutral-100 mx-auto px-8 py-3" />
          <p className="text-xs mt-1">AC & Appliance Repair</p>
        </div>
        <div className="text-center">
          <img src="https://res.cloudinary.com/urbanclap/image/upload/t_high_res_category/w_56,dpr_1,fl_progressive:steep,q_auto:low,f_auto,c_limit/images/growth/home-screen/1681711961404-75dfec.jpeg" alt="Cleaning & pest control" className="rounded-lg bg-neutral-100 mx-auto px-8 py-3"/>
          <p className="text-xs mt-1">Cleaning & Pest Control</p>
        </div>
        <div className="text-center">
          <img src="https://res.cloudinary.com/urbanclap/image/upload/t_high_res_category/w_56,dpr_1,fl_progressive:steep,q_auto:low,f_auto,c_limit/images/growth/luminosity/1658402794135-faf080.png" alt="electrician plumber carpenter" className="rounded-lg bg-neutral-100 mx-auto px-8 py-3"/>
          <p className="text-xs mt-1">Electrician, Plumber & Carpenter</p>
        </div>
        <div className="text-center">
          <img src="https://res.cloudinary.com/urbanclap/image/upload/t_high_res_category/w_56,dpr_1,fl_progressive:steep,q_auto:low,f_auto,c_limit/images/growth/luminosity/1705340729734-0a23f7.jpeg" alt="water purifier" className="rounded-lg bg-neutral-100 mx-auto px-8 py-3"/>
          <p className="text-xs mt-1">Native Water Purifier</p>
        </div>
        </div>
        <div className="grid grid-cols-2 gap-4 justify-between">
        <div className="text-center">
          <img src="https://res.cloudinary.com/urbanclap/image/upload/t_high_res_category/w_56,dpr_1,fl_progressive:steep,q_auto:low,f_auto,c_limit/images/growth/luminosity/1705340800795-115b3b.jpeg" alt="smart lock" className="rounded-lg bg-neutral-100 mx-auto px-8 py-3"/>
          <p className="text-xs mt-1">Native Smart Locks</p>
        </div>
        <div className="text-center">
          <img src="https://res.cloudinary.com/urbanclap/image/upload/t_high_res_category/w_56,dpr_1,fl_progressive:steep,q_auto:low,f_auto,c_limit/images/growth/home-screen/1674120935535-f8d5c8.jpeg" alt="painting" className="rounded-lg bg-neutral-100 mx-auto px-8 py-3"/>
          <p className="text-xs mt-1">Painting & Water Proofing</p>
        </div>
          </div>
  </div>
  <div className="flex justify-around items-center p-6 bg-white rounded-lg mt-4">
        <div className="text-center">
          <img src="/star.png" className="h-10 mb-1" alt="Service Rating"/>
          <h1 className="text-xl font-semibold">4.8</h1>
          <p className="text-sm">Service Rating</p>
        </div>
        <div className="text-center">
          <img src="/follwers.png" className="h-10 mb-1" alt="Customers Globally"/>
          <h1 className="text-xl font-semibold">5M+</h1>
          <p className="text-sm">Customers Globally</p>
        </div>
      </div>
  </div>
  );
}
export default Box;
