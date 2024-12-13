// pages/form.js
import React, { useState } from "react";
import {
  Container,
  TextField,
  Button,
  Typography,
  Box,
  Paper,
  MenuItem,
  Slider,
  Rating,
} from "@mui/material";
import { NEIGHBORHOODS, ROOM_TYPES, ROOM_TYPES_LABELS } from "../constants";
import { getPrediction } from "../api";

export default function FormPage() {
  const [formData, setFormData] = useState({
    neighbourhood: NEIGHBORHOODS[0],
    room_type: ROOM_TYPES[0],
    accommodates: 0,
    bathrooms: 0,
    bedrooms: 0,
    beds: 0,
    amenities: 0,
    availability_365: 0,
    ratings: 0,
  });

  const [deprecatedFormData, setDeprecatedFormData] = useState({
    number_of_reviews_ltm: "",
    review_scores_rating: 0,
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleDeprecatedChange = (e) => {
    const { name, value } = e.target;
    setDeprecatedFormData({ ...deprecatedFormData, [name]: value });
  };

  const handleSliderChange = (e, newValue) => {
    setFormData({ ...formData, accommodates: newValue });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const prediction = await getPrediction(formData)
    console.log(prediction);
  };

  return (
    <Container maxWidth="sm">
      <Box py={5}>
        <Paper elevation={3} sx={{ p: 4 }}>
          <Typography variant="h4" gutterBottom textAlign="center">
            Formulaire de Prédiction Airbnb
          </Typography>
          <Typography
            variant="body1"
            color="textSecondary"
            paragraph
            textAlign="center"
          >
            Découvrez une nouvelle manière de maximiser vos revenus locatifs
            avec notre technologie avancée.
          </Typography>
          <form onSubmit={handleSubmit}>
            <Box display="flex" flexDirection="column" gap={3}>
              <TextField
                fullWidth
                select
                label="Quartier"
                name="neighbourhood"
                value={formData.neighbourhood}
                onChange={handleChange}
                variant="outlined"
              >
                {NEIGHBORHOODS.map((neighbourhood) => (
                  <MenuItem key={neighbourhood} value={neighbourhood}>
                    {neighbourhood}
                  </MenuItem>
                ))}
              </TextField>
              <TextField
                fullWidth
                select
                label="Type de chambre"
                name="room_type"
                value={formData.room_type}
                onChange={handleChange}
                variant="outlined"
              >
                {ROOM_TYPES.map((type) => (
                  <MenuItem key={type} value={type}>
                    {ROOM_TYPES_LABELS[type]}
                  </MenuItem>
                ))}
              </TextField>
              <Box>
                <Typography gutterBottom>Nombre de personnes</Typography>
                <Slider
                  value={formData.accommodates}
                  onChange={handleSliderChange}
                  step={1}
                  marks
                  min={1}
                  max={10}
                  sx={{ mb: 2 }}
                />
                <Typography align="center" variant="body2">
                  {formData.accommodates} personnes
                </Typography>
              </Box>
              <TextField
                fullWidth
                select
                label="Nombre de salles de bain"
                name="bathrooms"
                value={formData.bathrooms}
                onChange={handleChange}
                variant="outlined"
              >
                {Array.from({ length: 5 }, (_, i) => (
                  <MenuItem key={i} value={i}>
                    {i}
                  </MenuItem>
                ))}
              </TextField>
              <TextField
                fullWidth
                select
                label="Nombre de lits"
                name="beds"
                value={formData.beds}
                onChange={handleChange}
                variant="outlined"
              >
                {Array.from({ length: 5 }, (_, i) => (
                  <MenuItem key={i} value={i}>
                    {i}
                  </MenuItem>
                ))}
              </TextField>
              <TextField
                fullWidth
                type="number"
                label="Nombre d'avis récents"
                name="number_of_reviews_ltm"
                value={deprecatedFormData.number_of_reviews_ltm}
                onChange={handleDeprecatedChange}
                variant="outlined"
              />
              <Box
                display="flex"
                flexDirection="row"
                alignItems="center"
                justifyContent="center"
                gap={2}
              >
                <Typography>Score des avis :</Typography>
                <Rating
                  name="review_scores_rating"
                  value={deprecatedFormData.review_scores_rating}
                  precision={0.5}
                  sx={{ fontSize: "3rem" }}
                  onChange={handleDeprecatedChange}
                />
              </Box>
              <TextField
                fullWidth
                type="number"
                label="Nombre de chambres"
                name="bedrooms"
                value={formData.bedrooms}
                onChange={handleChange}
                variant="outlined"
              />
              <TextField
                fullWidth
                type="number"
                label="Nombre d'équipements"
                name="amenities"
                value={formData.amenities}
                onChange={handleChange}
                variant="outlined"
              />
              <Button
                type="submit"
                variant="contained"
                color="primary"
                size="large"
              >
                Obtenir une prédiction
              </Button>
            </Box>
          </form>
        </Paper>
      </Box>
    </Container>
  );
}
