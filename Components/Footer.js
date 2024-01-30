import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-8">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center">
         
          <div className="flex items-center mb-4 md:mb-0">
            <h3 className="text-xl font-bold">G' Hotel</h3>
          </div>
          
          <div className="text-center md:text-left mb-4">
            <p>Contact Info:</p>
            <p>Email: gautamjha050503@gmail.com</p>
            <p>Phone: 9075289572</p>
          </div>
         
          
          
          <div className="text-center md:text-right">
            <p>Follow Us:</p>
            <div className="flex justify-center md:justify-end mt-2">
              <a href="#" className="mr-4">Facebook</a>
              <a href="#" className="mr-4">Twitter</a>
              <a href="#">Instagram</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
