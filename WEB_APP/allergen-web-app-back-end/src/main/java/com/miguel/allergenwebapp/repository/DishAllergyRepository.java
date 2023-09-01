package com.miguel.allergenwebapp.repository;

import com.miguel.allergenwebapp.model.Allergy;
import com.miguel.allergenwebapp.model.Dish;
import com.miguel.allergenwebapp.model.DishAllergy;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.Optional;

@Repository
public interface DishAllergyRepository extends JpaRepository<DishAllergy, Integer> {
    DishAllergy findByDishAndAllergy(Dish dish, Allergy allergy);
    DishAllergy findByDishIdAndAllergyId(int dishid, int allergyid);
    Optional<DishAllergy> findByDishNameAndAllergyName(String dishName, String allergyName);
}
