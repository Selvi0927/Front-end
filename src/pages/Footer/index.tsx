import React from 'react';
import { TiSocialTwitter } from "react-icons/ti";
import { TiSocialYoutube } from "react-icons/ti";
import { TiSocialFacebook } from "react-icons/ti";

const Footer = () => {
  return (
    <footer className="bg-black text-white py-8">
      <div className="container mx-auto px-4">
        <div className="flex justify-between">
          <div>
            <h2 className="font-bold mb-2 ">Services</h2>
            <ul className='space gap-x-5'>
            <a href=''><li>Branding</li></a>  
            <a href=''> <li>Design</li></a>
            <a href=''> <li>Marketing</li></a>
            <a href=''> <li>Advertisement</li></a>
            </ul>
          </div>
          <div>
            <h2 className="font-bold mb-2">Company</h2>
            <ul className='space gap-x-5'>
            <a href=''><li>About us</li></a>
            <a href=''> <li>Contact</li></a>
            <a href=''><li>Jobs</li></a>
            <a href=''> <li>Press kit</li></a>
            </ul>
          </div>
          <div>
            <h2 className="font-bold mb-2">Legal</h2>
            <ul className='space gap-x-5'>
            <a href=''><li>Terms of use</li></a>
            <a href=''><li>Privacy policy</li></a>
            <a href=''><li>Cookie policy</li></a>
            </ul>
          </div>
          <div>
            <h2 className="font-bold mb-2">Explore</h2>
            <ul className='space gap-x-5'>
            <a href=''><li>Features</li></a>
            <a href=''><li>Enterprise</li></a>
            <a href=''><li>Security</li></a>
            <a href=''><li>Pricing</li></a>
            </ul>
          </div>
          <div>
            <h2 className="font-bold mb-2">Apps</h2>
            <ul className='space gap-x-5'>
            <a href=''> <li>Mac</li></a>
            <a href=''> <li>Windows</li></a>
            <a href=''> <li>iPhone</li></a>
            <a href=''> <li>Android</li></a>
            </ul>
          </div>
          <div>
            <h2 className="font-bold mb-2">Social</h2>
            <div className="flex space-x-4">
              <a href="#"><TiSocialTwitter className="w-10 h-10" /></a>
              <a href="#"><TiSocialYoutube className="w-10 h-10" /></a>
              <a href="#"><TiSocialFacebook className="w-10 h-10" /></a>
            </div>
          </div>
        </div>
        <div className="mt-8">
          <h2 className="font-bold mb-2">Newsletter</h2>
          <form className="flex">
            <input
              type="email"
              placeholder="Enter your email address"
              className="px-3 py-2 rounded-l-md"
            />
            <button
              type="submit"
              className="bg-gray-600 text-white px-4 py-2 rounded-r-md"
            >
              Subscribe
            </button>
          </form>
        </div>
      </div>
    </footer>
  );
};

export default Footer;



