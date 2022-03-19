import React, { useState } from 'react';
import Header from '../components/Header';
import OnSale from '../components/home-components/OnSale'

export default function Home()
{
    const [saleData, setSaleData] = useState([{ name: 'Naruto Uzumaki', units: '100', price: '7$' }, { name: 'Sasuke Uchiha', units: '75', price: '15$' }, { name: 'Kakashi Hatake', units: '60', price: '12$' }, { name: 'Asuma Sarutobi', units: '75', price: '8$' }, { name: 'Minato Namikaze', units: '120', price: '10$' }, { name: 'Hashirama Senju', units: '500', price: '5$' }, { name: 'Madara Uchiha', units: '500', price: '6$' }, { name: 'Izuna Uchiha', units: '100', price: '7$' }, { name: 'Tobirama Senju', units: '100', price: '6.5$' }]);
    return <div>
        <Header />
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