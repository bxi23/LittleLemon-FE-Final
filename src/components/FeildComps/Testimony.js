import "../Home.css";

const boxStyle = {
    width:'50%',
    border: '2px solid black',
    borderRadius:'15px',
    backgroundColor:'white',
    maxWidth:'200px',
    margin:'2.5%',
    padding:'1%',
}

const userStyle ={
    display:'flex',
    flexDirection:'row',
    alignItems:'center',
    gap:'30%',
}

const imgStyle = {
    height:'35%',
    width:'35%',
    objFit:'cover',
}
const Testimony = ({name, review, img}) => {
    return (
        <div className = "box"  style={boxStyle}>
            <div className="items">
                <h3>Rating</h3>
                <div className='user' style={userStyle}>
                    <img src={img} alt="userimg" style={imgStyle}></img>
                    <h3>{name}</h3>
                </div>
                <p>{review}</p>
            </div>
        </div>
    )
}

export default Testimony;