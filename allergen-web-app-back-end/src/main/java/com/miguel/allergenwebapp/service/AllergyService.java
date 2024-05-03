package com.miguel.allergenwebapp.service;

import com.miguel.allergenwebapp.model.Allergy;
import com.miguel.allergenwebapp.model.AllergyResult;
import com.miguel.allergenwebapp.model.Dish;
import com.miguel.allergenwebapp.model.DishAllergy;

import java.util.List;

public interface AllergyService {
    public String getAllergy(String dishName, String allergyName);
    public List<Allergy> getAllAllergies();
    public List<Dish> getMenuList(String keyword);
    public List<AllergyResult> resultList(String dishName);

}

