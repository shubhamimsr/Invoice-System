package mypackage.model;

public class InvoiceProductModel {

	private int invoice_product_id;
	private int product_id;
	private String product_name;
	private float rate;
	private float tax;
	private int quantity;
	
	public InvoiceProductModel() {
		super();
		// TODO Auto-generated constructor stub
	}
	public InvoiceProductModel(int invoice_product_id, int product_id, String product_name, float rate, float tax,int quantity) {
		super();
		this.invoice_product_id = invoice_product_id;
		this.product_id = product_id;
		this.product_name = product_name;
		this.rate = rate;
		this.tax = tax;
		this.quantity = quantity;
	}
	public int getInvoice_product_id() {
		return invoice_product_id;
	}
	public void setInvoice_product_id(int invoice_product_id) {
		this.invoice_product_id = invoice_product_id;
	}
	public int getProduct_id() {
		return product_id;
	}
	public void setProduct_id(int product_id) {
		this.product_id = product_id;
	}
	public String getProduct_name() {
		return product_name;
	}
	public void setProduct_name(String product_name) {
		this.product_name = product_name;
	}
	public float getRate() {
		return rate;
	}
	public void setRate(float rate) {
		this.rate = rate;
	}
	public float getTax() {
		return tax;
	}
	public void setTax(float tax) {
		this.tax = tax;
	}
	public int getQuantity() {
		return quantity;
	}
	public void setQuantity(int quantity) {
		this.quantity = quantity;
	}
	
	}
