package org.example.test.Dao.Repository;

import org.example.test.Dao.Entity.Client;
import org.springframework.data.jpa.repository.JpaRepository;



public interface ClientRepository extends JpaRepository<Client, Integer> {
}