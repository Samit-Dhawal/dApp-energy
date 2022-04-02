import { useEffect, useState } from 'react';
import Header from '../components/Header';
import Holdings from '../components/profile-components/Holdings';
import Transaction from '../components/profile-components/Transaction';
export default function Profile()
{
    const [email, setEmail] = useState('');
    const [id, setId] = useState('');
    const [wallet, setWallet] = useState('');
    const [form, setForm] = useState(false);
    const [newUnits, setNewUnits] = useState('');
    const [newPrice, setNewPrice] = useState('');
    const [error, setError] = useState(false);
    const [holdings, setHoldings] = useState([]);
    const [transactions, setTransactions] = useState([]);
    const checkData = (x) =>
    {
        if (x === null || x === undefined || x === '') { return false }
        return true;
    }
    useEffect(async () =>
    {
        var id = localStorage.getItem('id');
        var email = localStorage.getItem('email');
        var wallet = localStorage.getItem('wallet');
        if (checkData(id) && checkData(email) && checkData(wallet))
        {
            setId(id);
            setEmail(email);
            setWallet(wallet);
            await getTransactions();
            await getHoldings();
        } else
        {
            window.location.href = "signin";
        }
    }, [id, wallet, email])
    const openForm = () =>
    {
        setForm(true);
    }
    const saveHolding = async () =>
    {
        await fetch(`https://dapp-energy.herokuapp.com/createHolding?email=${ email }&id=${ id }&units=${ newUnits }&price=${ newPrice }`).then(res => res.json()).then(data =>
        {
            if (data.success)
            {
                setForm(false);
                setError(false);
                getHoldings();
            } else
            {
                setError(true);
            }
        })
    }
    const getHoldings = async () =>
    {
        await fetch(`https://dapp-energy.herokuapp.com/readHoldingById?id=${ id }`).then(res => res.json()).then(data =>
        {
            if (data.success)
            {
                setHoldings(data.data)
                console.log('holding')
                console.table(data.data);
                setError(false);
            } else
            {
                setError(true);
            }
        })
    }
    const getTransactions = async () =>
    {
        await fetch(`https://dapp-energy.herokuapp.com/readTransacionByEmail?email=${ email }`).then(res => res.json()).then(data =>
        {
            if (data.success)
            {
                setTransactions(data.data);
                console.log('transactions')
                console.table(data.data);
                setError(false);
            } else
            {
                setError(true);
            }
        })
    }
    return (
        <>
            <Header />

            <div style={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-between', padding: 20 }}>
                <h2>{email}</h2><h2>Wallet : {wallet}$</h2>
                <form style={styles.submit}>
                    <a href="/wallet" style={styles.submit}>Add Money (+)</a>
                </form >
            </div>
            <div style={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-between', padding: 20 }}>
                <h1 style={{ fontFamily: 'monospace' }}>Your Holdings</h1>
                {form ? (<div><input type="text" placeholder='Enter Units' value={newUnits} onChange={(evt => { setNewUnits(evt.target.value) })} />{"  "}<input type="text" placeholder='Enter price/unit' value={newPrice} onChange={(evt => { setNewPrice(evt.target.value) })} />{"  "}<button onClick={() => { saveHolding() }}>+</button></div>) : (
                    <button onClick={() => openForm()}>Add new holding +</button>
                )}
            </div>

            <div style={{ paddingLeft: 20, paddingRight: 20 }}>
                {error ? (<><label style={{ color: 'red', fontWeight: 800, fontSize: 20 }}>Error: Not able to add holding, try again later</label><br /></>) : (<></>)}
                {holdings.length === 0 ? (
                    <h2>Your current holding is empty, add new holding to sell electricity</h2>
                ) : (<>
                    <table cellSpacing={0} cellPadding={10} style={{ width: '100%', border: '1px solid black' }}>
                        <tr style={{ fontSize: 25, backgroundColor: 'blue', color: 'white' }}><td>Sr</td><td>Units</td><td>Price</td><td>Action</td></tr>
                        {holdings.map((item, index) => (
                            <Holdings sr={index} units={item.Units} price={item.Price} key={index} />
                        ))}
                    </table>
                </>)}
            </div>
            <h1 style={{ fontFamily: 'monospace', padding: 20 }}>Transactions</h1>
            <div style={{ paddingLeft: 20, paddingRight: 20 }}>
                {transactions.length === 0 ? (
                    <h2>Your have no transactions, buy or sell energy units now.</h2>
                ) : (<>
                    <table cellSpacing={0} cellPadding={10} style={{ width: '100%', border: '1px solid black' }}>
                        <tr style={{ fontSize: 25, backgroundColor: 'blue', color: 'white' }}><td>From</td><td>To</td><td>Units</td><td>Price</td></tr>
                        {transactions.map((item, index) => (
                            item.From === email || item.To === email ?
                                <Transaction from={item.From} to={item.To} units={item.Units} total={item.Total} key={index} /> : (<></>)
                        ))}
                    </table>
                </>)}
                <br /><br />
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