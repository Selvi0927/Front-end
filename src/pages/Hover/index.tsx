import React, { useState } from 'react';
const App: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const images = [
    {
      src: "https://res.cloudinary.com/urbanclap/image/upload/t_high_res_template/w_233,dpr_1,fl_progressive:steep,q_auto:low,f_auto,c_limit/images/growth/luminosity/1687428458328-9e147d.jpeg",
      alt: "Native water purifier",
      title: "Native water purifier"
    },
    {
      src: "https://res.cloudinary.com/urbanclap/image/upload/t_high_res_template/w_233,dpr_1,fl_progressive:steep,q_auto:low,f_auto,c_limit/images/growth/luminosity/1651040420198-fe6d1d.jpeg",
      alt: "Hair studio for women",
      title: "Hair studio for women"
    },
    {
      src: "https://res.cloudinary.com/urbanclap/image/upload/t_high_res_template/w_233,dpr_1,fl_progressive:steep,q_auto:low,f_auto,c_limit/images/growth/luminosity/1652853823570-152440.png",
      alt: "AC Repair & Service",
      title: "AC Repair & Service"
    },
    {
      src: "https://res.cloudinary.com/urbanclap/image/upload/t_high_res_template/w_233,dpr_1,fl_progressive:steep,q_auto:low,f_auto,c_limit/images/growth/luminosity/1719991333232-d32f07.jpeg",
      alt: "Native smart locker",
      title: "Native smart locker"
    },
    {
      src: "https://res.cloudinary.com/urbanclap/image/upload/t_high_res_template/w_233,dpr_1,fl_progressive:steep,q_auto:low,f_auto,c_limit/images/growth/luminosity/1651040407144-95eb6e.jpeg",
      alt: "Spa Ayurveda",
      title: "Spa Ayurveda"
    },
    {
      src: "https://res.cloudinary.com/urbanclap/image/upload/t_high_res_template/w_233,dpr_1,fl_progressive:steep,q_auto:low,f_auto,c_limit/images/growth/luminosity/1651040419628-022a2b.jpeg",
      alt: "Home Painting",
      title: "Home Painting"
    }
  ];

  const handleNext = () => {
    if (currentIndex < images.length - 5) {
      setCurrentIndex(currentIndex + 1);
    }
  };

  const handlePrevious = () => {
    if (currentIndex > 0) {
      setCurrentIndex(currentIndex - 1);
    }
  };

  return (
    <div className="relative">
      {currentIndex > 0 && (
        <button onClick={handlePrevious} className="absolute left-0 top-1/2 transform -translate-y-1/2 z-10 bg-gray-200 rounded-full p-2">
          &lt;
        </button>
      )}
      <div className="flex space-x-7 mt-2 overflow-hidden">
        {images.slice(currentIndex, currentIndex + 5).map((image, index) => (
          <div key={index} className="relative w-56 overflow-hidden rounded-md">
            <img
              src={image.src}
              alt={image.alt}
              className="transition-transform duration-500 ease-in-out transform hover:scale-110"
            />
            <h1 className="text-xl font-antialiased text-gray-800 mt-2">{image.title}</h1>
          </div>
        ))}
      </div>
      {currentIndex < images.length - 5 && (
        <button onClick={handleNext} className="absolute right-0 top-1/2 transform -translate-y-1/2 z-10 bg-gray-200 rounded-full p-2">
          &gt;
        </button>
      )}
      
    </div>
  );
};
export default App;
