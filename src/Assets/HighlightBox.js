const HighlightBox =({imgSrc, title, para, price}) => {
    const boxStyle = {
        // width: '300px',
        // height:'500px',
        width:'25%',
        padding:'10px',
        maxWidth: '300px',

    }
    const itemStyle = {
        display: 'flex',
        flexDirection:'column',
        alignItems: 'center',
        // justifyContent:'center',
        
        height:'100%',

        // borderRadius: '10px',
        border:'2px solid black',
        borderRadius:'15px',
        padding:'5px',
        backgroundColor:'#EDEFEE',
        
    }
    const topStyle ={
        display:'flex',
        flexDirection:'row',
        gap:'30px',
    }
    const imgStyle = {
        height:'35%',
        width: '100%',
        objectFit: 'cover',
    }

    const titleStyle = {

    }
    
    const priceStyle = {
        color:'#EE9972',
    }
    return (
        <div className = "box" style={boxStyle}>
            <div className="items" style={itemStyle}>
                <img src={imgSrc} style={imgStyle}></img>
                <div className="top" style={topStyle}>
                  <h3 style={titleStyle}>{title}</h3>
                  <h3 style={priceStyle}>{price}</h3>
                </div>
                <p>{para}</p>
                <h4>Order a delivery</h4> 
            </div>
        </div>

    )
}

export default HighlightBox;