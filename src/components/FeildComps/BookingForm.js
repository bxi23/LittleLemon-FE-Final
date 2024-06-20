import React from 'react';
import { initializeTimes } from '../reducers/initializeTimes';

const BookingForm = ({ formik, availableTimes = null }) => {

        // defaults times if not set from the booking screen
      const timesArray = [
        "17:00",
        "18:00",
        "19:00",
        "20:00",
        "21:00",
        "22:00"
      ];
      if ( availableTimes == null) availableTimes = timesArray;

    const formStyle = {
        display: 'grid',
        maxWidth: '200px',
        gap: '20px'
    };

    const errorStyle = {
        color: 'red',
        fontSize: '12px',
        marginTop: '5px',
        textAlign: 'center',
        width: '100%',
      };

    return (
        <form onSubmit={formik.handleSubmit} style={formStyle}>
            <label htmlFor="name">Enter Name</label>
            <input
                type="text"
                id="name"
                name="name"
                onChange={formik.handleChange}
                value={formik.values.name}
                onBlur={formik.handleBlur}
            />
            {formik.touched.name && formik.errors.name ? (
            <div style={errorStyle}> {formik.errors.name}</div>
            ) : null}

            <label htmlFor="date">Choose date</label>
            <input
                type="date"
                id="date"
                name="date"
                onChange={formik.handleChange}
                value={formik.values.date}
                onBlur={formik.handleBlur}
            />
            {formik.touched.date && formik.errors.date ? (
            <div style={errorStyle}> {formik.errors.date}</div>
            ) : null}
            
            <label htmlFor="time">Choose time</label>
            <select
                id="time"
                name="time"
                onChange={formik.handleChange}
                value={formik.values.time}
                onBlur={formik.handleBlur}
            >
                {/* <option value="" label="Select time" />
                <option value="17:00" label="17:00" />
                <option value="18:00" label="18:00" />
                <option value="19:00" label="19:00" />
                <option value="20:00" label="20:00" />
                <option value="21:00" label="21:00" />
                <option value="22:00" label="22:00" /> */}
                <option value="" label="Select time" />
                {initializeTimes(availableTimes)}
            </select>
            {formik.touched.time && formik.errors.time ? (
            <div style={errorStyle}> {formik.errors.time}</div>
            ) : null}
            
            <label htmlFor="guests">Number of guests</label>
            <input
                type="number"
                id="guests"
                name="guests"
                min="1"
                max="10"
                onChange={formik.handleChange}
                value={formik.values.guests}
                onBlur={formik.handleBlur}
            />
            {formik.touched.guests && formik.errors.guests ? (
            <div style={errorStyle}> {formik.errors.guests}</div>
            ) : null}
            
            <label htmlFor="occasion">Occasion</label>
            <select
                id="occasion"
                name="occasion"
                onChange={formik.handleChange}
                value={formik.values.occasion}
                onBlur={formik.handleBlur}
            >
                <option value="" label="No Occasion" />
                <option value="Birthday" label="Birthday" />
                <option value="Anniversary" label="Anniversary" />
            </select>
            {formik.touched.occasion && formik.errors.occasion ? (
            <div style={errorStyle}> {formik.errors.occasion}</div>
            ) : null}
            
            <input type="submit" value="Make Your reservation" />
        </form>
    );
};

export default BookingForm;
