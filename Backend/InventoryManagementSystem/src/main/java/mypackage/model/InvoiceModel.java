package mypackage.model;

import java.util.List;

public class InvoiceModel {
	private int invoice_id;
	private int customer_id;
	private String customer_name;
	public String city;
	public String mobile_number;
	public String email_address;
	private String invoice_date;
	private float total_amount;
	private float paid_amount;
	private float remaining_amount;
	
	private List<InvoiceProductModel> invoice_products;
	
	public InvoiceModel(int invoice_id, int customer_id, String customer_name, String city, String mobile_number,
			String email_address, String invoice_date, float total_amount, float paid_amount, float remaining_amount,
			List<InvoiceProductModel> invoice_products) {
		super();
		this.invoice_id = invoice_id;
		this.customer_id = customer_id;
		this.customer_name = customer_name;
		this.city = city;
		this.mobile_number = mobile_number;
		this.email_address = email_address;
		this.invoice_date = invoice_date;
		this.total_amount = total_amount;
		this.paid_amount = paid_amount;
		this.remaining_amount = remaining_amount;
		this.invoice_products = invoice_products;
	}
	public InvoiceModel() {
		super();
		// TODO Auto-generated constructor stub
	}
	public int getInvoice_id() {
		return invoice_id;
	}
	public void setInvoice_id(int invoice_id) {
		this.invoice_id = invoice_id;
	}
	public int getCustomer_id() {
		return customer_id;
	}
	public void setCustomer_id(int customer_id) {
		this.customer_id = customer_id;
	}
	public String getCustomer_name() {
		return customer_name;
	}
	public void setCustomer_name(String customer_name) {
		this.customer_name = customer_name;
	}
	public String getCity() {
		return city;
	}
	public void setCity(String city) {
		this.city = city;
	}
	public String getMobile_number() {
		return mobile_number;
	}
	public void setMobile_number(String mobile_number) {
		this.mobile_number = mobile_number;
	}
	public String getEmail_address() {
		return email_address;
	}
	public void setEmail_address(String email_address) {
		this.email_address = email_address;
	}
	public String getInvoice_date() {
		return invoice_date;
	}
	public void setInvoice_date(String invoice_date) {
		this.invoice_date = invoice_date;
	}
	public float getTotal_amount() {
		return total_amount;
	}
	public void setTotal_amount(float total_amount) {
		this.total_amount = total_amount;
	}
	public float getPaid_amount() {
		return paid_amount;
	}
	public void setPaid_amount(float paid_amount) {
		this.paid_amount = paid_amount;
	}
	public float getRemaining_amount() {
		return remaining_amount;
	}
	public void setRemaining_amount(float remaining_amount) {
		this.remaining_amount = remaining_amount;
	}
	public List<InvoiceProductModel> getInvoice_products() {
		return invoice_products;
	}
	public void setInvoice_products(List<InvoiceProductModel> invoice_products) {
		this.invoice_products = invoice_products;
	}
	
	
}
