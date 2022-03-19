import React from "react";

export default function Header()
{
    return (
        <div style={styles.headerContainer}>
            <h2 style={{ margin: 10 }}><a href="/" style={styles.logo}>Save Energy</a></h2>
            <div style={styles.authModule}>
                <a href="signup" style={styles.signinSignUpBtn}>
                    Sign Up
                </a>
                <a href="signin" style={styles.signinSignUpBtn}>
                    Sign In
                </a>

            </div>
        </div>
    );
}

const styles = {
    headerContainer: {
        display: "flex",
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between",
        fontFamily: "monospace",
        backgroundColor: "#aaa",
        borderRadius: "4px",
        margin: "1px 4px",

    },
    logo: {
        textDecoration: 'none',
        backgroundColor: "#4CAF50",
        borderRadius: "4px",
        padding: 10,
        color: "black"


    },
    authModule: {
        display: "flex",
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-around"

    },
    signinSignUpBtn: {
        backgroundColor: "#4CAF50",
        textDecoration: "none",
        color: "black",
        margin: 10,
        fontFamily: "Monaco",
        cursor: "pointer",
        border: "0.5px solid white",
        borderRadius: "4px",
        padding: 10,

    }
};
