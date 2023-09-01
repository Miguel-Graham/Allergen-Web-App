package com.miguel.allergenwebapp.controller;

import com.miguel.allergenwebapp.service.AllergyServiceLogic;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/allergy")
public class AllergyController {
    @Autowired
    private AllergyServiceLogic allergyServiceLogic;

    @CrossOrigin(origins = "http://localhost:3000" )
    @GetMapping("/getAllergy")
    public ResponseEntity<String> getAllergy(@RequestParam String dishName, @RequestParam String allergyName) {
        String result = allergyServiceLogic.getAllergy(dishName, allergyName);
        if (result != null) {
            return ResponseEntity.ok(result);
        } else {
            return ResponseEntity.notFound().build();
        }
    }


}
