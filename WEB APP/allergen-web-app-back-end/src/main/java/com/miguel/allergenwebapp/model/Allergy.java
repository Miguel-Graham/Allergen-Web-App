package com.miguel.allergenwebapp.model;

import jakarta.persistence.*;

import java.util.List;

@Entity
@Table(name = "allergy")
public class Allergy {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private int id;

    @Column(name = "name")
    private String name;

    @OneToMany(mappedBy = "allergy")
    private List<DishAllergy> dishAllergies;
    public Allergy() {
    }

    public int getId() {
        return id;
    }

    public void setId(int id) {
        this.id = id;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }


}
