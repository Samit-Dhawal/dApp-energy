export default function OnSale({ name, units, price })
{
    return (
        <div style={styles.contianer}>
            <div style={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-between' }}>
                <h2>Seller : {name}</h2><button>Buy</button>
            </div>
            <br />
            <hr />
            <br />
            <div style={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-between' }}>
                <h3>Units : {units}</h3><h3>Price/Unit : {price}</h3>
            </div>
        </div>
    )
}

const styles = {
    contianer: {
        display: 'inline-block',
        border: '1px solid gray',
        width: '28%',
        padding: 20,
        fontFamily: 'monospace',
        margin: 10,
        borderRadius: "4px"
    },
}