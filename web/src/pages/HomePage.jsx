import React from 'react';
import { Card, CardContent, Typography, Box } from '@mui/material';

function HomePage() {
    return (
        <Box
            sx={{
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                height: '100vh',
                backgroundColor: '#f7f7f7',
                padding: '20px',
            }}
        >
            <Card
                sx={{
                    maxWidth: 600,
                    padding: '20px',
                    boxShadow: '0px 4px 10px rgba(0, 0, 0, 0.1)',
                    borderRadius: '10px',
                }}
            >
                <Box sx={{ textAlign: 'center', marginBottom: '20px' }}>
                    <img
                        src="/src/assets/logo.png"
                        alt="Airbnb Predictor Logo"
                        style={{ height: '80px', objectFit: 'contain' }}
                    />
                </Box>
                <CardContent>
                    <Typography
                        variant="h4"
                        gutterBottom
                        sx={{ textAlign: 'center', color: '#FF385C' }}
                    >
                        Bienvenue sur Airbnb Predictor
                    </Typography>
                    <Typography
                        variant="body1"
                        sx={{
                            fontSize: '18px',
                            lineHeight: '1.8',
                            textAlign: 'center',
                            marginBottom: '20px',
                        }}
                    >
                        Notre intelligence artificielle analyse vos annonces Airbnb pour déterminer si elles sont de bonnes affaires.
                        Optimisez vos réservations dès aujourd'hui !
                    </Typography>
                    <Typography
                        variant="body1"
                        sx={{ fontSize: '18px', lineHeight: '1.8', textAlign: 'center' }}
                    >
                        Vous cherchez à savoir si votre logement correspond aux attentes des voyageurs ?
                        Notre application vous aide à analyser vos annonces Airbnb en fonction des critères essentiels :
                        localisation, prix, équipements, et bien plus. Grâce à notre outil intuitif, obtenez des conseils
                        personnalisés pour attirer plus de voyageurs et maximiser vos réservations.
                    </Typography>
                </CardContent>
            </Card>
        </Box>
    );
}

export default HomePage;
