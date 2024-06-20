import React from 'react';
import { useLocation } from 'react-router-dom';
import  "../components/Home.css";

import restaurant from "../Assets/restaurant.jpg";


const ConfirmedBooking = () => {
    const sectionStyle = {
        padding: '20%'
    };

    const imgStyle = {
        width:'100%',
        objectFit:'cover',
        height:'100%',
        width:'60%',
        maxHeight:'300px',
        maxWidth:'600px',
        border:'2px solid black',
        borderRadius:'15px',
    }

    const imgSection = {
        display:'flex',
        flexDirection:'column',
        alignItems:'center',
        justifyContent:'center',
        backgroundColor: '#495E57',
        padding:'50px',
    }

    const location = useLocation();
    console.log(location);
    const data = location.state.values || {};  // Fallback to empty object if state is undefined
    // console.log(data);
    const msg = location.state.message || null;


    return (
        <page>
            <section className='imgSection' style={imgSection}>
                <img src={restaurant} style={imgStyle}/>
            </section>
            <section style={sectionStyle}>
                <h1 style = {{textAlign:"center"}}>Confirmed Booking</h1>
                {msg ? (
                    <div>
                        <h2 style={{textAlign:"center", padding: '5%'}}> {msg}</h2>
                    </div>
                ) : (
                    <p>Something went wrong</p>
                )}
            </section>
        </page>
    );
}

export default ConfirmedBooking;
