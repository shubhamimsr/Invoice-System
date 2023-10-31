package mypackage.model;

import javax.persistence.Entity;
import javax.persistence.FetchType;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;
import javax.persistence.Table;

@Entity
@Table(name="tblinvoice_payments")
public class InvoicePayment {
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY )
	private int payment_id;
	
	@ManyToOne(fetch = FetchType.LAZY)
	@JoinColumn(name="invoice_id",nullable = false)
	private InvoiceDetails invoicepayment;
	
	private String payment_date;
	private int payment_amount;
	private String payment_mode;
	private String payment_description;
	
	public InvoicePayment() {
		super();
		// TODO Auto-generated constructor stub
	}
	
	public InvoicePayment(int payment_id, InvoiceDetails invoicepayment, String payment_date, int payment_amount,
			String payment_mode, String payment_description) {
		super();
		this.payment_id = payment_id;
		this.invoicepayment = invoicepayment;
		this.payment_date = payment_date;
		this.payment_amount = payment_amount;
		this.payment_mode = payment_mode;
		this.payment_description = payment_description;
	}

	public int getPayment_id() {
		return payment_id;
	}
	public void setPayment_id(int payment_id) {
		this.payment_id = payment_id;
	}
	public InvoiceDetails getInvoicepayment() {
		return invoicepayment;
	}
	public void setInvoicepayment(InvoiceDetails invoicepayment) {
		this.invoicepayment = invoicepayment;
	}
	public String getPayment_date() {
		return payment_date;
	}
	public void setPayment_date(String payment_date) {
		this.payment_date = payment_date;
	}
	public int getPayment_amount() {
		return payment_amount;
	}
	public void setPayment_amount(int payment_amount) {
		this.payment_amount = payment_amount;
	}
	public String getPayment_mode() {
		return payment_mode;
	}
	public void setPayment_mode(String payment_mode) {
		this.payment_mode = payment_mode;
	}
	public String getPayment_description() {
		return payment_description;
	}
	public void setPayment_description(String payment_description) {
		this.payment_description = payment_description;
	}
	
	
}
