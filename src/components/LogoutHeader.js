import React from "react";

export default function LogoutHeader()
{
    return (
        <div style={styles.headerContainer}>
            <h2 style={{ margin: 10 }}><a href="/" style={{ color: 'black', textDecoration: 'none' }}>Save Energy</a></h2>
            <div style={styles.auth}>
                {/* <a href="signup" style={styles.signInSignUpLogOutBtn}> */}
                {/* Sign Up */}
                {/* </a> */}
                {/* <a href="signin" style={styles.signInSignUpLogOutBtn}> */}
                {/* Login */}
                {/* </a> */}
                <a href="logout" style={styles.signInSignUpLogOutBtn}>Log out</a>

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
        borderRadius: "10px"
    },
    auth: {
        display: "flex",
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-around"

    },
    signInSignUpLogOutBtn: {
        backgroundColor: "#4CAF50",
        textDecoration: "none",
        color: "black",
        padding: 10,
        margin: 10,
        fontFamily: "Times new Roman",
        borderRadius: "6px",
        cursor: "pointer",

    }
};
