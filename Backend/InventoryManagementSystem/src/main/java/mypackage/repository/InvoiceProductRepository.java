package mypackage.repository;
import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;

import mypackage.model.*;
public interface InvoiceProductRepository  extends JpaRepository<InvoiceProduct, Integer>{
}
