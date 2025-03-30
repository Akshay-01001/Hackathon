from fastapi import FastAPI
from pydantic import BaseModel
import joblib
import numpy as np
from fastapi.middleware.cors import CORSMiddleware


# origins = [
#     "http://localhost:5173",  # Vite Dev Server
#     "http://127.0.0.1:5173",  # Alternative local address
# ]

# Load the trained model
model = joblib.load("soil_random_forest.pkl")

# Define FastAPI app
app = FastAPI()

# Add CORS middleware
app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],  # Allowed origins
    allow_credentials=True,  # Allow cookies (if needed)
    allow_methods=["*"],  # Allow all HTTP methods (GET, POST, PUT, DELETE)
    allow_headers=["*"],  # Allow all headers
)

# Input schema
class SoilSample(BaseModel):
    Moist: float
    Capacitity_Moist: float
    Temp: float
    Ph: float
    EC: float
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

@app.post("/predict")
def predict_nutrients(sample: SoilSample):
    # Convert input data to NumPy array in the correct order
    input_features = np.array([
        sample.Moist, sample.Capacitity_Moist, sample.Temp, sample.Ph, sample.EC,
        sample.nm_410, sample.nm_435, sample.nm_460, sample.nm_485, sample.nm_510,
        sample.nm_535, sample.nm_560, sample.nm_585, sample.nm_610, sample.nm_645,
        sample.nm_680, sample.nm_705, sample.nm_730, sample.nm_760, sample.nm_810,
        sample.nm_860, sample.nm_900, sample.nm_940
    ]).reshape(1, -1)  # Reshape for prediction

    # Predict nutrient levels
    prediction = model.predict(input_features)[0]

    return {
        "Nitrogen": prediction[0],
        "Phosphorus": prediction[1],
        "Potassium": prediction[2]
    }