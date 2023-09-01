package com.miguel.allergenwebapp.repository;

import com.miguel.allergenwebapp.model.Allergy;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface AllergyRepository extends JpaRepository<Allergy, Integer> {
     Allergy findByName(String name);
}
