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
@Table(name="tblinvoice_products")
public class InvoiceProduct  {
	
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY) 
	private int invoice_product_id;
	
	@ManyToOne(fetch = FetchType.LAZY)
	@JoinColumn(name="invoice_id",nullable = false)
	private InvoiceDetails invoicedetails;
	
	@ManyToOne(fetch = FetchType.LAZY)
	@JoinColumn(name="product_id",nullable = false)
	private Product product;
	
	private int quantity;

	public InvoiceProduct() {
		super();
		// TODO Auto-generated constructor stub
	}

	public InvoiceProduct(int invoice_product_id, InvoiceDetails invoicedetails, Product product, int quantity) {
		super();
		this.invoice_product_id = invoice_product_id;
		this.invoicedetails = invoicedetails;
		this.product = product;
		this.quantity = quantity;
	}

	public int getInvoice_product_id() {
		return invoice_product_id;
	}

	public void setInvoice_product_id(int invoice_product_id) {
		this.invoice_product_id = invoice_product_id;
	}

	public InvoiceDetails getInvoicedetails() {
		return invoicedetails;
	}

	public void setInvoicedetails(InvoiceDetails invoicedetails) {
		this.invoicedetails = invoicedetails;
	}

	public Product getProduct() {
		return product;
	}

	public void setProduct(Product product) {
		this.product = product;
	}

	public int getQuantity() {
		return quantity;
	}

	public void setQuantity(int quantity) {
		this.quantity = quantity;
	}

	
	
}
