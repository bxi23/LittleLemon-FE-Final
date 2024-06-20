import Testimony from "./FeildComps/Testimony";
import "./Testimonials.css";
import user from "../Assets/user.png";
import "./Home.css";

const Testimonials = () => {
    const boxStyle= {
        width: '100%',
        backgroundColor:'#FBDABB',
        // margin:'10px',
        padding:'25px',
        
    }
    const itemsStyle ={
        height:'100%',
        display:'flex',
        flexDirection:'column',
        justifyContent: 'center',
        alignItems: 'center',
    }

    const reviewStyle = {
        display: 'flex',
        flexDirection: 'row',
        justifyContent:'center',
        gap:'5%',
        width:'100%',
    }

    return (
        <div className="box" style={boxStyle}>
            <div className="items" style={itemsStyle}>
                <h2>Testimonials</h2>
                <div className="reviews">
                    <Testimony 
                    name="John Doe"
                    review="I had an amazing experience! The service was top-notch and exceeded my expectations. Highly recommended!"
                    img = {user}
                    />
                     <Testimony 
                    name="Jane Smith"
                    review="The quality was fantastic, and the staff were very friendly. I will definitely be coming back."
                    img = {user}
                    />
                    <Testimony 
                    name="Emily Johnson"
                    review="A wonderful experience from start to finish. The attention to detail was impressive. Thank you!"
                    img = {user}
                    />
                     <Testimony 
                    name="Micheal Brown"
                    review="Good value for money. The service was quick and efficient. I am very satisfied with my purchase."
                    img = {user}
                    />
                </div>
            </div>
        </div>
    )
}

export default Testimonials;