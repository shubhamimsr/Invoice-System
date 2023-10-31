import React, { useEffect, useRef, useState } from "react";
import axios from "axios";
// import bill from "../images/bill.png";

export const BuyProduct = () => {
    const [getCustomerData, setCustomerData] = useState([]);
    const [getProductData, setProductData] = useState([]);
    const [getinvoice, setinvoice] = useState([]);
    const [getproductqnty, setproductqnty] = useState([]);
    const [finalTotal, setFinalTotal] = useState(0);
    const [product_name, setProductName] = useState("");
    const today = new Date().toISOString().split(' ')[0];
    // const [selectedDateTime, setSelectedDateTime] = useState(getCurrentDateTime());


    var txtporductdata = useRef();
    var rate = useRef();
    var tax = useRef();
    var qnty = useRef();
    var stockqnty = useRef();
    var total = useRef();
    var txtcustomerid = useRef();
    var date = useRef();

    useEffect(function () {
        GetCustomer();
        GetProduct();
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

    const GetProduct = () => {
        axios({
            url: "http://localhost:9090/api/product",
            method: 'get',
            contentType: 'application/json',
        }).then(e => {
            setProductData(e.data);

        })
    }

    //product by id
    const GetProductData = (p) => {
        var pid = txtporductdata.current.value;
        axios({
            url: "http://localhost:9090/api/product/" + pid,
            method: 'get',
            contentType: 'application/json',
        }).then(e => {
            console.log(e.data);
            setProductName(e.data.product_name)
            setproductqnty(e.data);
            rate.current.value = e.data.selling_rate;
            tax.current.value = e.data.tax;
            stockqnty.current.value = e.data.stock_quantity;

        })

    }


    const GetTotal = () => {
        var rt = Number(rate.current.value);
        var st = Number(stockqnty.current.value);
        var qnt = Number(qnty.current.value);
        total.current.value = 0;
        var tx = Number(tax.current.value);
        if (st > qnt) {
            var tt = (rt + (rt * tx / 100)) * qnt;
            total.current.value = tt
        }
        else {
            total.current.value = 0;
            qnty.current.value = 0;
            alert("Product is out of stock")
        }
    }

    const AddToList = () => {
        var product = txtporductdata.current.value;
        var rt = rate.current.value;
        var qnt = qnty.current.value;
        var tx = tax.current.value;
        var tt = total.current.value;
        var final = Number(finalTotal);
        final += Number(tt);
        setFinalTotal(final)
        var p = { "product_id": product, "product_name": product_name, "rate": rt, "quantity": qnt, "tax": tx, "total": tt };
        //localStorage.setItem("InvoiceProduct", JSON.stringify(p));
        setinvoice([...getinvoice, p]);
        UpdateProduct();
        ClearProduct();
    }

    const AddFinalInvoice = () => {
        var productdata = [];
        getinvoice.forEach(function (d, k) {
            var st = { "product": { "product_id": d.product_id }, "quantity": d.quantity };
            productdata.push(st);
        })
        var dt = date.current.value;
        var cid = txtcustomerid.current.value;
        var total = finalTotal;
        var id = { "invoice_date": dt, "customer": { "customer_id": cid }, "total_amount": total, "invoiceproducts": productdata };
        axios({
            url: "http://localhost:9090/api/invoicedetails",
            method: 'post',
            data: id,
            contentType: 'application/json'
        }).then(e => {
            alert("Invoice Generated Successfully");

        })
    }

    const ClearProduct = () => {
        txtporductdata.current.value = "";
        rate.current.value = "";
        qnty.current.value = "";
        tax.current.value = "";
        total.current.value = "";
        stockqnty.current.value = "";
    }

    const UpdateProduct = () => {
        var pid = txtporductdata.current.value;
        var pname = getproductqnty.product_name;
        var prate = getproductqnty.purchase_rate;
        var srate = getproductqnty.selling_rate;
        var ptax = getproductqnty.tax;
        var qt = Number(qnty.current.value);
        var t = Number(stockqnty.current.value);
        var pstock = t - qt
        var pd = { "product_id": pid, "product_name": pname, "purchase_rate": prate, "selling_rate": srate, "tax": ptax, "stock_quantity": pstock };
        axios({
            url: "http://localhost:9090/api/product",
            method: "put",
            data: pd,
            contentType: 'application/json'
        }).then(e => {

        })
    }

    // function getCurrentDateTime() {
    //     const now = new Date();
    //     const year = now.getFullYear();
    //     const month = String(now.getMonth() + 1).padStart(2, '0');
    //     const day = String(now.getDate()).padStart(2, '0');
    //     const hours = String(now.getHours()).padStart(2, '0');
    //     const minutes = String(now.getMinutes()).padStart(2, '0');
    //     return `${year}-${month}-${day}T${hours}:${minutes}`;
    // }

    // // Event handler for input changes
    // function handleInputChange(event) {
    //     setSelectedDateTime(event.target.value);
    // }

    return (
        <div>
            <div className="container-fluid">
                <div className="card  mt-3" >
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
                            <h3 className="card-text"><b>Purchase Section</b></h3>
                            <p className="card-text">You Can Buy Product</p>
                        </div>
                    </div>
                </div>


                <div className="container-fluid card mt-4  invoice"  >
                    <table>
                        <tr style={{ borderBottom: "1px solid black", }}>
                            <td className="d-flex pb-4" style={{ width: "400%" }}>Customer Name:
                                <select ref={txtcustomerid}>
                                    <option selected disabled>Select Customer</option>
                                    {
                                        getCustomerData.map((d, k) => (
                                            <option key={k} value={d.customer_id}>{d.customer_name}</option>

                                        ))
                                    }
                                </select>

                            </td>

                            <td colSpan={5} className="text-end  pb-4" >Invoice Date: </td>
                            <td className=" pb-4"><input type="datetime-local" max={today} ref={date} required /></td>
                            {/* <td>
                                <input
                                    type="datetime-local"
                                    id="datetime"
                                    name="datetime"
                                    value={selectedDateTime}
                                    max={getCurrentDateTime()} // Restrict future dates
                                    onChange={handleInputChange}
                                    required
                                />
                            </td> */}
                        </tr>


                        <tr className="text-center">
                            <td>Product:<br />
                                <select ref={txtporductdata} onChange={() => GetProductData()}>
                                    <option selected disabled>Select Product</option>
                                    {
                                        getProductData.map((d, k) => (
                                            <option key={k} value={d.product_id}>{d.product_name}</option>
                                        ))
                                    }
                                </select>
                            </td>
                            <td>Rate:<br /><input type="text" readOnly style={{ width: "50%" }} ref={rate} /></td>
                            <td>Tax:<br /><input type="text" readOnly style={{ width: "50%" }} ref={tax} /> </td>
                            <td>Stock:<br /><input type="text" readOnly style={{ width: "50%" }} ref={stockqnty} /> </td>
                            <td>Quantity:<br /><input type="text" style={{ width: "50%" }} ref={qnty} onChange={() => GetTotal()} /> </td>
                            <td>Total:<br /><input type="text" style={{ width: "50%" }} ref={total} /> </td>
                        </tr>

                    </table>

                    <div className="m-auto pt-4">
                        <input type="button" value="Add To List" className="btn btn-warning text-light"
                            onClick={() => AddToList()} />
                    </div>
                    <br />
                    <hr />
                    <table className="table">
                        <thead>
                            <th>Product Name</th>
                            <th>Rate</th>
                            <th>Tax</th>
                            <th>Quantity</th>
                            <th>Total</th>

                        </thead>
                        <tbody>
                            {
                                getinvoice.map((d, k) => (
                                    <tr key={k}>
                                        <td>{d.product_name}</td>
                                        <td>&#x20B9;{d.rate}/-</td>
                                        <td>{d.tax}%</td>
                                        <td>{d.quantity}</td>
                                        <td>&#x20B9;{d.total}/-</td>
                                    </tr>
                                )

                                )

                            }
                        </tbody>
                        <tfoot>
                            <tr>
                                <td colSpan={4} className="text-end">Final Amount</td>
                                <td>&#x20B9;{finalTotal}/-</td>
                            </tr>
                        </tfoot>
                    </table>
                    <div className="m-auto">
                        <input type="button" value="Submit" className="btn btn-success  mb-3" onClick={() => AddFinalInvoice()} />
                    </div>
                    <hr />
                </div>

            </div>
        </div>

    )
}