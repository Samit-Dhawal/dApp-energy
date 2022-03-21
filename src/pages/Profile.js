import { useEffect, useState } from 'react';
import Header from '../components/Header';
import Holdings from '../components/profile-components/Holdings';
import Transaction from '../components/profile-components/Transaction';

export default function Profile()
{
    const [email, setEmail] = useState('');
    const [id, setId] = useState('');
    const [wallet, setWallet] = useState('');
    const checkData = (x) =>
    {
        if (x === null || x === undefined || x === '') { return false }
        return true;
    }
    useEffect(() =>
    {
        var id = localStorage.getItem('id');
        var email = localStorage.getItem('email');
        var wallet = localStorage.getItem('wallet');
        if (checkData(id) && checkData(email) && checkData(wallet))
        {
            setId(id); setEmail(email); setWallet(wallet);
        } else
        {
            window.location.href = "signin";
        }
    })
    var holdings = [{ units: 100, price: '10$' }, { units: 120, price: '6$' }, { units: 150, price: '12$' }, { units: 200, price: '10$' }, { units: 150, price: '12$' }]
    var transactions = [{ from: 'harshkumar093@gmail.com', to: "samitdhawal10@gmail.com", units: '40', total: '280$' }, { from: 'samitdhawal10@gmail.com', to: "harshkumar093@gmail.com", units: '20', total: '100$' },
    { from: 'samitdhawal10@gmail.com', to: "harshkumar093@gmail.com", units: '25', total: '100$' }, { from: 'harshkumar093@gmail.com', to: "samitdhawal10@gmail.com", units: '100', total: '300$' },]
    return (
        <>
            <Header />

            <div style={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-between', padding: 20 }}>
                <h2>{email}</h2><h2>Wallet : {wallet}$</h2>
                <form style={styles.submit}>
                    <a href="/wallet" style={styles.submit}>Add Money (+)</a>
                </form >
            </div>
            <div style={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-between', padding: 40 }}>
                <h1 style={{ fontFamily: 'monospace' }}>Your Holdings</h1>
                <button>Add new holding +</button>
            </div>
            <div style={{ paddingLeft: 60, paddingRight: 60 }}>
                {holdings.length === 0 ? (
                    <h2>Your current holding is empty, add new holding to sell electricity</h2>
                ) : (<>
                    {holdings.map((item, index) => (
                        <Holdings units={item.units} price={item.price} key={index} />
                    ))}
                </>)}
            </div>
            <h1 style={{ fontFamily: 'monospace', padding: 40 }}>Transactions</h1>
            <div style={{ paddingLeft: 60, paddingRight: 60 }}>
                {transactions.length === 0 ? (
                    <h2>Your have no transactions, buy or sell energy units now.</h2>
                ) : (<>
                    {transactions.map((item, index) => (
                        <Transaction from={item.from} to={item.to} units={item.units} total={item.total} key={index} />
                    ))}
                </>)}
            </div>
        </>
    )
}


const styles = {
    submit: {
        backgroundColor: "#4CAF50",
        color: "black",
        padding: "3px",
        margin: "1px",
        fontFamily: "Verdana",
        borderRadius: "4px",
        textDecoration: "none"
    }
};