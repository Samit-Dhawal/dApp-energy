import React from 'react';
import Header from '../components/Header'

export default function SignIn()
{
    return <div>
        <Header />
        <h1 style={styles.signInHere}>Sign In Here</h1>

        <form style={styles.formOnly}>
            <label style={styles.label}>Email:</label><br />
            <input type="email" name="email" style={styles.input} placeholder="Enter your email address" />
            <br /><br />
            <label style={styles.label}>Password:</label><br />
            <input type="password" name="password" style={styles.input} placeholder="Enter password" />
            <br />
            <input type="submit" value="Submit" style={styles.submit} />
        </form >
    </div >
}


const styles = {
    signInHere: {
        fontFamily: 'monospace',
        backgroundColor: "#4CAF50",
        color: "black",
        padding: "12px 20px",
        width: "40%",
        margin: "15px 4px",
        textAlign: "center",
        borderRadius: "4px",
    },
    formOnly: {
        borderRadius: "5px",
        backgroundColor: "#f2f2f2",
        padding: 20,
        margin: 20,
    },
    input: {
        padding: "12px 20px",
        width: "50%",
        margin: "8 0",
        border: "1px solid #ccc",
        fontFamily: "Verdana",
        borderRadius: "4px",
    },
    submit: {
        backgroundColor: "#4CAF50",
        color: "black",
        padding: "12px 20px",
        width: "29%",
        margin: "8px 0",
        cursor: "pointer",
        fontFamily: "Verdana",
        borderRadius: "4px",
    },
    label: {
        fontFamily: "Times new Roman"

    }

};