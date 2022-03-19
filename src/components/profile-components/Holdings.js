export default function Holdings({units,price}){
    return(
        <div style={styles.container}>
            <h2>Units : {units}</h2><h2>Price/Unit : {price}</h2><p></p><button>X</button>
        </div>
    )
}

const styles={
    container:{
        display:'flex',
        flexDirection:'row',
        border:'2px solid gray',
        padding:10,margin:10,
        justifyContent:'space-between'
    }
}