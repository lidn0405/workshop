package com.workshop.workshop_server.entity;

import java.util.List;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.Id;
import jakarta.persistence.OneToMany;

@Entity
public class Topic {
    
    @Id
    @GeneratedValue
    private Long id;
    private String name;

    @OneToMany
    private List<Reading> readings;

    public Topic() {
        this.name = "None";
    }

    public Topic(String name) {
        this.name = name;
    }

    public String getName() {
        return this.name;
    }

    public void setName(String name) {
        this.name = name;
    }
}
