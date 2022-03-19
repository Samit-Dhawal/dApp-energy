import React from "react";

export default function Header()
{
    return (
        <div style={styles.headerContainer}>
            <h2 style={{ margin: 10 }}>Save Energy</h2>
            <div style={styles.auth}>
                <a href="signup" style={styles.loginSignUpBtn}>
                    SignUp
                </a>
                <a href="login" style={styles.loginSignUpBtn}>
                    Login
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
        backgroundColor: "#aaa"
    },
    auth: {
        display: "flex",
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-around"

    },
    loginSignUpBtn: {
        backgroundColor: "blue",
        textDecoration: "none",
        color: "white",
        padding: 10,
        margin: 10
    }
};
