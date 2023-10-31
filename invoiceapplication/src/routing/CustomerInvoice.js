import React, { useEffect, useRef, useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import axios from "axios";
import { Generateinvoice } from "./GeneratedInvoiceComponent";
import imsr_logo_1 from "../images/imsr_logo_1.png"

export const CustomerInvoice = () => {
    const [getinvoice, setinvoice] = useState([]);
    const [getproductdata, setproductdata] = useState([]);
    const [FinalTotal, setFinalTotal] = useState(0);

    const params = useParams();

    useEffect(function () {
        Viewinvoice();
    }, []);

    const Viewinvoice = () => {
        var id = params.invoice_id;
        axios({
            url: "http://localhost:9090/api/invoice/" + id,
            method: 'get',
            contentType: 'application/text',
        }).then(e => {
            setinvoice(e.data);
            setproductdata(e.data.invoice_products);
            console.log(e.data.invoice_products);
            // calculateFinalTotal(e.data.invoice_products);
        });
    };


    const print = () => {
        var t = document.getElementById("GFG");
        window.print(t);
    }

    return (
        <diV>
            <div className="container-fluid">
                <div className="col-md-12 mt-4 d-flex">
                    <button className="btn p-3 btnback "><Link className="btn text-light p-2" style={{ backgroundColor: "#990000", textDecoration: "none" }} to="/route_invoice">Back</Link></button>
                    <button className="btn btn-info ms-auto printbtn m-3" onClick={() => print()}>Print</button>

                </div>
                <div className="card mt-4" id="GFG">
                    <div className="card-header">
                        <div className="invoicebilltitle text-center" style={{ fontSize: "30px", fontWeight: "bold" }}>
                            Invoice Bill
                        </div>
                    </div>
                    <div className="card-header">
                        <div className="invoice-header d-flex p-3 " style={{ textAlignLast: "right" }}>
                            <div className="mt-2">
                                <img src={imsr_logo_1} className="img" style={{ height: "150px" }} />
                            </div>
                            <div className="ms-auto" style={{}}>
                                <h1 ><b>iMSR Tech</b></h1>
                                <p><i class="fa fa-envelope" aria-hidden="true" /> &nbsp;imsrtech@gmail.com</p>
                                <p><i class="fa fa-phone" aria-hidden="true" /> &nbsp;7875545450 / 9923545450</p>
                                <p><i class="fa fa-map-marker" aria-hidden="true" /> &nbsp;Pune,Maharashtra 412308</p>
                            </div>
                        </div>
                    </div>
                    {/* </div> */}
                    <div className="card-header p-5 d-flex" >
                        <div>
                            <p><b>Billed To:    </b></p>
                            <p><i class="fa fa-user" aria-hidden="true"></i>&nbsp;{getinvoice.customer_name}</p>
                            <p><i class="fa fa-map-marker" aria-hidden="true"></i>&nbsp;{getinvoice.city}</p>
                            <p>  <i class="fa fa-phone" aria-hidden="true"></i>&nbsp;{getinvoice.mobile_number}</p>
                            <p><i class="fa fa-envelope" aria-hidden="true"></i>&nbsp;{getinvoice.email_address}</p>
                        </div>
                        <div className="ms-auto" style={{ marginTop: "3%" }}>
                            {/* <p>Invoice Id&nbsp;{getinvoicedata.invoice_id} </p>  */}

                            <p><b>Invoice ID :</b>&nbsp; {getinvoice.invoice_id}</p>
                            <p><b>Invoice Date:</b>&nbsp; {getinvoice.invoice_date}</p>

                        </div>
                    </div>
                    <div className="card-body">
                        <table className="table table-primary">
                            <thead className="text-center">
                                <th>Sr.No.</th>
                                <th>Product Name</th>
                                <th>Rate</th>
                                <th >Tax</th>
                                <th >Quantity</th>
                                <th>Total</th>
                            </thead>
                            <tbody >
                                {
                                    getproductdata.map((product, index) => (
                                        <tr key={index} className="text-center" >
                                            <td>{index + 1}</td>
                                            <td>{product.product_name}</td>
                                            <td>&#x20B9; {product.rate}/-</td>
                                            <td>{product.tax}%</td>
                                            <td>{product.quantity}</td>
                                            <td>&#x20B9; {(product.rate + (product.rate * product.tax / 100)) * product.quantity}/-</td>

                                        </tr>
                                    ))


                                }

                            </tbody>
                            <tfoot>
                                <tr>
                                    <td colSpan={5} className="text-end">Final Amount :</td>
                                    <td className="text-center">&#x20B9; {getinvoice.total_amount}/-</td>
                                </tr>
                            </tfoot>
                        </table>
                        <div className="card-footer">
                            <div className="d-flex">
                                <div className="mt-5 p-5">
                                    <p><b>Stamp</b></p>
                                </div>
                                <div className="ms-auto mt-5 p-5">
                                    <p style={{ borderTop: "1px solid white" }}>
                                        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                                        Signature
                                        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </diV >
    )
}