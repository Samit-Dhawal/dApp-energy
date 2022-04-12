import React, { useState, useEffect,useReducer } from "react";
import AdminHeader from "../components/AdminHeader";
import Gun from 'gun';

const gun = Gun({
  peers: ["http://localhost:8001/gun"],
});

const initialState = {
  transactions: [],
};

function reducer(state, transaction) {
  return {
    transactions: [transaction, ...state.transactions],
  };
}

const server = "http://localhost:8001";
// const server = "/api";
export default function Admin() {
  const checkData = (x) => {
    if (x === null || x === undefined || x === "" || x.length===0) {
      return false;
    }
    return true;
  };
  const [transaction, setTransactions] = useState([]);
  const [approved, setApproved] = useState([]);
  const [notApproved, setNotApproved] = useState([]);
  const [email, setEmail] = useState("");
  const [id, setId] = useState("");
  const [state,dispatch] = useReducer(reducer,initialState);
  useEffect(async () => {
    var id = localStorage.getItem("_id");
    var email = localStorage.getItem("_email");
    if (checkData(id) && checkData(email)) {
      setEmail(email);
      setId(id);
      const transactions = gun.get("energy_share");
      transactions.on(m=>{
        dispatch({
          from:m.from,
          to:m.to,
          units:m.units,
          total:m.total,
          createdAt:m.createdAt
        })
      });
      console.log(state.transactions)
    }else{
      alert('Admin not signed in')
      alert(localStorage.getItem("_id"))
      // window.location.href="/admin-signin";
    }
    await fetch(`${server}/readTransactions`)
      .then((res) => res.json())
      .then((data) => {
        if (data.success) setTransactions(data.data);
      });
    await fetch(`${server}/readHoldings`)
      .then((res) => res.json())
      .then((data) => {
        if (data.success) setApproved(data.data);
      });
      await fetch(`${server}/readHoldingsNotActive`).then(res=>res.json()).then(data=>{
        if(data.success) setNotApproved(data.data);
      })
  }, []);
  return (
    <div>
      <AdminHeader/>
      <div className="m-3 row">
        <div className="col-6">
          <div className="col-6 p-3 h3 text-center col-md-12">
            <button
              type="button"
              className="btn-warning "
              data-bs-toggle="collapse"
              data-bs-target="#pending"
            >
              {" "}
              Pending
            </button>
          </div>
          <div
            id="pending"
            className="col-12 bg-warning text-black p-4 col-md-12"
          >
            <table
          cellSpacing={0}
          cellPadding={10}
          style={{ width: "100%", border: "1px solid black" }}
        >
          <tr
            style={{
              fontSize: 18,
              backgroundColor: "blue",
              color: "white",
            }}
          >
            <td>Email</td>
            <td>Units</td>
            <td>Price</td>
            <td>Action</td>
          </tr>
            {notApproved.map((item,index)=>(
              <tr>
                <td>{item.Email}</td>
                <td>{item.Units}</td>
                <td>{item.Price}</td>
                <td><button className="btn btn-success">O</button></td>
              </tr>
            ))}
            </table>
          </div>
        </div>
        <div className="col-6">
          <div className="col-6 p-3 h3 text-center col-md-12">
            <button
              type="button"
              className="btn-success"
              data-bs-toggle="collapse"
              data-bs-target="#approved"
            >
              {" "}
              Approved
            </button>
          </div>
          <div
            id="approved"
            className="col-12 bg-success text-white p-4 col-md-12"
          >
          <table
          cellSpacing={0}
          cellPadding={10}
          style={{ width: "100%", border: "1px solid black" }}
        >
          <tr
            style={{
              fontSize: 18,
              backgroundColor: "blue",
              color: "white",
            }}
          >
            <td>Email</td>
            <td>Units</td>
            <td>Price</td>
            <td>Action</td>
          </tr>
            {approved.map((item,index)=>(
              <tr>
                <td>{item.Email}</td>
                <td>{item.Units}</td>
                <td>{item.Price}</td>
                <td><button className="btn btn-danger">X</button></td>
              </tr>
            ))}
            </table>
          </div>
        </div>
      </div>
      <div>
        <div className="">
          <div className=" p-3 h3 text-center ">
            <button
              type="button"
              className="btn-info "
              data-bs-toggle="collapse"
              data-bs-target="#allTransac"
            >
              {" "}
              Transaction
            </button>
          </div>
          <div id="allTransac" className=" bg-info text-black p-4 mx-5">
            <table
              cellSpacing={0}
              cellPadding={10}
              style={{ width: "100%", border: "1px solid black" }}
            >
              <tr
                style={{
                  fontSize: 18,
                  backgroundColor: "blue",
                  color: "white",
                }}
              >
                <td>From</td>
                <td>To</td>
                <td>Units</td>
                <td>Price</td>
              </tr>
              {transaction.map((item, index) => (
                <tr>
                  <td>{item.From}</td>
                  <td>{item.To}</td>
                  <td>{item.Units}</td>
                  <td>{item.Total}</td>
                </tr>
              ))}
            </table>
          </div>
        </div>
      </div>
      <div>
        <div className="display-6">Gun JS Transactions</div>
        <table
              cellSpacing={0}
              cellPadding={10}
              style={{ width: "100%", border: "1px solid black" }}>
          <tr
          style={{
            fontSize: 18,
            backgroundColor: "blue",
            color: "white",
          }}
          >
            <td>From</td>
            <td>To</td>
            <td>Units</td>
            <td>Total</td>
            <td>CreatedAt</td>
          </tr>
        {state.transactions.map((item,index)=>(
          <tr>
            <td>{item.from}</td>
            <td>{item.to}</td>
            <td>{item.units}</td>
            <td>{item.total}</td>
            <td>{item.createdAt}</td>
          </tr>
        ))}
        </table>
      </div>
    </div>
  );
}

const styles = {
  alertTran: {
    display: "flex",
  },
};
