package mypackage.controller;
import java.util.*;
import mypackage.model.*;
import mypackage.repository.*;
import mypackage.service.*;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

@RestController
@CrossOrigin(origins="*",allowedHeaders = "*", methods= {RequestMethod.GET,RequestMethod.POST,RequestMethod.PUT,RequestMethod.DELETE} )
public class InventoryApiController {
	@Autowired
	InventoryService iservice;
	
	@PostMapping("api/customer")
	public Customer AddCustomers (@RequestBody Customer cs) {
		return iservice.AddOrUpdateCustomer(cs);
	}
	
	@PutMapping("api/customer")
	public Customer UpdateCustomers(@RequestBody Customer cs) {
		return iservice.AddOrUpdateCustomer(cs);
	}
	
	@GetMapping("api/customer")
	public List<Customer>GetCustomers(){
		return iservice.GetCustomers();
	}
	
	@GetMapping("api/customer/{customer_id}")
	public Customer GetCustomerById(@PathVariable("customer_id")int id){
		return iservice.GetCustomerByID(id);
	}
	
	@DeleteMapping("api/customer/{customer_id}")
	public Customer DeleteCustomer(@PathVariable("customer_id")int id) {
		return iservice.DeleteCustomer(id);
	}
	
	
	
	@PostMapping("api/invoicedetails")
	public InvoiceDetails AddInvoiceProducts(@RequestBody InvoiceDetails ip) {
		return iservice.AddInvoiceDetails(ip);
	}
	

	//Product Model
	@GetMapping("api/product")
	public List<Product>GetProducts(){
		return iservice.GetProduct();
	}
	
	
	@PostMapping("api/product")
	public Product Addproducts(@RequestBody Product pd) {
		return iservice.AddorUpdateProduct(pd);
	}
	
	@PutMapping("api/product")
	public Product Updateproducts(@RequestBody Product pd) {
		return iservice.AddorUpdateProduct(pd);
	}
	
	@GetMapping("api/product/{product_id}")
	public Product GetProductById(@PathVariable("product_id")int id){
		return iservice.GetProductByID(id);
	}
	
	//InvoiceProduct
	@GetMapping("api/invoiceproduct/{invoice_product_id}")
	public InvoiceProduct GetInvoicewithProductDetails(@PathVariable("invoice_product_id")int id) {
		return iservice.GetInvoicewithProduct(id);
	}

	
	


	@GetMapping("api/invoicedetails")
	public List<InvoiceModel> GetInvoiceDetails(){
	return iservice.GetInvoices();
	}

	 
	
	@GetMapping("api/invoice/{invoice_id}")
	public InvoiceModel GetInvoiceDetailsByid(@PathVariable("invoice_id")int id) {
		return  iservice.GetInvoicesbyid(id);
	}
	
	
	
	

	
}

