import React, { useState,useEffect } from 'react';
import Header from '../components/Header';
import OnSale from '../components/home-components/OnSale'

export default function Home(){
    const checkData=(x)=>{
        if(x===null&&x===undefined&&x===''){return false}
        return true;
    }
    const [saleData, setSaleData] = useState([{ name: 'Naruto Uzumaki', units: '100', price: '7$' }, { name: 'Sasuke Uchiha', units: '75', price: '15$' }, { name: 'Kakashi Hatake', units: '60', price: '12$' }, { name: 'Asuma Sarutobi', units: '75', price: '8$' }, { name: 'Minato Namikaze', units: '120', price: '10$' }, { name: 'Hashirama Senju', units: '500', price: '5$' }, { name: 'Madara Uchiha', units: '500', price: '6$' }, { name: 'Izuna Uchiha', units: '100', price: '7$' }, { name: 'Tobirama Senju', units: '100', price: '6.5$' }]);
    const [email,setEmail]=useState('');
    const [id,setId]=useState('');
    const [wallet,setWallet]=useState('');
    useEffect(()=>{
        var id = localStorage.getItem('id');
        var email = localStorage.getItem('email');
        var wallet = localStorage.getItem('wallet');
        if(checkData(id)||checkData(email)||checkData(wallet)){
            setEmail(email);setId(id);setWallet(wallet);
        }
    },[])
    return <div>
        <Header />
        {email!==''&&id!==''&&wallet!==''?(<div style={{display:'flex',flexDirection:'row',justifyContent:'space-between',paddingLeft:40,paddingRight:40}}><h2>Email : {email}</h2><h2>Wallet : {wallet}</h2></div>):(<></>)}
        <h1 style={styles.buyElecToday}>Buy Electricity Today</h1>
        <div style={styles.backGround}>
            <div style={{ display: 'flex', justifyContent: 'space-around', flexDirection: 'row', flexWrap: 'wrap' }}>
                {saleData.map((item, index) => (
                    <OnSale name={item.name} units={item.units} price={item.price} key={index} />
                ))}
            </div>
        </div>
        {/* <h3> Hello Samit </h3> */}

    </div>
}

const styles = {
    buyElecToday: {
        fontFamily: 'monospace',
        backgroundColor: "#4CAF50",
        color: "black",
        padding: "12px 20px",
        width: "40%",
        margin: "15px 4px",
        textAlign: "center",
        borderRadius: "4px",
    },
    backGround: {
        borderRadius: "5px",
        backgroundColor: "#f2f2f2",
        padding: 10,
        margin: "20px 10px 15px 4px",
    }
}