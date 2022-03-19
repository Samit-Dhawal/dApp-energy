import React from "react";

export default function Header()
{
    return (
        <div style={styles.headerContainer}>
            <h2 style={{ margin: 10 }}>Save Energy</h2>
            <a href="#" style={styles.loginBtn}>
                Login
            </a>
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
    loginBtn: {
        backgroundColor: "blue",
        textDecoration: "none",
        color: "white",
        padding: 10,
        margin: 10
    }
};
