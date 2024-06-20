import restaurant from "../Assets/restaurant.jpg";
import "./Home.css";

const Footer = () =>{
    const footerStyle={
        width:'100%',
        backgroundColor:'#EDEFEE',
    }
    const colStyle = {
        display:'flex',
        flexDirection:'row',
        justifyContent:'center',
        // alignItems:'center',
        padding:'30px',
        // margin:'20px',
        gap:'5%',
        height:'75%',
    }
    const column = {
        display:'flex',
        flexDirection:'column',
    }
    const imgStyle = {
        width: '20%',
        maxWidth: '150px',
        height: '%60',
        maxHeight: '300px',
        objectFit:'cover',

        border:'1px solid black'
    }
    return(
        <footer style={footerStyle}>
            <div classNames='columns' style={colStyle}>
                <img src={restaurant} style={imgStyle} alt="view of restaurant"></img>
                <div className="Navigation" style={column}>
                    <h3>Doormat Navigation</h3>
                    <a href="#home">Home</a>
                    <a href="#about">About</a>
                    <a href="#menu">Menu</a>
                    <a href="#rerservations">Reservations</a>
                    <a href="#order">Order Online</a>
                    <a href="#login">Login</a>
                </div>
                <div className="Contact" style={column}>
                    <h3>Contact</h3>
                    <a href='Adress'>Adress</a>
                    <a href='#phoneNumber'>Phone Number</a>
                    <a href='#email'>Email</a>
                </div>
                <div className="SocialMedia" style={column}>
                    <h3>Social Media Links</h3>
                    <a href='Adress'>Adress</a>
                    <a href='#phoneNumber'>Phone Number</a>
                    <a href='#email'>Email</a>
                </div>
            </div>
        </footer>
    )
}

export default Footer;