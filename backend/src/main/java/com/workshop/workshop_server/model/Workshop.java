package com.workshop.workshop_server.model;

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
    List<User> student_list;

    @OneToMany(mappedBy = "workshop")
    private List<Topic> topics;

    public Workshop() {
    }

    public Workshop(String name, String subject, String description) {
        this.name = name;
        this.subject = subject;
        this.description = description;
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
}
