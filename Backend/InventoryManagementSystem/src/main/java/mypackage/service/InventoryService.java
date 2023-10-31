package mypackage.service;
import java.util.*;
import mypackage.model.*;
import mypackage.repository.*;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;


@Service
public class InventoryService {
	@Autowired
	CustomerRepository crepo;
	@Autowired
	ProductRepository prepo;
	@Autowired
	InvoiceDetailsRepository irepo;
	@Autowired
	InvoiceProductRepository iprepo;
	@Autowired
	InvoicePaymentRepository payrepo;
	//Get Customer
	
	public List<Customer>GetCustomers(){
		List<Customer>lst =new ArrayList<Customer>();
		for(Customer c:crepo.findAll()) {
			Customer cs = new Customer(c.getCustomer_id(), c.getCustomer_name(), c.getEmail_address(), c.getMobile_number(), c.getCity(),null);
			lst.add(cs);
		}
		return lst;
	}
	
	public Customer AddOrUpdateCustomer(Customer cs) {
		return crepo.save(cs);
	}

	
	public Customer GetCustomerByID(int id) {
		List<Customer>lst = new ArrayList<Customer>();
		return crepo.findById(id).get();
		
	}
	
	public Customer DeleteCustomer(int id) {
		Customer cs =GetCustomerByID(id);
		crepo.delete(cs);
		return cs;
	}
	
	//Product Model
	public List<Product>GetProduct(){
		List<Product>lst = new ArrayList<Product>();
		for(Product p :prepo.findAll()) {
			Product pd = new Product(p.getProduct_id(), p.getProduct_name(), p.getPurchase_rate(),p.getSelling_rate(), p.getTax(),p.getStock_quantity(), null);
			lst.add(pd);
		}
		return  lst;
	}
	
	public Product AddorUpdateProduct(Product pd) {
		return prepo.save(pd);
	}
	
	public Product GetProductByID(int id) {
		List<Product>lst = new ArrayList<Product>();
		Product p = prepo.findById(id).get();
		Product pd = new Product(p.getProduct_id(), p.getProduct_name(), p.getPurchase_rate(),p.getSelling_rate(), p.getTax(),p.getStock_quantity(), null);
		lst.add(pd);
		return pd;
	}


	
	public InvoiceProduct GetInvoicewithProduct(int id){
		InvoiceProduct i=iprepo.findById(id).get();
		InvoiceDetails d = new InvoiceDetails(i.getInvoicedetails().getInvoice_id(), null, i.getInvoicedetails().getInvoice_date(), i.getInvoicedetails().getTotal_amount(), null, null);
		Product pd = new Product(i.getProduct().getProduct_id(),i.getProduct().getProduct_name(),i.getProduct().getPurchase_rate(),i.getProduct().getSelling_rate(),i.getProduct().getTax() ,i.getProduct().getStock_quantity() , null);
		InvoiceProduct  ipd = new InvoiceProduct(i.getInvoice_product_id(), d, pd,i.getQuantity());
		return ipd;
	}

	
	
	
	
	public List<InvoiceModel> GetInvoices(){	 
		List<InvoiceModel>lst=new ArrayList<InvoiceModel>();
		for(InvoiceDetails d : irepo.findAll() ) {	
			float total_amount=0,remaining_amount=0,paid_amount=0;

			for(InvoicePayment p : payrepo.findAll())
			{
				if(p.getInvoicepayment().getInvoice_id()==d.getInvoice_id()) {
					paid_amount+=(float)p.getPayment_amount();
				}
			}
			
			total_amount=d.getTotal_amount();
			remaining_amount=total_amount-paid_amount;
			List<InvoiceProductModel>products=new ArrayList<InvoiceProductModel>();
			for(InvoiceProduct pr:iprepo.findAll()) {
				if(pr.getInvoicedetails().getInvoice_id()==d.getInvoice_id()) {
					InvoiceProductModel pm=new InvoiceProductModel(pr.getInvoice_product_id(), pr.getProduct().getProduct_id(), pr.getProduct().getProduct_name(), pr.getProduct().getSelling_rate(), pr.getProduct().getTax(), pr.getQuantity());
					products.add(pm);
					
				}
			}
			
			InvoiceModel m=new InvoiceModel(d.getInvoice_id(), d.getCustomer().getCustomer_id(), d.getCustomer().getCustomer_name(),d.getCustomer().getCity(),d.getCustomer().getMobile_number(),d.getCustomer().getEmail_address(), d.getInvoice_date(), total_amount, paid_amount, remaining_amount,products);
			lst.add(m);
		}
		return lst;
	}
	
		public InvoiceModel GetInvoicesbyid(int id){	 
			InvoiceDetails d = irepo.findById(id).get(); 	
				float total_amount=0,remaining_amount=0,paid_amount=0,total=0;
	
				for(InvoicePayment p : payrepo.findAll())
				{
					if(p.getInvoicepayment().getInvoice_id()==d.getInvoice_id()) {
						paid_amount+=(float)p.getPayment_amount();
					}
				}
				total_amount=d.getTotal_amount();
				remaining_amount=total_amount-paid_amount;
				
				List<InvoiceProductModel>products=new ArrayList<InvoiceProductModel>();
				for(InvoiceProduct pr:iprepo.findAll()) {
					if(pr.getInvoicedetails().getInvoice_id()==d.getInvoice_id()) {
						InvoiceProductModel pm=new InvoiceProductModel(pr.getInvoice_product_id(), pr.getProduct().getProduct_id(), pr.getProduct().getProduct_name(), pr.getProduct().getSelling_rate(), pr.getProduct().getTax(), pr.getQuantity());
						products.add(pm);
						
					}
				}
				InvoiceModel m=new InvoiceModel(d.getInvoice_id(), d.getCustomer().getCustomer_id(), d.getCustomer().getCustomer_name(),d.getCustomer().getCity(),d.getCustomer().getMobile_number(),d.getCustomer().getEmail_address(), d.getInvoice_date(), total_amount, paid_amount, remaining_amount,products);
				return m;
		}
		
		
		
		
		
		public InvoiceDetails AddInvoiceDetails(InvoiceDetails ip) {
			InvoiceDetails d = new InvoiceDetails(0,ip.getCustomer(),ip.getInvoice_date(),ip.getTotal_amount(),null,null);
			InvoiceDetails dp = irepo.save(d);
			
			for(InvoiceProduct pm : ip.getInvoiceproducts()) {
					InvoiceProduct mm = new InvoiceProduct(0, dp, pm.getProduct(),pm.getQuantity());
					iprepo.save(mm);
			}
			return dp;
		}
		
	
		
}
		
	 
