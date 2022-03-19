import React from 'react';
import LogoutHeader from '../components/LogoutHeader';


export default function Wallet()
{
    return (
        <div>
            <LogoutHeader />
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