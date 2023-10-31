package mypackage.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import mypackage.model.Customer;

public interface CustomerRepository extends JpaRepository<Customer, Integer> {

}
