import React, { useState, useEffect } from "react";
import AdminHeader from "../components/AdminHeader";

// const server = "http://localhost:8001";
const server = "/api";
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
  useEffect(async () => {
    var id = localStorage.getItem("id");
    var email = localStorage.getItem("email");
    if (checkData(id) && checkData(email)) {
      setEmail(email);
      setId(id);
    }else{
      alert('Admin not signed in')
      window.location.href="/admin-signin";
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
      <div class="m-3 row">
        <div class="col-6">
          <div class="col-6 p-3 h3 text-center col-md-12">
            <button
              type="button"
              class="btn-warning "
              data-bs-toggle="collapse"
              data-bs-target="#pending"
            >
              {" "}
              Pending
            </button>
          </div>
          <div
            id="pending"
            class="col-12 bg-warning text-black p-4 col-md-12"
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
        <div class="col-6">
          <div class="col-6 p-3 h3 text-center col-md-12">
            <button
              type="button"
              class="btn-success"
              data-bs-toggle="collapse"
              data-bs-target="#approved"
            >
              {" "}
              Approved
            </button>
          </div>
          <div
            id="approved"
            class="col-12 bg-success text-white p-4 col-md-12"
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
        <div class="">
          <div class=" p-3 h3 text-center ">
            <button
              type="button"
              class="btn-info "
              data-bs-toggle="collapse"
              data-bs-target="#allTransac"
            >
              {" "}
              Transaction
            </button>
          </div>
          <div id="allTransac" class=" bg-info text-black p-4 mx-5">
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
    </div>
  );
}

const styles = {
  alertTran: {
    display: "flex",
  },
};
