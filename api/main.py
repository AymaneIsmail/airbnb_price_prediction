from typing import Union

import joblib
import pandas as pd

from fastapi import FastAPI, HTTPException
from fastapi.middleware.cors import CORSMiddleware
from pydantic import BaseModel

model = joblib.load("../models/random_forest.joblib")

app = FastAPI()

origins = [
    "http://localhost",
    "http://localhost:5173",
]

app.add_middleware(
    CORSMiddleware,
    allow_origins=origins,
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

class PredictionRequest(BaseModel):
    neighbourhood: str
    room_type: str
    accommodates: int
    bathrooms: float	
    bedrooms: float	
    beds: int	
    amenities: int	
    availability_365: int

@app.get("/")
def read_root():
    return {"Hello": "World"}

@app.post("/predict")
async def predict(request: PredictionRequest):
    try:
        # Convertir la requête en DataFrame (ou format attendu par le modèle)
        input_data = pd.DataFrame([{
            "neighbourhood": request.neighbourhood,
            "room_type": request.room_type,
            "accommodates": request.accommodates,
            "bathrooms": request.bathrooms,
            "bedrooms": request.bedrooms,
            "beds": request.beds,
            "amenities": request.amenities,
            "availability_365": request.availability_365
        }])
        
        # Faire la prédiction
        prediction = model.predict(input_data)
        
        # Retourner la prédiction
        return {"prediction": prediction[0]}
    except Exception as e:
        raise HTTPException(status_code=400, detail=str(e))