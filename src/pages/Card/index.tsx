import React from 'react';
const Card: React.FC = () => {
  return (
    <div className="flex space-x-7 mt-2">
      {[
        {
          imgSrc: "https://res.cloudinary.com/urbanclap/image/upload/t_high_res_template/w_231,dpr_1,fl_progressive:steep,q_auto:low,f_auto,c_limit/images/supply/customer-app-supply/1717398009148-4b7a11.jpeg",
          title: "Pedicure"
        },
        {
          imgSrc: "https://res.cloudinary.com/urbanclap/image/upload/t_high_res_template/w_231,dpr_1,fl_progressive:steep,q_auto:low,f_auto,c_limit/images/supply/customer-app-supply/1717398005609-e19abc.jpeg",
          title: "Manicure"
        },
        {
          imgSrc: "https://res.cloudinary.com/urbanclap/image/upload/t_high_res_template/w_231,dpr_1,fl_progressive:steep,q_auto:low,f_auto,c_limit/images/supply/customer-app-supply/1717398018197-c68fcc.jpeg",
          title: "Hair Care"
        },
        {
          imgSrc: "https://res.cloudinary.com/urbanclap/image/upload/t_high_res_template/w_231,dpr_1,fl_progressive:steep,q_auto:low,f_auto,c_limit/images/supply/customer-app-supply/1717398014369-209a76.jpeg",
          title: "Facial & CleanUp"
        },
        {
          imgSrc: "https://res.cloudinary.com/urbanclap/image/upload/t_high_res_template/w_231,dpr_1,fl_progressive:steep,q_auto:low,f_auto,c_limit/images/supply/customer-app-supply/1717398001090-fe3d01.jpeg",
          title: "Threading & Face waxing"
        },
        {
          imgSrc: "https://res.cloudinary.com/urbanclap/image/upload/t_high_res_template/w_231,dpr_1,fl_progressive:steep,q_auto:low,f_auto,c_limit/images/supply/customer-app-supply/1717397992635-09b511.jpeg",
          title: "Waxing"
        }
      ].map((item, index) => (
        <div key={index} className="p-4 border border-gray-300 rounded-lg bg-white-50 transition-transform duration-500 ease-in-out transform hover:scale-110">
          <h1 className="text-xl font-antialiased text-gray-800 mb-2">{item.title}</h1>
          <img src={item.imgSrc} alt={item.title} className="w-full h-auto" />
        </div>
      ))}
    </div>
  );
}
export default Card;
