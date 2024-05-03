package com.miguel.allergenwebapp.service;

import com.miguel.allergenwebapp.model.Allergy;
import com.miguel.allergenwebapp.model.AllergyResult;
import com.miguel.allergenwebapp.model.Dish;
import com.miguel.allergenwebapp.model.DishAllergy;
import com.miguel.allergenwebapp.repository.AllergyRepository;
import com.miguel.allergenwebapp.repository.DishAllergyRepository;
import com.miguel.allergenwebapp.repository.DishRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List;

@Service
public class AllergyServiceLogic implements AllergyService {
    @Autowired
    private DishAllergyRepository dishAllergyRepository;
    @Autowired
    private DishRepository dishRepository;
    @Autowired
    private AllergyRepository allergyRepository;


    @Override
    public String getAllergy(String dishName, String allergyName) {
        Dish dish = dishRepository.findByName(dishName.toUpperCase());
        if(dish == null) return "DISH NOT FOUND";
        Allergy allergy = allergyRepository.findByName(allergyName.toUpperCase());
        DishAllergy dishAllergy = dishAllergyRepository.findByDishIdAndAllergyId(dish.getId(), allergy.getId());

        if (dishAllergy!= null) {
            return dishAllergy.getDescription();
        } else {
            return "NO ALLERGIES FOUND";
        }
    }

    @Override
    public List<Allergy> getAllAllergies() {
        return allergyRepository.findAll();
    }

    @Override
    public List<Dish> getMenuList(String keyword) {
        return dishRepository.findByNameContainingIgnoreCase(keyword);
    }

    @Override
    public List<AllergyResult> resultList(String dishName) {
        AllergyResult empty = new AllergyResult("No allergies found", "No allergies found");

        List<AllergyResult> allergyResults = new ArrayList<>(); // Initialize the list

        Dish dish = dishRepository.findByName(dishName.toUpperCase());
        if (dish == null) {
            allergyResults.add(empty);
            return allergyResults;  // Return empty list if dish is null
        } // Check if dish is null

        List<DishAllergy> dishAllergies = dishAllergyRepository.findByDishId(dish.getId());
        if (dishAllergies == null){
            allergyResults.add(empty);
            return allergyResults;  // Return empty list if dishAllergies is null

        }


        for (DishAllergy dishAllergy : dishAllergies) {
            Allergy allergy = allergyRepository.findById(dishAllergy.getAllergy().getId()).orElse(null);
            if (allergy != null) { // Check if allergy is null
                AllergyResult allergyResult = new AllergyResult(allergy.getName(), dishAllergy.getDescription());
                allergyResults.add(allergyResult);
            }
        }
        return allergyResults;
    }


}
