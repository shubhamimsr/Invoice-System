package mypackage.model;

import java.util.*;
import javax.persistence.CascadeType;
import javax.persistence.Entity;
import javax.persistence.FetchType;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;
import javax.persistence.OneToMany;
import javax.persistence.Table;

import com.fasterxml.jackson.annotation.JsonIgnoreProperties;


@Entity
@Table(name = "tblinvoice_details")
public class InvoiceDetails {
	
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private int invoice_id;

	@ManyToOne(fetch = FetchType.LAZY)
	@JoinColumn(name = "customer_id", nullable = false)
	private Customer customer;
	
	private String invoice_date;
	private int total_amount;

	@OneToMany(mappedBy = "invoicedetails", fetch = FetchType.LAZY, cascade = CascadeType.ALL)
	@JsonIgnoreProperties("invoicedetails")
	private Set<InvoiceProduct> invoiceproducts;

	@OneToMany(mappedBy = "invoicepayment", fetch = FetchType.LAZY, cascade = CascadeType.ALL)
	@JsonIgnoreProperties("invoicepayment")
	private Set<InvoicePayment> invoicepayments;

	public InvoiceDetails() {
		super();
		// TODO Auto-generated constructor stub
	}

	public InvoiceDetails(int invoice_id, Customer customer, String invoice_date, int total_amount,
			Set<InvoiceProduct> invoiceproducts, Set<InvoicePayment> invoicepayments) {
		super();
		this.invoice_id = invoice_id;
		this.customer = customer;
		this.invoice_date = invoice_date;
		this.total_amount = total_amount;
		this.invoiceproducts = invoiceproducts;
		this.invoicepayments = invoicepayments;
	}

	public int getInvoice_id() {
		return invoice_id;
	}

	public void setInvoice_id(int invoice_id) {
		this.invoice_id = invoice_id;
	}

	public Customer getCustomer() {
		return customer;
	}

	public void setCustomer(Customer customer) {
		this.customer = customer;
	}

	public String getInvoice_date() {
		return invoice_date;
	}

	public void setInvoice_date(String invoice_date) {
		this.invoice_date = invoice_date;
	}

	public int getTotal_amount() {
		return total_amount;
	}

	public void setTotal_amount(int total_amount) {
		this.total_amount = total_amount;
	}

	public Set<InvoiceProduct> getInvoiceproducts() {
		return invoiceproducts;
	}

	public void setInvoiceproducts(Set<InvoiceProduct> invoiceproducts) {
		this.invoiceproducts = invoiceproducts;
	}

	public Set<InvoicePayment> getInvoicepayments() {
		return invoicepayments;
	}

	public void setInvoicepayments(Set<InvoicePayment> invoicepayments) {
		this.invoicepayments = invoicepayments;
	}



}
