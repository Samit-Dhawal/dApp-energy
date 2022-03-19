import LogoutHeader from '../components/LogoutHeader';
import Holdings from '../components/profile-components/Holdings';
import Transaction from '../components/profile-components/Transaction';

export default function Profile()
{
    var holdings = [{ units: 100, price: '10$' }, { units: 120, price: '6$' }, { units: 150, price: '12$' }, { units: 200, price: '10$' }, { units: 150, price: '12$' }]
    var transactions = [{ from: 'harshkumar093@gmail.com', to: "samitdhawal10@gmail.com", units: '40', total: '280$' }, { from: 'samitdhawal10@gmail.com', to: "harshkumar093@gmail.com", units: '20', total: '100$' },
    { from: 'samitdhawal10@gmail.com', to: "harshkumar093@gmail.com", units: '25', total: '100$' }, { from: 'harshkumar093@gmail.com', to: "samitdhawal10@gmail.com", units: '100', total: '300$' },]
    return (
        <>
            <LogoutHeader />
            <div style={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-between', padding: 20 }}>
                <h2>harshkumar093@gmail.com</h2><h2>Wallet : 100$</h2>
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

