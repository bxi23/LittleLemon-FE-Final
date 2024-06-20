import React from 'react';
import BasicButton from '../Assets/BasicButton';
import HighlightBox from './FeildComps/HighlightBox';

import bruchetta from "../Assets/bruchetta.png";
import greekSalad from "../Assets/greek salad.jpg";
import lemonDesert from "../Assets/lemon dessert.jpg";

import "./Highlight.css";


const Highlights = () => {
    const headingButton = {
        display: 'flex',
        flexdirection: 'row',
        alignItems: 'center',
        justifyContent:'center',
        // gap:'55%',
    }
    const highlightsStyle = {
        display: 'flex',
        flexdirection: 'row',
        alignItems: 'center',
        justifyContent:'center',
        // gap:'5%',
    }


    const sectionStyle={
        margin:'20px',
        width:'100%',
    }
    return (
        <div className='section' style={sectionStyle}>
            <div className="heading+button" style={headingButton}>
                <h2>This weeks specials!</h2>
                <BasicButton text="Order Menu"/>
            </div>
            <div className='highlights'>
                <HighlightBox
                    imgSrc={bruchetta}
                    title="Bruchetta"
                    para="Our Bruschetta is made from grilled bread that has been smeared with garlic and seasoned with salt and olive oil.  "
                    price="$ 5.99"
                    />
                <HighlightBox
                    imgSrc={greekSalad}
                    title="Greek salad"
                    para="The famous greek salad of crispy lettuce, peppers, olives and our Chicago style feta cheese, garnished with crunchy garlic and rosemary croutons.  "
                    price="$12.99"
                />
                <HighlightBox
                    imgSrc={lemonDesert}
                    title="Lemon Dessert"
                    para="This comes straight from grandma’s recipe book, every last ingredient has been sourced and is as authentic as can be imagined. "
                    price="$5.00"
                />
            </div>
        </div>
    )
}

export default Highlights;