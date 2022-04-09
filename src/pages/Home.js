import React, { useState, useEffect } from "react";
import Header from "../components/Header";
import OnSale from "../components/home-components/OnSale";

export default function Home() {
  const checkData = (x) => {
    if (x === null || x === undefined || x === "") {
      return false;
    }
    return true;
  };
  const [saleData, setSaleData] = useState([]);
  const [email, setEmail] = useState("");
  const [id, setId] = useState("");
  const [wallet, setWallet] = useState("");
  const [error, setError] = useState(false);
  useEffect(() => {
    var id = localStorage.getItem("id");
    var email = localStorage.getItem("email");
    var wallet = localStorage.getItem("wallet");
    if (checkData(id) || checkData(email) || checkData(wallet)) {
      setEmail(email);
      setId(id);
      setWallet(wallet);
      getHoldings();
    }
  }, []);
  const getHoldings = async () => {
    await fetch(`/api/readHoldings`)
      .then((res) => res.json())
      .then((data) => {
        if (data.success) {
          setSaleData(data.data);
          setError(false);
        } else {
          setError(true);
        }
      });
    console.table(saleData);
  };
  return (
    <div>
      <Header />
      {email !== "" && id !== "" && wallet !== "" ? (
        <div
          style={{
            display: "flex",
            flexDirection: "row",
            justifyContent: "space-between",
            paddingLeft: 40,
            paddingRight: 40,
          }}
        >
          <h4>Email : {email}</h4>
          <h4>Wallet : {wallet}</h4>
        </div>
      ) : (
        <></>
      )}
      <h3 style={styles.buyElecToday}>Buy Electricity Today</h3>
      <div style={styles.backGround}>
        {error ? (
          <>
            <label style={{ color: "red", fontWeight: 800, fontSize: 20 }}>
              Error: Not able to fetch holding, try again later.Try refreshing.
            </label>
            <br />
          </>
        ) : (
          <></>
        )}
        {id === "" ? (
          <>
            You are not signed In, please <a href="/signin">sign in</a> first.
            <br />
            <br />
            Don't have an account, <a href="/signup">Create an account now</a>.
          </>
        ) : (
          <div
            style={{
              display: "flex",
              justifyContent: "space-around",
              flexDirection: "row",
              flexWrap: "wrap",
            }}
          >
            {saleData.length === 0 ? (
              <h1>Loading ...</h1>
            ) : (
              <>
                {saleData.map((item, index) => (
                  <>
                    {item.Email !== email ? (
                      <>
                        <OnSale
                          name={item.Email}
                          units={item.Units}
                          price={item.Price}
                          key={index}
                        />
                      </>
                    ) : (
                      <></>
                    )}
                  </>
                ))}
              </>
            )}
          </div>
        )}
      </div>
    </div>
  );
}

const styles = {
  buyElecToday: {
    fontFamily: "monospace",
    backgroundColor: "#4CAF50",
    color: "black",
    padding: "12px 20px",
    width: "40%",
    margin: "15px 4px",
    textAlign: "center",
    borderRadius: "4px",
  },
  backGround: {
    borderRadius: "5px",
    backgroundColor: "#f2f2f2",
    padding: 10,
    margin: "20px 10px 15px 4px",
  },
};
