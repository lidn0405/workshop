package com.workshop.workshop_server.reading;

import java.time.LocalDateTime;

import com.workshop.workshop_server.workshops.Workshop;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.Id;
import jakarta.persistence.JoinColumn;
import jakarta.persistence.Lob;
import jakarta.persistence.ManyToOne;

@Entity
public class Reading {
    @Id
    @GeneratedValue
    private Long id;

    @ManyToOne
    @JoinColumn(name = "workshop_id")
    private Workshop workshop;

    private String title;

    @Lob
    private String content;

    private LocalDateTime createdDate;

    public Reading() {
        this.title = "None";
        this.content = "None";
    }

    public Reading(String title, String content) {
        this.title = title;
        this.content = content;
        createdDate = LocalDateTime.now();
    }

    public String getTitle() {
        return this.title;
    }

    public String getContent() {
        return this.content;
    }

    public LocalDateTime getDate() {
        return this.createdDate;
    }

    public void setTitle(String title) {
        this.title = title;
    }

    public void setContent(String content) {
        this.content = content;
    }
 
    // Learn how to connect the entities with each other

}
