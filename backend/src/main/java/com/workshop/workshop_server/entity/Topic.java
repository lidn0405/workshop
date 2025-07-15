package com.workshop.workshop_server.entity;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.Id;

@Entity
public class Topic {
    
    @Id
    @GeneratedValue
    private Long id;
    private String name;

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
