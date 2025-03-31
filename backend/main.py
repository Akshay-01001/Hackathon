import joblib
import numpy as np
from fastapi import FastAPI
from pydantic import BaseModel
from fastapi.middleware.cors import CORSMiddleware

# Load trained model and scaler
model = joblib.load("soil.pkl")
scaler = joblib.load("scaler.pkl")

# Define FastAPI app
app = FastAPI()

# Enable CORS
app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

# Define input schema
class SoilSample(BaseModel):
    Capacitity_Moist: float
    Temp: float
    nm_410: float
    nm_435: float
    nm_460: float
    nm_485: float
    nm_510: float
    nm_535: float
    nm_560: float
    nm_585: float
    nm_610: float
    nm_645: float
    nm_680: float
    nm_705: float
    nm_730: float
    nm_760: float
    nm_810: float
    nm_860: float
    nm_900: float
    nm_940: float

# Define output schema
class PredictionResult(BaseModel):
    Nitrogen: float
    Phosphorus: float
    Potassium: float
    Moisture: float
    Ph: float
    Electronic_Conductivity: float

@app.post("/predict", response_model=PredictionResult)
async def predict_nutrients(sample: SoilSample):
    # Convert input data to NumPy array
    input_features = np.array([
        sample.Capacitity_Moist, sample.Temp, sample.nm_410, sample.nm_435,
        sample.nm_460, sample.nm_485, sample.nm_510, sample.nm_535,
        sample.nm_560, sample.nm_585, sample.nm_610, sample.nm_645,
        sample.nm_680, sample.nm_705, sample.nm_730, sample.nm_760,
        sample.nm_810, sample.nm_860, sample.nm_900, sample.nm_940
    ]).reshape(1, -1)

    # Scale input features
    input_scaled = scaler.transform(input_features)

    # Make prediction
    prediction = model.predict(input_scaled)[0]

    return {
        "Nitrogen": float(prediction[0]),
        "Phosphorus": float(prediction[1]),
        "Potassium": float(prediction[2]),
        "Moisture": float(prediction[3]),
        "Ph": float(prediction[4]),
        "Electronic_Conductivity": float(prediction[5])
    }