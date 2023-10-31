package mypackage.model;

import java.util.Set;

import javax.persistence.CascadeType;
import javax.persistence.Entity;
import javax.persistence.FetchType;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.OneToMany;
import javax.persistence.Table;

import com.fasterxml.jackson.annotation.JsonIgnoreProperties;

@Entity
@Table(name="tblproducts")
public class Product {
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY )
	private int product_id;
	
	private String product_name;
	private int purchase_rate;
	private int selling_rate;
	private int tax;
	private int stock_quantity;
	
	@OneToMany(mappedBy = "product",fetch = FetchType.LAZY,cascade = CascadeType.ALL)
	@JsonIgnoreProperties("product")
	private Set<InvoiceProduct>invoiceproduct;

	public Product() {
		super();
		// TODO Auto-generated constructor stub
	}

	public Product(int product_id, String product_name, int purchase_rate, int selling_rate, int tax,
			int stock_quantity, Set<InvoiceProduct> invoiceproduct) {
		super();
		this.product_id = product_id;
		this.product_name = product_name;
		this.purchase_rate = purchase_rate;
		this.selling_rate = selling_rate;
		this.tax = tax;
		this.stock_quantity = stock_quantity;
		this.invoiceproduct = invoiceproduct;
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

	public int getPurchase_rate() {
		return purchase_rate;
	}

	public void setPurchase_rate(int purchase_rate) {
		this.purchase_rate = purchase_rate;
	}

	public int getSelling_rate() {
		return selling_rate;
	}

	public void setSelling_rate(int selling_rate) {
		this.selling_rate = selling_rate;
	}

	public int getTax() {
		return tax;
	}

	public void setTax(int tax) {
		this.tax = tax;
	}

	public int getStock_quantity() {
		return stock_quantity;
	}

	public void setStock_quantity(int stock_quantity) {
		this.stock_quantity = stock_quantity;
	}

	public Set<InvoiceProduct> getInvoiceproduct() {
		return invoiceproduct;
	}

	public void setInvoiceproduct(Set<InvoiceProduct> invoiceproduct) {
		this.invoiceproduct = invoiceproduct;
	}

	
	
}
