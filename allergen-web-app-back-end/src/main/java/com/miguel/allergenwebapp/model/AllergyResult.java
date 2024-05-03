package com.miguel.allergenwebapp.model;

public class AllergyResult {
    private String allergyName;
    private String description;

    public AllergyResult() {
    }

    public AllergyResult(String allergyName, String description) {
        this.allergyName = allergyName;
        this.description = description;
    }


    public String getAllergyName() {
        return allergyName;
    }

    public void setAllergyName(String allergyName) {
        this.allergyName = allergyName;
    }

    public String getDescription() {
        return description;
    }

    public void setDescription(String description) {
        this.description = description;
    }
}
