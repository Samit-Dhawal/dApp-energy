import React,{useState,useEffect} from 'react';
import Header from '../components/Header';


export default function Wallet(){
    const [email,setEmail] = useState('');
    const [id,setId]=useState('');
    const [wallet,setWallet]=useState('');
    const checkData=(x)=>{
        if(x===null||x===undefined||x===''){return false}
        return true;
    }
    useEffect(()=>{
        var id = localStorage.getItem('id');
        var email = localStorage.getItem('email');
        var wallet = localStorage.getItem('wallet');
        if(checkData(id)&&checkData(email)&&checkData(wallet)){
            setId(id);setEmail(email);setWallet(wallet);
        }else{
            window.location.href="signin";
        }
    })
    return (
        <div>
            <Header />
            <div style={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-between', padding: 20 }}>
                <h2>{email}</h2><h2>Wallet : {wallet}$</h2>
            </div>
            <form style={styles.formOnly}>
                <label style={styles.label}>Add Money:</label><br />
                <input type="text" name="wallet" style={styles.input} placeholder='Add money to your wallet' size="40" />
                <br />
                <br />
                <input type="submit" value="Submit" style={styles.submit} />
            </form>
        </div>
    )
}


const styles = {
    formOnly: {
        borderRadius: "5px",
        backgroundColor: "#f2f2f2",
        padding: 20,
        margin: "20px 5px",
    },
    input: {
        padding: "12px 20px",
        width: "50%",
        margin: "8 0",
        border: "1px solid #ccc",
        borderRadius: "4px",
        fontFamily: "Verdana"
    },
    submit: {
        backgroundColor: "#4CAF50",
        color: "black",
        padding: "12px 20px",
        width: "29%",
        borderRadius: "4px",
        cursor: "pointer",
        fontFamily: "Verdana"
    },
    label: {
        fontFamily: "Times new Roman"

    }

};