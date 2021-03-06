import React, { useState, useEffect } from "react";

export default function Header() {
  const checkData = (x) => {
    if (x === null || x === undefined || x === "") {
      return false;
    }
    return true;
  };
  const [email, setEmail] = useState("");
  const [id, setId] = useState("");
  const [wallet, setWallet] = useState("");
  useEffect(() => {
    var id = localStorage.getItem("id");
    var email = localStorage.getItem("email");
    var wallet = localStorage.getItem("wallet");
    if (checkData(id) && checkData(email) && checkData(wallet)) {
      setEmail(email);
      setId(id);
      setWallet(wallet);
    }
  },[]);
  const logout = () => {
    localStorage.setItem("id", "");
    localStorage.setItem("email", "");
    localStorage.setItem("wallet", "");
    window.location.href = "/";
  };
  return (
    <div style={styles.headerContainer}>
      <h3 style={{ margin: 10 }}>
        <a href="/" style={styles.logo}>
          Save Energy
        </a>
      </h3>
      <div style={styles.authModule}>
        {email !== "" && id !== "" && wallet !== "" ? (
          <>
            <a href="profile" style={styles.signinSignUpBtn}>
              Profile
            </a>
            <button onClick={() => logout()} style={styles.signinSignUpBtn}>
              Logout
            </button>
          </>
        ) : (
          <>
            <a href="signup" style={styles.signinSignUpBtn}>
              Sign Up
            </a>
            <a href="signin" style={styles.signinSignUpBtn}>
              Sign In
            </a>
          </>
        )}
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
    margin: "0px",
    marginBottom: 10,
  },
  logo: {
    textDecoration: "none",
    backgroundColor: "#4CAF50",
    borderRadius: "4px",
    padding: 10,
    color: "black",
  },
  authModule: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-around",
  },
  signinSignUpBtn: {
    backgroundColor: "#4CAF50",
    textDecoration: "none",
    color: "black",
    margin: 10,
    fontFamily: "Monaco",
    cursor: "pointer",
    border: "0.5px solid gray",
    borderRadius: "4px",
    padding: 10,
  },
};
