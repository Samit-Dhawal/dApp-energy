export default function Transaction({from,to,units,total}){
    return(
        <div style={styles.container}>
            <h2>{from} {" -> "} {to}</h2><p>{units} units</p><p>{total}</p>
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