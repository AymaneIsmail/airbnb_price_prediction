import React from 'react';
import { Link } from 'react-router-dom';

function Navbar() {
    return (
        <nav style={{
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            padding: '10px 20px',
            backgroundColor: '#FF385C',
            color: 'white'
        }}>
            <Link to="/" style={{ textDecoration: 'none', color: 'white', fontSize: '20px' }}>
                Airbnb Predictor
            </Link>
            <div>
                <Link to="/" style={{ margin: '0 10px', textDecoration: 'none', color: 'white' }}>
                    Accueil
                </Link>
                <Link to="/form" style={{ margin: '0 10px', textDecoration: 'none', color: 'white' }}>
                    Formulaire
                </Link>
            </div>
        </nav>
    );
}

export default Navbar;
