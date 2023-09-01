package com.miguel.allergenwebapp.repository;

import com.miguel.allergenwebapp.model.Dish;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface DishRepositoty extends JpaRepository<Dish, Integer> {
    Dish findByName(String name);

}
