import React from 'react';
import image from '../Assets/restauranfood.jpg';
import BasicButton from '../Assets/BasicButton';
import { useNavigate } from 'react-router-dom';
import './Home.css';

const Header = () => {
    const head = {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center', //centers items vertically 
        backgroundColor: '#495E57',
        height: '406px',
        gap: '15%',
    };

    const textArea = {
        display: 'flex',
        flexDirection: 'column',
        width: '35%',
        maxWidth: '400px',
    };

    const imgStyle = {
        width: '35%',
        height: '75%',
        objectFit: 'cover',
        borderRadius: '15px',
        border: '2px solid black',
        maxHeight: '325px',
        maxWidth: '375px',
    };

    const buttonDiv = {
        paddingTop: '15px',
    };
    

    const navigate = useNavigate();

    const handleClick = () => {
        navigate('/reserve');
    };

    return (
        <header className="header" style={head}>
            <div className="textArea" style={textArea}>
                <h1>Little Lemon</h1>
                <h2>Chicago</h2>
                <p>
                    We are a family owned Mediterranean restaurant, focused on traditional recipes served with a modern twist
                </p>
                <div className="buttonDiv" style={buttonDiv}>
                    <BasicButton text="Reserve a Table" onClick={handleClick} />
                </div>
            </div>
            <img src={image} alt="food" style={imgStyle} />
        </header>
    );
};

export default Header;
