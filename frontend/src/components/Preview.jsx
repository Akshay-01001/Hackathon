import { GoogleGenerativeAI } from "@google/generative-ai";
import React, { useState } from "react";

const ai = new GoogleGenerativeAI(import.meta.env.VITE_GEMINI_API_KEY);

const CropRecommendation = () => {
  const [loading, setLoading] = useState(false);
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
  const [aiSuggestion, setAiSuggestion] = useState("");

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleRecommendation = async (e) => {
    e.preventDefault();

    try {
      setLoading(true);
      const response = await fetch("http://127.0.0.1:8000/predict/", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      if (!response.ok) throw new Error("Failed to fetch prediction");

      const data = await response.json();
      setPrediction(data);
      const model = ai.getGenerativeModel({ model: "gemini-1.5-flash" });
      const aiResponse = await model.generateContent({
        contents: [
          {
            role: "user",
            parts: [
              {
                text: `Based on the following soil data, suggest the best crop to cultivate. Provide a detailed, point-wise recommendation covering key aspects:

                - **Moisture Level:** ${formData.Moist}
                - **Soil pH Level:** ${formData.Ph}
                - **Electrical Conductivity (EC):** ${formData.EC}
                - **Nitrogen Level:** ${data.Nitrogen || "Unknown"}
                - **Phosphorus Level:** ${data.Phosphorus || "Unknown"}
                - **Potassium Level:** ${data.Potassium || "Unknown"}
                `,
              },
            ],
          },
        ],
      });

      const aiText = aiResponse.response.text();
      setAiSuggestion(aiText);
    } catch (error) {
      console.error("Error:", error);
    } finally {
      setLoading(false);
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
              <p>{parseFloat(prediction.Nitrogen).toFixed(2)}</p>
            </div>
            <div className="p-3 bg-white rounded shadow">
              <p className="font-medium">Phosphorus:</p>
              <p>{parseFloat(prediction.Phosphorus).toFixed(2)}</p>
            </div>
            <div className="p-3 bg-white rounded shadow">
              <p className="font-medium">Potassium:</p>
              <p>{parseFloat(prediction.Potassium).toFixed(2)}</p>
            </div>
          </div>
        </div>
      )}

      <div className="mt-8 p-6 bg-gray-50 rounded-lg border border-gray-300">
        <div className="whitespace-pre-line text-gray-700 leading-7">
          {loading ? (
            <div className="text-xl text-red-600 font-semibold">
              Generating Suggestions
            </div>
          ) : (
            <>
              <h2 className="text-2xl font-semibold text-gray-800 mb-4">
                🌱 AI-Generated Crop Recommendation:
              </h2>
              {aiSuggestion.split("\n").map((line, index) => {
                const parts = line.split("**");
                return (
                  <p key={index}>
                    {parts.map((part, i) =>
                      i % 2 === 1 ? (
                        <span key={i} className="font-semibold text-green-700">
                          {part}
                        </span>
                      ) : (
                        <span key={i}>{part}</span>
                      )
                    )}
                  </p>
                );
              })}
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default CropRecommendation;
