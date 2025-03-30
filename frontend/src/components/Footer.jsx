import React from 'react';

const Footer = () => {
    return (
        <footer className="bg-gray-800 text-white py-3 px-4 flex items-center justify-between mt-8">
            <div className="text-sm px-4 py-2 leading-none rounded-full hover:bg-gray-700">
                Copyright © 2025 Skin_Cancer_Prediction
            </div>
            <div className="flex items-center">
                <a href="#" className="text-sm px-4 py-2 leading-none rounded-full hover:bg-gray-700 mr-4">Terms & Conditions</a>
                <a href="#" className="text-sm px-4 py-2 leading-none rounded-full hover:bg-gray-700">Privacy Policy</a>
            </div>
        </footer>
    );
};

export default Footer;
