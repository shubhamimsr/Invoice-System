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
@Table(name="tblcustomers")
public class Customer {
		@Id
		@GeneratedValue(strategy = GenerationType.IDENTITY)
		private int customer_id;
		
		private String customer_name;
		private String email_address;
		private String mobile_number;
		private String city;
		
		@OneToMany(mappedBy="customer" ,fetch = FetchType.LAZY,cascade = CascadeType.ALL)
		@JsonIgnoreProperties("customer")
		private Set<InvoiceDetails>invoiceDetails;

		public Customer() {
			super();
			// TODO Auto-generated constructor stub
		}

		public Customer(int customer_id, String customer_name, String email_address, String mobile_number, String city,
				Set<InvoiceDetails> invoiceDetails) {
			super();
			this.customer_id = customer_id;
			this.customer_name = customer_name;
			this.email_address = email_address;
			this.mobile_number = mobile_number;
			this.city = city;
			this.invoiceDetails = invoiceDetails;
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

		public String getEmail_address() {
			return email_address;
		}

		public void setEmail_address(String email_address) {
			this.email_address = email_address;
		}

		public String getMobile_number() {
			return mobile_number;
		}

		public void setMobile_number(String mobile_number) {
			this.mobile_number = mobile_number;
		}

		public String getCity() {
			return city;
		}

		public void setCity(String city) {
			this.city = city;
		}

		public Set<InvoiceDetails> getInvoiceDetails() {
			return invoiceDetails;
		}

		public void setInvoiceDetails(Set<InvoiceDetails> invoiceDetails) {
			this.invoiceDetails = invoiceDetails;
		}

		

		
		
}
