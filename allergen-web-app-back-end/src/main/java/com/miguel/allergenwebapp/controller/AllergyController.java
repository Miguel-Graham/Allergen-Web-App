package com.miguel.allergenwebapp.controller;

import com.miguel.allergenwebapp.model.Allergy;
import com.miguel.allergenwebapp.model.AllergyResult;
import com.miguel.allergenwebapp.model.Dish;
import com.miguel.allergenwebapp.model.DishDetails;
import com.miguel.allergenwebapp.service.AllergyServiceLogic;
import com.miguel.allergenwebapp.service.PdfParser;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
@RequestMapping("/allergy")
public class AllergyController {
    @Autowired
    private AllergyServiceLogic allergyServiceLogic;
    @Autowired
    private PdfParser pdfParser;

    //@CrossOrigin(origins = "http://localhost:3000" )
    @GetMapping("/getAllergy")
    public ResponseEntity<String> getAllergy(@RequestParam String dishName, @RequestParam String allergyName) {
        String result = allergyServiceLogic.getAllergy(dishName, allergyName);
        if (result != null) {
            return ResponseEntity.ok(result);
        } else {
            return ResponseEntity.notFound().build();
        }
    }

    @GetMapping("/getAllergyList")
    public ResponseEntity<List<Allergy>> getAllAllergies() {
      List<Allergy> allergies = allergyServiceLogic.getAllAllergies();
       if (allergies != null && !allergies.isEmpty()) {
         return ResponseEntity.ok(allergies);
       } else {
        return ResponseEntity.noContent().build();
       }
    }

    @GetMapping("/getMenuList")
    public ResponseEntity<List<Dish>> getMenuList(String keyword) {
        List<Dish> menuList = allergyServiceLogic.getMenuList(keyword);
        if (menuList != null && !menuList.isEmpty()) {
            return ResponseEntity.ok(menuList);
        } else {
            return ResponseEntity.noContent().build();
        }
    }

    @GetMapping("/resultList")
    public ResponseEntity<DishDetails> resultList(@RequestParam String dishName) {
        List<AllergyResult> allergyResults = allergyServiceLogic.resultList(dishName);
        String ingredients = pdfParser.getIngredients(dishName);
        if (allergyResults != null && !allergyResults.isEmpty() && ingredients != null) {
            DishDetails dishDetails = new DishDetails(allergyResults, ingredients);
            return ResponseEntity.ok(dishDetails);
        } else {
            return ResponseEntity.noContent().build();
        }
    }



}
