import React from "react";


export const Dashboard = () => {
    return (
        <div>
            <div className="container-fluid">
                <div className="card   mt-3" >
                    <div className="card-body d-flex ">
                        <div className="">
                            <div className="card-title "><span class="fa fa-lock" style={{ color: "white", borderRadius: "10px", fontSize: "3.5rem", border: "1px solid black", padding: "0.8rem", boxShadow: "2px 2px grey" }} ></span></div>
                        </div>
                        &nbsp;   &nbsp;   &nbsp;
                        <div >
                            <h3 className="card-text mt-4"><b>Admin Section</b></h3>

                        </div>
                    </div>
                </div>
                <div className="row mt-2" >
                    <div className="col-md-4">
                        <div className="card text-light">
                            <div className="card-body">
                                <h2 className="p-2 mr-2"><b><i className="fa fa-shopping-cart" aria-hidden="true"></i>&nbsp;Total Product: </b></h2>
                                <h3 ><b className="m-3">7</b></h3>
                            </div>
                            <div >
                                <hr />
                                <span style={{ marginLeft: "10px" }}>
                                    <a href="/route_product" className="text-muted" style={{ textDecoration: "none" }}>View Product <i className="fa fa-arrow-right" aria-hidden="true"></i></a></span>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-4">
                        <div className="card text-light" >
                            <div className="card-body">
                                <h2 className="p-2 mr-2"><b><i className="fa fa-users" aria-hidden="true"></i>&nbsp;Total Customer: </b></h2>
                                <h3 ><b className="m-3">27</b></h3>
                            </div>
                            <div >
                                <hr />
                                <span style={{ marginLeft: "10px", textDecoration: "none" }}>
                                    <a href="/route_customer" className="text-muted" style={{ marginLeft: "10px", textDecoration: "none" }}>View Customer <i className="fa fa-arrow-right" aria-hidden="true"></i></a></span>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-4">
                        <div className="card text-light">
                            <div className="card-body">
                                <h2 className="p-2 mr-2"><b><i className="fa fa-shopping-cart" aria-hidden="true"></i>&nbsp;Low Stock Product</b></h2>
                                <h3 ><b className="m-3">3</b></h3>
                            </div>
                            <div >
                                <hr />
                                <span style={{ marginLeft: "10px" }}>
                                    <a href="/route_product" className="text-muted" style={{ textDecoration: "none" }}>View Product <i className="fa fa-arrow-right" aria-hidden="true"></i></a></span>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="row mt-2">
                    <div className="col-md-4">
                        <div className="card text-light">
                            <div className="card-body">
                                <h2 className="p-2 mr-2"><b><i className="fa fa-shopping-cart" aria-hidden="true"></i>&nbsp;Zero Stock Product </b></h2>
                                <h3 ><b className="m-3">1</b></h3>
                            </div>
                            <div >
                                <hr />
                                <span style={{ marginLeft: "10px" }}>
                                    <a href="/route_product" className="text-muted" style={{ textDecoration: "none" }}>View Product <i className="fa fa-arrow-right" aria-hidden="true"></i></a></span>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-4">
                        <div className="card text-light" >
                            <div className="card-body">
                                <h2 className="p-2 mr-2"><b><i className="fa fa-file"></i>&nbsp;Total Invoice </b></h2>
                                <h3 ><b className="m-3">1</b></h3>
                            </div>
                            <div >
                                <hr />
                                <span style={{ marginLeft: "10px" }}>
                                    <a href="/route_product" className="text-muted" style={{ textDecoration: "none" }}>View Product <i className="fa fa-arrow-right" aria-hidden="true"></i></a></span>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    )
}