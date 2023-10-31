import axios from "axios";
import React, { useEffect, useRef, useState } from "react";


export const Product = () => {
    const [getProductData, setProductData] = useState([]);
    const [showUpdateButton, setShowUpdateButton] = useState(false);
    const [showAddButton, setShowAddButton] = useState(true);

    useEffect(function () {
        GetProduct();

    }, []);

    var txtproductid = useRef();
    var txtproductname = useRef();
    var txtpurchaserate = useRef();
    var txtsellingrate = useRef();
    var txttax = useRef();
    var txtstockquantity = useRef();




    const GetProduct = () => {
        axios({
            url: "http://localhost:9090/api/product",
            method: 'get',
            contentType: 'application/json',
        }).then(e => {
            setProductData(e.data);

        })
    }

    const AddProduct = () => {
        var pname = txtproductname.current.value;
        var prate = txtpurchaserate.current.value
        var srate = txtsellingrate.current.value;
        var ptax = txttax.current.value;
        var pstock = txtstockquantity.current.value;
        var pd = { "product_name": pname, "purchase_rate": prate, "selling_rate": srate, "tax": ptax, "stock_quantity": pstock };
        console.log(pd)
        axios({
            url: "http://localhost:9090/api/product",
            method: "post",
            data: pd,
            contentType: 'application/json'
        }).then(e => {
            alert("Product Added Successfully");
            GetProduct();
            ClearProduct();

        })
    }


    const ClearProduct = () => {
        txtproductid.current.value = " ";
        txtproductname.current.value = " ";
        txtpurchaserate.current.value = " ";
        txtsellingrate.current.value = " ";
        txttax.current.value = " ";
        txtstockquantity.current.value = " ";
        setShowAddButton(true);
        setShowUpdateButton(false);
    }
    const ViewProduct = (p) => {
        txtproductid.current.value = p.product_id;
        txtproductname.current.value = p.product_name;
        txtpurchaserate.current.value = p.purchase_rate;
        txtsellingrate.current.value = p.selling_rate;
        txttax.current.value = p.tax;
        txtstockquantity.current.value = p.stock_quantity;
        setShowAddButton(false);
        setShowUpdateButton(true);
    }

    const UpdateProduct = () => {
        var pid = txtproductid.current.value;
        var pname = txtproductname.current.value;
        var prate = txtpurchaserate.current.value
        var srate = txtsellingrate.current.value;
        var ptax = txttax.current.value;
        var pstock = txtstockquantity.current.value;
        var pd = { "product_id": pid, "product_name": pname, "purchase_rate": prate, "selling_rate": srate, "tax": ptax, "stock_quantity": pstock };
        axios({
            url: "http://localhost:9090/api/product",
            method: "put",
            data: pd,
            contentType: 'application/json'
        }).then(e => {
            alert("Product Updated Successfully");
            GetProduct();
        })
    }
    return (
        <div>
            <div className="container-fluid">
                <div className="card   mt-3" >
                    <div className="card-body d-flex ">
                        <div className="">
                            <i class="fa-regular fa-cart-shopping"></i>
                            <div className="card-title"><span class="fa fa-shopping-cart" style={{ color: "white", borderRadius: "10px", fontSize: "3.5rem", border: "1px solid black", padding: "0.5rem", boxShadow: "2px 2px grey" }}></span></div>
                        </div>
                        &nbsp;   &nbsp;   &nbsp;
                        <div >
                            <h3 className="card-text"><b>Product Section</b></h3>
                            <p className="card-text">You Can Add and Modify Customer Details</p>
                        </div>
                    </div>
                </div>
                <div className=" container-fluid card mt-4">

                    <div className="d-flex pt-2">
                        <h2>Product Details :</h2>
                        <a href="#myModal" role="button" className="btn btn-warning ms-auto" data-bs-toggle="modal" style={{ background: "#4a47a3", color: "white" }}>Add New Product</a>
                    </div>
                    <hr />
                    <div class="input-group mt-2">
                        <input type="text" class="form-control" placeholder="Search for..." style={{ border: "2px solid black", borderRadius: "12px" }} /> &nbsp;
                        <span class="input-group-btn">
                            <button class="btn btn-search" type="button" style={{ background: "#4a47a3", color: "white" }}><i class="fa fa-search fa-fw"></i> Search</button>
                        </span>
                    </div>
                    <div id="myModal" className="modal fade"  >
                        <div className="modal-dialog">
                            <div className="modal-content  ">
                                <div className="modal-header" style={{ background: "#4a47a3", color: "white" }}>
                                    <h4 className="modal-title">New Product Details</h4>
                                    <button type="button" className="btn-close btn-close-white" data-bs-dismiss="modal"></button>
                                </div>
                                <div className="modal-body" style={{ color: "Black" }}>
                                    <table >
                                        <tr >
                                            <td>Product Id</td>
                                            <td><input type="text" disabled ref={txtproductid} /></td>
                                        </tr>
                                        <tr>
                                            <td>Product Name</td>
                                            <td><input type="text" ref={txtproductname} /></td>
                                        </tr>
                                        <tr>
                                            <td>Purchase Rate</td>
                                            <td><input type="text" ref={txtpurchaserate} /></td>
                                        </tr>
                                        <tr>
                                            <td>Selling Rate</td>
                                            <td><input type="text" ref={txtsellingrate} /></td>
                                        </tr>
                                        <tr>
                                            <td>Stock Quantity</td>
                                            <td><input type="text" ref={txtstockquantity} /></td>
                                        </tr>
                                        <tr>
                                            <td>Tax</td>
                                            <td><input type="text" ref={txttax} /></td>
                                        </tr>

                                    </table>
                                </div>
                                <div className="modal-footer">
                                    <input type="button" className="btn btn-danger" data-bs-dismiss="modal" value="Cancel" onClick={() => ClearProduct()} style={{ "color": "black" }} />
                                    {showAddButton && (<input type="button" id="btnAdd" className="btn btn-primary" data-bs-dismiss="modal" onClick={() => AddProduct()} value="Add" style={{ "color": "black" }} />
                                    )}
                                    {showUpdateButton && (
                                        <input type="button" id="btnUpdate" className="btn btn-primary" value="Update" data-bs-dismiss="modal" onClick={() => UpdateProduct()} style={{ "color": "black" }} />
                                    )}
                                </div>
                            </div>
                        </div>
                    </div>
                    <hr />
                    <table className="table table-bordered  text-center">
                        <thead>
                            <tr>
                                <th>Product ID</th>
                                <th>Product Name</th>
                                <th>Purchase Rate</th>
                                <th>Selling Rate</th>
                                <th>Stock Quantity</th>
                                <th>Tax</th>
                                <th>Action</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                getProductData.map((d, k) => (
                                    <tr key={k}>
                                        <td>{d.product_id}</td>
                                        <td>{d.product_name}</td>
                                        <td>&#x20B9;{d.purchase_rate}/-</td>
                                        <td>&#x20B9;{d.selling_rate}/-</td>
                                        <td>{d.stock_quantity}</td>
                                        <td>{d.tax}%</td>
                                        <td><input type="button" value="View" className="btn btn-info" href="#myModal" role="button" data-bs-toggle="modal" onClick={() => ViewProduct(d)} />
                                            &nbsp;
                                            <input type="button" value="Delete" className="btn btn-danger" /></td>

                                    </tr>
                                ))
                            }


                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    )
}