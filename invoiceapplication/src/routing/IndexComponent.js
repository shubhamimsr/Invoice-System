import React from "react";
import { BrowserRouter as Router, Link, Routes, Route } from "react-router-dom";
import imsr_logo_1 from "../images/imsr_logo_1.png"
import { Dashboard } from './DashboardComponent';
import { Customer } from './CustomerComponent';
import { Product } from './ProductComponent';
import { Invoice } from './InvoiceComponent';
import { BuyProduct } from "./BuyComponent";
import { CustomerInvoice } from "./CustomerInvoice";
import { Generateinvoice } from "./GeneratedInvoiceComponent";

export const Index = () => {
    return (
        <div>
            <Router>
                <div className="container-fluid">
                    <div className="row" >
                        <div className="col-md-2 sidemenu" style={{ position: "fixed" }}>
                            <div className="list-group " style={{ height: "100vh", boxShadow: "3px 0 5px 0  rgba(0, 0, 0, 0.4)" }} >
                                <h2 className="text-center mt-3 " style={{ letterSpacing: "10px" }} ><i ><b >iMSR</b></i> <br />
                                </h2>
                                <h3 className="m-auto " style={{ fontSize: "15px" }}>Tech</h3>
                                <hr />
                                <a herf="#" className="list-group-item" ><Link to=""><i className="fa fa-tachometer" aria-hidden="true"></i>&nbsp;&nbsp;&nbsp;&nbsp; Dashboard</Link>
                                </a>
                                <a herf="#" className="list-group-item  " >
                                    <Link to="/route_product"><i className="fa fa-shopping-cart" aria-hidden="true"></i>&nbsp;&nbsp;&nbsp;&nbsp;Product</Link>
                                </a>
                                <a herf="#" className="list-group-item   " >
                                    <Link to="/route_customer" ><i className="fa fa-users" aria-hidden="true"></i>&nbsp;&nbsp;&nbsp;&nbsp;Customer</Link>
                                </a>
                                <a herf="#" className="list-group-item" >
                                    <Link to="/route_buyProduct"  ><i className="fa fa-file"></i>&nbsp;&nbsp;&nbsp;&nbsp;Buy Product</Link>
                                </a>
                                <a herf="#" className="list-group-item" >
                                    <Link to="/route_invoice"  ><i className="fa fa-file"></i>&nbsp;&nbsp;&nbsp;&nbsp;Invoice</Link>
                                </a>

                                <div style={{ marginTop: "43vh" }}>

                                    <hr style={{ color: "black" }} />
                                    <a herf="#" ><b>CopyRight@TechGenius</b></a>

                                </div>
                            </div>


                        </div>
                        <div className="col-md-10 main" style={{ marginLeft: "16%" }}>
                            <div className="col-md-12">

                                <nav class="navbar navbar-light " >

                                    <div className="d-flex" style={{ height: "60px", marginLeft: "30px", }}>
                                        <img src={imsr_logo_1} className="img img-circle" ></img>&nbsp;&nbsp;

                                    </div>
                                    <form class="form-inline d-flex ms-auto">
                                        <input class="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search" />
                                        <button class="btn btn-outline-light my-2 my-sm-0 mx-2" type="submit">Search</button>
                                    </form>
                                </nav>
                            </div>
                            <div className="tab-content" id="nav-tabContent">
                                <Routes>
                                    <Route path="" element={<Dashboard />} />
                                    <Route path="route_product" element={<Product />} />
                                    <Route path="route_customer" element={<Customer />} />
                                    <Route path="route_buyProduct" element={<BuyProduct />} />
                                    <Route path="route_invoice" element={<Invoice />} />
                                    <Route path="CustomerInvoice/:invoice_id" element={<CustomerInvoice />}></Route>
                                    <Route path="Generateinvoice/:invoice_product_id" element={<Generateinvoice />}></Route>
                                </Routes>

                            </div>
                        </div>
                    </div>
                </div>
            </Router >
        </div >
    )
}