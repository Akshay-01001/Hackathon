import React from 'react';

const Home = () => {
  return (
    <div className="min-h-screen flex flex-col bg-[#2C3E50]">
      {/* Hero Section */}
      <div className="flex items-center justify-center bg-[#34495E] text-white py-16">
        <div className="text-center">
          <h1 className="text-4xl font-bold mb-4">Soil Analysis & Health Monitoring</h1>
          <p className="text-lg max-w-2xl mx-auto">
            Discover insights about soil health and quality through our advanced analysis tools. 
            Optimize farming, gardening, and environmental conservation with data-driven decisions.
          </p>
        </div>
      </div>
      
      {/* Features Section */}
      <div className="container mx-auto py-12 px-6">
        <h2 className="text-3xl font-bold text-center mb-8 text-white">Key Features</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="bg-[#3B4C66] p-6 shadow-lg rounded-lg text-white">
            <h3 className="text-xl font-semibold mb-2">Soil Testing</h3>
            <p>Analyze pH levels, moisture content, and essential nutrients for optimal plant growth.</p>
          </div>
          <div className="bg-[#3B4C66] p-6 shadow-lg rounded-lg text-white">
            <h3 className="text-xl font-semibold mb-2">AI-Based Insights</h3>
            <p>Utilize AI-powered predictions to enhance soil fertility and prevent degradation.</p>
          </div>
          <div className="bg-[#3B4C66] p-6 shadow-lg rounded-lg text-white">
            <h3 className="text-xl font-semibold mb-2">Sustainable Solutions</h3>
            <p>Get recommendations for eco-friendly soil management practices.</p>
          </div>
        </div>
      </div>
      
      {/* Sample Predicted Data */}
      <div className="container mx-auto py-12 px-6">
        <h2 className="text-3xl font-bold text-center mb-8 text-white">Sample Predicted Data</h2>
        <div className="bg-[#3B4C66] p-6 shadow-lg rounded-lg text-white">
          <table className="w-full border-collapse border border-gray-200">
            <thead>
              <tr className="bg-[#1F2A38]">
                <th className="border border-gray-400 px-4 py-2">Parameter</th>
                <th className="border border-gray-400 px-4 py-2">Value</th>
                <th className="border border-gray-400 px-4 py-2">Status</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="border border-gray-400 px-4 py-2">pH Level</td>
                <td className="border border-gray-400 px-4 py-2">6.5</td>
                <td className="border border-gray-400 px-4 py-2 text-green-400">Optimal</td>
              </tr>
              <tr>
                <td className="border border-gray-400 px-4 py-2">Moisture</td>
                <td className="border border-gray-400 px-4 py-2">45%</td>
                <td className="border border-gray-400 px-4 py-2 text-yellow-400">Moderate</td>
              </tr>
              <tr>
                <td className="border border-gray-400 px-4 py-2">Nitrogen</td>
                <td className="border border-gray-400 px-4 py-2">30 mg/kg</td>
                <td className="border border-gray-400 px-4 py-2 text-red-400">Low</td>
              </tr>
              <tr>
                <td className="border border-gray-400 px-4 py-2">Phosphorus</td>
                <td className="border border-gray-400 px-4 py-2">50 mg/kg</td>
                <td className="border border-gray-400 px-4 py-2 text-green-400">Optimal</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
      
      {/* Call to Action */}
      <div className="text-center py-12 bg-[#1F2A38] text-white">
        <h2 className="text-2xl font-bold mb-4">Start Analyzing Your Soil Today!</h2>
        <button className="bg-white text-[#2C3E50] px-6 py-2 rounded-lg font-semibold hover:bg-gray-300">
          Get Started
        </button>
      </div>
    </div>
  );
};

export default Home;