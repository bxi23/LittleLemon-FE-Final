const styles= {
    std: {
        backgroundColor: '#F4CE14',
        width:'150px',
        height:'40px',
        borderRadius: '12px',
        fontWeight: 'bold',
        fontFamily: 'Karla',
    }
}
const BasicButton = ({text,style="std" ,onClick}) =>{
    return (
        <div>
            <button type="button" style={styles[style]} onClick={onClick}>{text}</button>
        </div>
    )
}
export default BasicButton;