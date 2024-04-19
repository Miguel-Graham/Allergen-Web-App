package com.miguel.allergenwebapp.controller;

import com.miguel.allergenwebapp.model.Allergy;
import com.miguel.allergenwebapp.model.Dish;
import com.miguel.allergenwebapp.service.AllergyServiceLogic;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/allergy")
public class AllergyController {
    @Autowired
    private AllergyServiceLogic allergyServiceLogic;

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
    public ResponseEntity<List<Dish>> getMenuList() {
        List<Dish> menuList = allergyServiceLogic.getMenuList();
        if (menuList != null && !menuList.isEmpty()) {
            return ResponseEntity.ok(menuList);
        } else {
            return ResponseEntity.noContent().build();
        }
    }


}
