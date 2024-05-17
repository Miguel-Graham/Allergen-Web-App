package com.miguel.allergenwebapp.model;

import java.util.List;

public class DishDetails {
    private List<AllergyResult> allergyResults;
    private String ingredients;

    public DishDetails(List<AllergyResult> allergyResults, String ingredients) {
        this.allergyResults = allergyResults;
        this.ingredients = ingredients;
    }

    // getters and setters
    public List<AllergyResult> getAllergyResults() {
        return allergyResults;
    }

    public void setAllergyResults(List<AllergyResult> allergyResults) {
        this.allergyResults = allergyResults;
    }

    public String getIngredients() {
        return ingredients;
    }

    public void setIngredients(String ingredients) {
        this.ingredients = ingredients;
    }
}