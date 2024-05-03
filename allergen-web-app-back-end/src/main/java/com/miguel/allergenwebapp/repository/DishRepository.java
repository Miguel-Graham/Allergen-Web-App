package com.miguel.allergenwebapp.repository;

import com.miguel.allergenwebapp.model.Dish;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface DishRepository extends JpaRepository<Dish, Integer> {
    Dish findByName(String name);
    List<Dish> findByNameContainingIgnoreCase(String keyword);

}
