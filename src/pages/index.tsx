import React, { useState } from 'react';
const SignupUI = () => {
const [formData, setFormData] = useState({
   username: '',
     email: '',
     password: '',
     OTP: ''
   });
   const [signedUp, setSignedUp] = useState(false);
   const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
     const { name, value } = e.target;
     setFormData((prevData) => ({
       ...prevData,
              [name]: value,
    }));
   };
   const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
     e.preventDefault();
     try {
       const response = await fetch('http://localhost:4000/demo/signUp', {
         method: 'POST',
         headers: {
           'Content-Type': 'application/json',
         },
         body: JSON.stringify(formData),
       });
       if (!response.ok) {
         throw new Error('Network response was not ok');
       }
       const data = await response.json();
       console.log(data);
       setSignedUp(true);
       window.location.href = '/signin';
     } catch (error) {
       console.error('Error:', error);
     }
   };
   if (signedUp) {
     return (
       <div className="container mx-auto mt-8 px-4">
         <p className="text-center text-lg font-semibold">
           You have successfully signed up! Redirecting to the signin page...
         </p>
       </div>
     );
   }
   return (
     <div className="min-h-screen flex items-center justify-center bg-gradient-to-r from-gray-100 via-gray-300 to-gray-500">
       <div className="max-w-md w-full p-8 bg-white rounded-lg shadow-2xl">
         <h2 className="text-3xl font-extrabold mb-8 text-center text-gray-800">Sign Up</h2>
         <form onSubmit={handleSubmit}>
         <div className="mb-4">
             <label htmlFor="username" className="block text-gray-700 font-semibold mb-2 text-lg">
               Username
             </label>
             <input
               type="text"
               id="username"
               name="username"
               value={formData.username}
               onChange={handleChange}
               className="w-full px-4 py-2 border-2 border-gray-300 rounded-lg focus:outline-none focus:border-blue-500"
               required
             />
           </div>
           <div className="mb-4">
             <label htmlFor="email" className="block text-gray-700 font-semibold mb-2 text-lg">
               Email
             </label>
             <input
               type="email"
               id="email"
               name="email"
               value={formData.email}
               onChange={handleChange}
               className="w-full px-4 py-2 border-2 border-gray-300 rounded-lg focus:outline-none focus:border-blue-500"
               required
             />
           </div>
           <div className="mb-6">
             <label htmlFor="password" className="block text-gray-700 font-semibold mb-2 text-lg">
               Password
             </label>
             <input
               type="password"
               id="password"
               name="password"
               value={formData.password}
               onChange={handleChange}
               className="w-full px-4 py-2 border-2 border-gray-300 rounded-lg focus:outline-none focus:border-blue-500"
               required
             />
           </div>
           <div className="mb-6">
             <label htmlFor="OTP" className="block text-gray-700 font-semibold mb-2 text-lg">
               OTP
             </label>
             <input
               type="text"
               id="OTP"
               name="OTP"
               value={formData.OTP}
               onChange={handleChange}
               className="w-full px-4 py-2 border-2 border-gray-300 rounded-lg focus:outline-none focus:border-blue-500"
               required
             />
           </div>
           <button
             type="submit"
             className="w-full bg-gradient-to-r from-blue-500 to-blue-600 hover:from-blue-600 hover:to-blue-700 text-white py-2 px-4 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
           >
             Sign Up
           </button>
         </form>
       </div>
     </div>
   );
 }
export default SignupUI;
