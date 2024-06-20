import chef from '../Assets/restaurant chef B.jpg';
import kitchen from '../Assets/Mario and Adrian A.jpg';
import './Home.css';

const About = () => {

    const boxStyle={
        backgroundColor: 'white',
        // height: '406px',
        width:'100%',
        height:'500px',
    }
    const main = {
        display: 'flex',
        flexDirection: 'row',
        justifyContent:'center',
        gap:'5%',
        height:'80%',
    }

    const textArea = {
        display: 'flex',
        flexDirection:'column',
        // justifyContent:'',
        width: '25%',
        maxWidth:'400px',
    }

    const imgStyle ={
        position:'center',
        height:'75%',
        width:'55%',
        objectFit: 'cover',
        borderRadius:'15px',
        border:'2px solid black',

    }
    const imgPos1 = {
        position: 'relative',
        top:'15%',
        left:'0',
    }

    const imgPos2 = {
        position: 'relative',
        top:'0',
        left:'-10%',
    }
    const imgSection = {
        display:'flex',
        flex:'row',
        justifyContent:'center',
        alignItems:'center',
        width:'55%',
        maxWidth:'500px',
    }

    // const h1 = {
    //     margin:'0em',
    //     marginTop: '0em',
    //     marginBottom: '0em',
    //     color:'#F4CE14',
    //     fontFamily: 'Marzaki Text',
    //     // fontSize: '64pt',
    //     fontWeight: 'medium',
    // }

    // const h2 = {
    //     margin:'0em',
    //     marginTop:'0em',
    //     marginBottom:'0em',
    //     color: 'black',
    //     fontFamily: 'Karla',
    //     fontWeight:'bold',
    // }

    return (
        <div className="box" style={boxStyle}>
            <div style = {main}>
                <div style={textArea}>
                    <h1 >Little Lemon</h1>
                    <h2>Chicago</h2>
                    <p>
                    Nestled in the heart of Chicago, Little Lemon Restaurant offers a delightful culinary experience that combines the vibrant flavors of Mediterranean cuisine with a cozy, welcoming atmosphere. Known for its fresh, locally-sourced ingredients and innovative dishes, Little Lemon provides a perfect dining destination for both casual meals and special occasions. Whether you're indulging in a flavorful mezze platter, savoring a perfectly grilled piece of seafood, or enjoying a refreshing glass of sangria, Little Lemon promises a memorable gastronomic journey that captures the essence of the Mediterranean right in the bustling city of Chicago.
                    </p>
            </div>
            <div style={imgSection}>
                <img src={chef} style={Object.assign({}, imgStyle, imgPos1)} alt='chef'></img>
                <img src={kitchen} style={Object.assign({}, imgStyle, imgPos2)} alt='chefs'></img>
            </div>
        </div>
    </div>
    )
}

export default About;