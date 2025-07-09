package com.workshop.workshop_server.workshops;

import com.workshop.workshop_server.user.User;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.Id;
import jakarta.persistence.JoinColumn;
import jakarta.persistence.ManyToOne;

@Entity
public class Workshop {
    @Id
    @GeneratedValue
    private Long id;

    private String name;
    private String subject;
    private String description;

    @ManyToOne
    @JoinColumn(name = "lead_id")
    private User lead;

    public Workshop() {
        this.name = "Workshop Name";
        this.subject = "None";
        this.description = "None";
    }

    public Workshop(String name, String subject, String description, Long lead_id) {
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
}
