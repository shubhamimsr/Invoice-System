package mypackage.repository;
import org.springframework.data.jpa.repository.JpaRepository;
import mypackage.model.Product;

public interface ProductRepository extends JpaRepository<Product, Integer> {

}
