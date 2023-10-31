import React, { useEffect, useRef, useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import axios from "axios";
import imsr_logo_1 from "../images/imsr_logo_1.png"
export const Generateinvoice = () => {
    // const [invoice, setinvoice] = useState([]);
    // const [invoicecustomerdata, setinvoicecustomerdata] = useState([]);
    // const [invoiceproductdata, setinvoiceproductdata] = useState([]);
    // const [product, setproduct] = useState([]);
    const params = useParams();
    useEffect(function () {
        //    alert("welcome") 
        // GetInvoice();
        // GetinvoiceProduct();
    }, [])

    const print = () => {
        var t = document.getElementById("GFG");
        window.print();
    }

    // const GetInvoice = () => {
    //     var id = params.invoice_id;
    //     axios({
    //         url: "http://localhost:9090/api/invoice/" + id,
    //         methpd: "get",

    //     }).then(e => {
    //         setinvoice(e.data)
    //         //setinvoicecustomerdata(e.data.customer);
    //         // console.log(e.data.customer)
    //     })
    // }

    // const GetinvoiceProduct = () => {

    //     axios({
    //         url: "http://localhost:9090/api/invoicedetails",
    //         method: "get"
    //     }).then(e => {
    //         console.log(e.data);
    //         setproduct(e.data)

    //         // console.log(e.data[product])
    //         // if (id == e.data.invoicedetails.invoice_id) {
    //         //     alert("matched")
    //         // }



    //     })
    // }


    return (
        <div>
            <div className="container-fluid" style={{ fontFamily: "Rockwell" }}>
                <div className="col-md-12 mt-4 d-flex">
                    <button className="btn btn-warning backbtn"><Link className="text-light" style={{ textDecoration: "none" }} to="/route_invoice">Back</Link></button>
                    <button className="btn btn-info ms-auto printbtn" onClick={() => print()}>Print</button>
                </div>
                <div >
                    <div className="row" >
                        <div className="card mt-3" id="GFG" >
                            <div className="invoicebilltitle text-center" style={{ fontSize: "30px", fontWeight: "bold" }}>
                                Invoice Bill
                            </div>
                            <div className="card-header">
                                <div className="invoice-header d-flex p-3 " style={{ textAlignLast: "right" }}>
                                    <div className="mt-2">
                                        <img src={imsr_logo_1} className="img-thumbnail" style={{ height: "150px", boxShadow: "2px 4px rgba(0,0,0,0.1)" }} />
                                    </div>
                                    <div className="ms-auto" style={{}}>
                                        <h3 ><b>YOUTECH ENTERPRISES</b></h3>
                                        <p><i class="fa fa-envelope" aria-hidden="true" /> &nbsp;Youtechenterprises@gmail.com</p>
                                        <p><i class="fa fa-phone" aria-hidden="true" /> &nbsp;9420545445 / 9420545446</p>
                                        <p><i class="fa fa-map-marker" aria-hidden="true" /> &nbsp;Pune,Maharashtra 410025</p>
                                    </div>
                                </div>
                            </div>

                            <div className="card-body d-flex">
                                <div className="col-md-6 ">
                                    <p><b>Billed To</b></p>
                                    {/* <p><i class="fa fa-user" aria-hidden="true"></i>&nbsp;&nbsp;{invoice.customer_name}</p>
                                    <p><i class="fa fa-phone" aria-hidden="true"></i>&nbsp;&nbsp;{invoicecustomerdata.mobile_number}</p>
                                    <p><i class="fa fa-envelope" aria-hidden="true"></i>&nbsp;&nbsp;{invoicecustomerdata.email_address}</p>
                                    <p><i class="fa fa-map-marker" aria-hidden="true"></i>&nbsp;&nbsp;{invoicecustomerdata.city}</p> */}

                                </div>
                                <div className="col-md-6  invocieDetails text-center mt-3">
                                    {/* <p><b>Invoice Id:</b>&nbsp;&nbsp; <br />{invoice.invoice_id} </p>
                                    <p><b>Invoice Date:</b>&nbsp;&nbsp; <br />{invoice.invoice_date} </p> */}
                                </div>
                            </div>
                            <hr style={{ border: "1px solid black" }} />
                            <div className="card-body" >
                                <div>
                                    <table className="table table-bordered text-center">
                                        <thead>
                                            <tr>
                                                <th>Sr No</th>
                                                <th>Product Name</th>
                                                <th>Quantity</th>
                                                <th>Rate</th>
                                                <th>Tax(%)</th>
                                                <th>Total</th>

                                            </tr>
                                        </thead>
                                        <tbody>
                                            {/* {
                                                product.map((d, k) => {
                                                    <tr key={k}>
                                                        <td>{k + 1}</td>
                                                        <td>{d.product_name}</td>
                                                        <td>{k + 1}</td>
                                                        <td>{k + 1}</td>
                                                        <td>{k + 1}</td>
                                                        <td>{k + 1}</td>
                                                    </tr>
                                                })} */}

                                            {/* <tr >
                                                <td>{1}</td>
                                                <td>{invoiceproductdata.product_name}</td>
                                                <td>{product.product_name}</td>
                                                <td>{invoiceproductdata.selling_rate}</td>
                                                <td>{invoiceproductdata.tax}</td>
                                            </tr> */}
                                        </tbody>
                                        <tfoot className="text-end ">
                                            <tr>
                                                <th colSpan={5} className="bg-white text-dark">Total Amount:</th>
                                                <td className="text-center">840</td>
                                            </tr>
                                        </tfoot>
                                    </table>
                                </div>
                            </div>
                            <div className="card-footer">
                                <div className="d-flex">
                                    <div className="mt-5 p-5">
                                        <p><b>Stamp</b></p>
                                    </div>
                                    <div className="ms-auto mt-5 p-5">
                                        <p style={{ borderTop: "1px solid black" }}>
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
            </div>
        </div>

    )
}