import React, { useState } from "react";

const CropRecommendation = () => {
  const [formData, setFormData] = useState({
    Moist: "132",
    Capacitity_Moist: "1123",
    Temp: "234",
    Ph: "5.2",
    EC: "3424",
    nm_410: "131",
    nm_435: "232",
    nm_460: "532",
    nm_485: "234",
    nm_510: "345",
    nm_535: "454",
    nm_560: "454",
    nm_585: "533",
    nm_610: "355",
    nm_645: "454",
    nm_680: "455",
    nm_705: "453",
    nm_730: "355",
    nm_760: "655",
    nm_810: "456",
    nm_860: "564",
    nm_900: "456",
    nm_940: "232",
  });

  const [prediction, setPrediction] = useState(null);

  // Handle input change
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  // Handle form submission
  const handleRecommendation = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch("http://127.0.0.1:8000/predict/", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (!response.ok) {
        console.log(response);
        throw new Error("Failed to fetch prediction");
      }

      const data = await response.json();
      console.log("Prediction:", data);
      setPrediction(data);
    } catch (error) {
      console.error("Error:", error);
    }
  };

  return (
    <div className="p-6 max-w-6xl mx-auto bg-white rounded-lg shadow-md">
      <h1 className="text-3xl font-bold text-center text-green-600 mb-6">
        Digital Farming 🌱
      </h1>

      <form onSubmit={handleRecommendation}>
        <div className="grid grid-cols-4 gap-4">
          {Object.keys(formData).map((key, index) => (
            <div key={index} className="mb-4">
              <label className="block text-sm font-medium text-gray-700 mb-1">
                {key}
              </label>
              <input
                type="text"
                name={key}
                value={formData[key]}
                onChange={handleChange}
                className="w-full p-2 border border-gray-300 rounded-md"
              />
            </div>
          ))}
        </div>

        <div className="mt-6 text-center">
          <button
            type="submit"
            className="px-6 py-2 bg-green-600 text-white font-medium rounded-md hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-green-500"
          >
            Get Recommendation
          </button>
        </div>
      </form>

      {prediction && (
        <div className="mt-8 p-4 bg-green-50 rounded-lg border border-green-200">
          <h2 className="text-xl font-semibold text-green-800 mb-4">
            Recommended Crop for Cultivation:
          </h2>
          <div className="grid grid-cols-3 gap-4">
            <div className="p-3 bg-white rounded shadow">
              <p className="font-medium">Nitrogen:</p>
              <p>{prediction.Nitrogen}</p>
            </div>
            <div className="p-3 bg-white rounded shadow">
              <p className="font-medium">Phosphorus:</p>
              <p>{prediction.Phosphorus}</p>
            </div>
            <div className="p-3 bg-white rounded shadow">
              <p className="font-medium">Potassium:</p>
              <p>{prediction.Potassium}</p>
            </div>
            {prediction.recommendedCrop && (
              <div className="p-3 bg-white rounded shadow col-span-3">
                <p className="font-medium">Recommended Crop:</p>
                <p>{prediction.recommendedCrop}</p>
              </div>
            )}
          </div>
        </div>
      )}
    </div>
  );
};

export default CropRecommendation;