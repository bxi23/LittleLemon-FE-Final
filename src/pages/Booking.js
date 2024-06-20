import React from "react";
import BookingForm from "../components/FeildComps/BookingForm";
import "../components/Home.css";
import {useFormik} from 'formik';
import {useState} from 'react';
import * as Yup from "yup";
import restaurant from "../Assets/restaurant.jpg";
import { updateTimes } from "../components/reducers/updateTimes";

import { useNavigate } from "react-router-dom";


const Booking = ({times = false}) => {
    const imgSection = {
        display:'flex',
        flexDirection:'column',
        alignItems:'center',
        justifyContent:'center',
        backgroundColor: '#495E57',
        padding:'50px',
    }
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
    //Refrenced with chat gpt
    // Get today's date in YYYY-MM-DD format
    const today = new Date().toISOString().split('T')[0];

    // Get the date one month from today
    const nextMonth = new Date();
    nextMonth.setMonth(nextMonth.getMonth() + 1);
    const maxDate = nextMonth.toISOString().split('T')[0];

    // Function to get the formatted date
    const getFormattedDate = (dateString) => {
    const date = new Date(dateString);
    const days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
    const dayOfWeek = days[date.getDay()];
    const dayOfMonth = date.getDate();
    const suffix = getDaySuffix(dayOfMonth);
    return `${dayOfWeek} the ${dayOfMonth}${suffix}`;
    };

    // Function to get the suffix for the day of the month (st, nd, rd, th)
    const getDaySuffix = (day) => {
    if (day >= 11 && day <= 13) {
        return 'th';
    }
    switch (day % 10) {
        case 1:
        return 'st';
        case 2:
        return 'nd';
        case 3:
        return 'rd';
        default:
        return 'th';
    }
    };

    const formStyle = {
        display:'flex',
        justifyContent:'center',
        alignItems:'center',
        padding:'2.5%',
    }

    // const [validReservation, setValidReservation] = useState(null);
    const navigate = useNavigate();

    const formik = useFormik({
        initialValues: {
            name: '',
            date: today,
            time: '',
            guests: '1',
            occasion: ''
        },
        validationSchema: Yup.object({
            name: Yup.string().required('Required'),
            time: Yup.string().required('Required'),
            date: Yup.string().required('Required'),
            guests: Yup.number().required('Required').min(1, 'At least 1 guest'),
            occasion: Yup.string(), // No need to require a change
        }),
        onSubmit: values => {
            console.log(values);
            // handle form submission, maybe send to an API
            const formattedDate = getFormattedDate(values['date']);

            // Old Code from before I had a seperate confirmation page
            // setValidReservation(`Reservation for ${values['name']} on ${formattedDate} at ${values['time']} for ${values['guests']} `);

            // console.log(validReservation);
            const msg = `Reservation for ${values['name']} on ${formattedDate} at ${values['time']} for ${values['guests']} `;
            formik.resetForm();
            
            navigate(`/bookingConfirmed`, {state: {values, message: msg}});
        },
    });

        // Log date whenever it changes
        // React.useEffect(() => {
        // console.log('Date changed:', formik.values.date);
        // console.log(window.fetchAPI(formik.values.date));
        // }, [formik.values.date]
        // );

    return (
        <page>
           <div className='Image' style={imgSection}>
                <h1>Reservations</h1>
                <img src={restaurant} alt='restaurant' style={imgStyle}></img>
            </div>

            <section className="form" style={{padding:'5%'}}>
                <h1 style = {{textAlign:'center'}}>Book Now</h1>
                <section className="BookingForm" style = {formStyle}>
                    {/* This script will provide times for any given date */}
                    {/* uploads a mock api script to the project */}
                    <BookingForm formik={formik} availableTimes={updateTimes(times, formik.values.date)}/>
            </section>
            {/* <p style={{textAlign: 'center'}}>{validReservation? validReservation: null}</p> */}
        </section>
        </page>
    )
}

export default Booking;