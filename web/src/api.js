import axios from "axios";

export async function getPrediction(formData) {
  const response = await axios.post("http://localhost:8000/predict", formData);
  return response.data.prediction
}
