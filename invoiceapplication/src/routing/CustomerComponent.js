import React, { useEffect, useRef, useState } from "react";
import axios from "axios";

export const Customer = () => {
    const [getCustomerData, setCustomerData] = useState([]);
    const [showUpdateButton, setShowUpdateButton] = useState(false);
    const [showAddButton, setShowAddButton] = useState(true);

    var txtcustomerid = useRef();
    var txtcustomername = useRef();
    var txtcustomeremail = useRef();
    var txtcustomermobile = useRef();
    var txtcustomercity = useRef();

    useEffect(function () {
        GetCustomer();

    }, []);

    const GetCustomer = () => {
        axios({
            url: "http://localhost:9090/api/customer",
            method: 'get',
            contentType: 'application/json',
        }).then(e => {
            setCustomerData(e.data);

        })
    }
    const AddCustomer = () => {
        var name = txtcustomername.current.value;
        var email = txtcustomeremail.current.value;
        var mobile = txtcustomermobile.current.value;
        var city = txtcustomercity.current.value;
        var cs = { "customer_name": name, "email_address": email, "mobile_number": mobile, "city": city }
        axios({
            url: "http://localhost:9090/api/customer",
            method: 'post',
            data: cs,
            contentType: 'application/json',
        }).then(e => {
            alert("Customer Added Successfully");
            GetCustomer();
        })

    }



    const ViewCustomer = (vc) => {
        txtcustomerid.current.value = vc.customer_id;
        txtcustomername.current.value = vc.customer_name;
        txtcustomeremail.current.value = vc.email_address;
        txtcustomermobile.current.value = vc.mobile_number;
        txtcustomercity.current.value = vc.city;
        setShowAddButton(false);
        setShowUpdateButton(true);
    }

    const ClearCustomer = () => {
        txtcustomerid.current.value = " ";
        txtcustomername.current.value = " ";
        txtcustomeremail.current.value = " ";
        txtcustomermobile.current.value = " ";
        txtcustomercity.current.value = " ";
        setShowAddButton(true);
        setShowUpdateButton(false);
    }

    const UpdateCustomer = () => {
        var cid = txtcustomerid.current.value
        var name = txtcustomername.current.value;
        var email = txtcustomeremail.current.value;
        var mobile = txtcustomermobile.current.value;
        var city = txtcustomercity.current.value;
        var us = { "customer_id": cid, "customer_name": name, "email_address": email, "mobile_number": mobile, "city": city };
        console.log(us);
        axios({
            url: "http://localhost:9090/api/customer",
            method: 'put',
            data: us,
            contentType: 'application/json',
        }).then(e => {
            alert("Customer Updated Successfully");
            GetCustomer();
            ClearCustomer();

        })
    }
    const DeleteCustomer = (p) => {
        var cid = p.customer_id;
        axios({
            url: "http://localhost:9090/api/customer/" + cid,
            method: "Delete",
            contentType: 'application/json',
        }).then(e => {
            alert("Customer Deleted Successfully");
            GetCustomer();
        })
    }



    return (
        <div>
            <div className="container-fluid">
                <div className="card   mt-3" >
                    <div className="card-body d-flex ">
                        <div className="">
                            <div className="card-title"><span class="fa fa-users" style={{ color: "white", borderRadius: "10px", fontSize: "3.5rem", border: "1px solid black", padding: "0.5rem", boxShadow: "2px 2px grey" }} ></span></div>
                        </div>
                        &nbsp;   &nbsp;   &nbsp;
                        <div >
                            <h3 className="card-text"><b>Customer Section</b></h3>
                            <p className="card-text">You Can Add and Modify Customer Details</p>
                        </div>
                    </div>
                </div>
                <div className=" container-fluid card mt-4 mb-4">

                    <div className="customer p-1 ">
                        <div className="d-flex pt-2">
                            <h2>Customer Details :</h2>
                            <a href="#myModal" role="button" className="btn btn-warning ms-auto" data-bs-toggle="modal" style={{ background: "#4a47a3", color: "white" }}>Add New Customer</a>
                        </div>
                        <hr />
                        <div class="input-group mt-2">
                            <input type="text" class="form-control" placeholder="Search for..." style={{ border: "2px solid black", borderRadius: "12px" }} /> &nbsp;
                            <span class="input-group-btn">
                                <button class="btn btn-search" type="button" style={{ background: "#4a47a3", color: "white" }}><i class="fa fa-search fa-fw"></i> Search</button>
                            </span>
                        </div>
                        <div id="myModal" className="modal fade" >
                            <div className="modal-dialog">
                                <div className="modal-content">
                                    <div className="modal-header" style={{ background: "#4a47a3", color: "white" }}>
                                        <h4 className="modal-title">New Customer Details</h4>
                                        <button type="button" className="btn-close btn-close-white" data-bs-dismiss="modal"></button>
                                    </div>
                                    <div className="modal-body" style={{ color: "black" }}>
                                        <table className="">
                                            <tr>
                                                <td>Customer Id</td>
                                                <td><input type="text" disabled ref={txtcustomerid} /></td>
                                            </tr>
                                            <tr>
                                                <td>Customer Name</td>
                                                <td><input type="text" ref={txtcustomername} /></td>
                                            </tr>
                                            <tr>
                                                <td>Email Address</td>
                                                <td><input type="email" ref={txtcustomeremail} /></td>
                                            </tr>
                                            <tr>
                                                <td>Mobile No.</td>
                                                <td><input type="text" ref={txtcustomermobile} /></td>
                                            </tr>
                                            <tr>
                                                <td>City</td>
                                                <td><input type="text" ref={txtcustomercity} /></td>
                                            </tr>
                                        </table>
                                    </div>
                                    <div className="modal-footer">
                                        <input type="button" className="btn btn-danger" data-bs-dismiss="modal" value="Cancel" onClick={() => ClearCustomer()} style={{ "color": "black" }} />
                                        {showAddButton && (<input type="button" id="btnAdd" className="btn btn-primary" data-bs-dismiss="modal" onClick={() => AddCustomer()} value="Add" style={{ "color": "black" }} />
                                        )}
                                        {showUpdateButton && (
                                            <input type="button" id="btnUpdate" className="btn btn-primary" data-bs-dismiss="modal" onClick={() => UpdateCustomer()} value="Update" style={{ "color": "black" }} />
                                        )}
                                    </div>
                                </div>
                            </div>
                        </div>
                        <hr />
                        <table className="table table-bordered  text-center">
                            <thead  >
                                <tr >
                                    <th>Customer ID</th>
                                    <th>Customer Name</th>
                                    <th>Email ID</th>
                                    <th>Mobile</th>
                                    <th>City</th>
                                    <th>Action</th>
                                </tr>
                            </thead>
                            <tbody className="tbody-responsive">

                                {
                                    getCustomerData.map((d, k) => (
                                        <tr key={k}>

                                            <td>{d.customer_id}</td>
                                            <td>{d.customer_name}</td>
                                            <td>{d.email_address}</td>
                                            <td>{d.mobile_number}</td>
                                            <td>{d.city}</td>
                                            <td>
                                                <input type="button" className="btn btn-info" value="View" href="#myModal" role="button" data-bs-toggle="modal" onClick={() => ViewCustomer(d)} /> &nbsp;
                                                <input type="button" className="btn btn-danger" value="Delete" onClick={() => DeleteCustomer(d)} />
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


    )
}