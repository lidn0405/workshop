package com.workshop.workshop_server.model;

import java.util.ArrayList;
import java.util.List;

import com.fasterxml.jackson.annotation.JsonIgnore;

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

    @ManyToOne
    @JoinColumn(name = "workshop_id")
    private Workshop workshop;
    
    @OneToMany(mappedBy = "topic")
    private List<Reading> readings = new ArrayList<>();

    @OneToMany(mappedBy = "parent")
    @JsonIgnore
    private List<Topic> subtopics = new ArrayList<>();

    @ManyToOne
    @JoinColumn(name = "parent_id")
    @JsonIgnore
    private Topic parent;

    public Topic() {
        this.name = "None";
    }

    public Topic(String name, Workshop workshop) {
        this.name = name;
        this.workshop = workshop;
    }

    public Topic(String name, Workshop workshop, List<Topic> subtopics, Topic parent) {
        this.name = name;
        this.workshop = workshop;
        this.subtopics = subtopics;
        this.parent = parent;
    }

    public Long getId() {
        return this.id;
    }

    public String getName() {
        return this.name;
    }

    public List<Topic> getSubtopics() {
        return this.subtopics;
    }

    public Topic getParent() {
        return this.parent;
    }

    public void setName(String name) {
        this.name = name;
    }

    public void setSubtopics(List<Topic> subtopics) {
        this.subtopics = subtopics;
    }

    public void setParent(Topic parent) {
        this.parent = parent;
    }
}
