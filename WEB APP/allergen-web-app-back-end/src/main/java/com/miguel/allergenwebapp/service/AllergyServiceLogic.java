package com.miguel.allergenwebapp.service;

import com.miguel.allergenwebapp.model.Allergy;
import com.miguel.allergenwebapp.model.Dish;
import com.miguel.allergenwebapp.model.DishAllergy;
import com.miguel.allergenwebapp.repository.AllergyRepository;
import com.miguel.allergenwebapp.repository.DishAllergyRepository;
import com.miguel.allergenwebapp.repository.DishRepositoty;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.Optional;

@Service
public class AllergyServiceLogic implements AlergyService{
    @Autowired
    private DishAllergyRepository dishAllergyRepository;
    @Autowired
    private DishRepositoty dishRepositoty;
    @Autowired
    private AllergyRepository allergyRepository;


    @Override
    public String getAllergy(String dishName, String allergyName) {
        Dish dish = dishRepositoty.findByName(dishName);
        if(dish == null) return "DISH NOT FOUND";
        Allergy allergy = allergyRepository.findByName(allergyName);
        DishAllergy dishAllergy = dishAllergyRepository.findByDishIdAndAllergyId(dish.getId(), allergy.getId());

        if (dishAllergy!= null) {
            return dishAllergy.getDescription();
        } else {
            return "NO ALLERGIES FOUND";
        }
    }



}
