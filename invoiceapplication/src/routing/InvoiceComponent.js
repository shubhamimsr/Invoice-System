import React, { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
// import { CustomerInvoice } from "./CustomerInvoice";

// import bill from "../images/bill.png";

export const Invoice = () => {

    const [getinvoicedata, setinvoicedata] = useState([])

    const navigate = useNavigate();
    useEffect(function () {
        GetInvoiceDetails();
    }, []);

    const GetInvoiceDetails = () => {
        axios({
            url: "http://localhost:9090/api/invoicedetails",
            method: 'get',
            contentType: 'application/json',
        }).then(e => {
            setinvoicedata(e.data);

        })
    }

    const Invoice = (p) => {
        var invoice_id = p;
        localStorage.setItem("invoice_id", invoice_id)
        navigate("/CustomerInvoice/" + invoice_id)
    }
    return (
        <div>
            <div className="container-fluid">
                <div className="card   mt-3" >
                    <div className="card-body d-flex ">
                        <div className="">
                            <div className="card-title">
                                <span class="fa fa-credit-card" aria-hidden="true"
                                    style={{
                                        color: "white", borderRadius: "10px", fontSize: "3.5rem", border: "1px solid black"
                                        , padding: "0.5rem", boxShadow: "2px 2px grey"
                                    }}></span>

                            </div>
                        </div>
                        &nbsp; &nbsp; &nbsp;
                        <div >
                            <h3 className="card-text"><b>Invoice Section</b></h3>
                            <p className="card-text">You Can Buy Product</p>
                        </div>
                    </div>
                </div>
                <div className="card   mt-3" >
                    <div className="card-body d-flex ">
                        <div className="container-fluid" style={{ height: "500px", overflowY: "scroll" }}>
                            <table className="table table-bordered table-striped">
                                <thead>
                                    <th>Invoice Id </th>
                                    <th>Customer Name</th>
                                    <th>Customer ID</th>
                                    {/* <th>Invoice Date </th> */}
                                    {/* <th>Email address</th>
                                    <th>Mobile Number</th> */}
                                    <th>Total</th>
                                    <th>Paid</th>
                                    <th>Remaining</th>
                                    <th>Date</th>
                                    <th>Action</th>
                                </thead>
                                <tbody>
                                    {
                                        getinvoicedata.map((d, k) => (
                                            <tr key={k}>
                                                <td>{d.invoice_id}</td>
                                                <td>{d.customer_name}</td>
                                                <td>{d.customer_id}</td>
                                                <td>{d.total_amount}</td>
                                                <td>{d.paid_amount}</td>
                                                <td>{d.remaining_amount}</td>
                                                <td>{d.invoice_date}</td>
                                                <td >
                                                    <div >
                                                        <button style={{ border: "none", fontSize: "15px" }} onClick={() => Invoice(d.invoice_id)}>
                                                            <i className="fa fa-eye">View Invoice</i>
                                                        </button>
                                                    </div>

                                                </td>
                                            </tr>
                                        ))
                                    }
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}