export default function Transaction({from,to,units,total}){
    return(
        <tr style={{fontSize:15}}>
            <td>{from}</td><td>{to}</td><td>{units}</td><td>{total}</td>
        </tr>
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