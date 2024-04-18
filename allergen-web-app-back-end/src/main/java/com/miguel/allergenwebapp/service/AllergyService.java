package com.miguel.allergenwebapp.service;

import com.miguel.allergenwebapp.model.Allergy;

import java.util.List;

public interface AllergyService {
    public String getAllergy(String dishName, String allergyName);
    public List<Allergy> getAllAllergies();

}

