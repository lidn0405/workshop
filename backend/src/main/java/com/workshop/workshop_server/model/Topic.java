package com.workshop.workshop_server.model;

import java.util.List;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.Id;
import jakarta.persistence.JoinColumn;
import jakarta.persistence.ManyToOne;
import jakarta.persistence.OneToMany;

@Entity
public class Topic {
    
    @Id
    @GeneratedValue
    private Long id;
    private String name;

    @OneToMany(mappedBy = "topic")
    private List<Reading> readings;

    @ManyToOne
    @JoinColumn(name = "workshop_id")
    private Workshop workshop;

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
