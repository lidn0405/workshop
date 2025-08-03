package com.workshop.workshop_server.model;

import java.util.ArrayList;
import java.util.List;

import com.fasterxml.jackson.annotation.JsonIgnore;

import jakarta.persistence.Entity;
import jakarta.persistence.FetchType;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.Id;
import jakarta.persistence.JoinColumn;
import jakarta.persistence.ManyToMany;
import jakarta.persistence.ManyToOne;
import jakarta.persistence.OneToMany;

@Entity
public class Workshop {
    @Id
    @GeneratedValue
    private Long id;

    private String name;
    private String subject;
    private String description;

    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "lead_id")
    @JsonIgnore
    private User lead;

    @ManyToMany(mappedBy = "joined_workshops")
    private List<User> student_list = new ArrayList<>();

    @OneToMany(mappedBy = "workshop")
    private List<Topic> topics = new ArrayList<>();

    public Workshop() {
    }

    public Workshop(String name, String subject, String description, User lead) {
        this.name = name;
        this.subject = subject;
        this.description = description;
        this.lead = lead;
    }

    public void setName(String name) {
        this.name = name;
    }
    
    public void setSubject(String subject) {
        this.subject = subject;
    }

    public void setDesc(String description) {
        this.description = description;
    }

    public Long getId() {
        return this.id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public String getName() {
        return this.name;
    }

    public String getSubject() {
        return this.subject;
    }

    public String getDescription() {
        return this.description;
    }

    public User getLead() {
        return this.lead;
    }

    public List<Topic> getTopics() {
        return this.topics;
    }
}
