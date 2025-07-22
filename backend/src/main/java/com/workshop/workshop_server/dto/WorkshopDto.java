package com.workshop.workshop_server.dto;

import com.workshop.workshop_server.model.User;
import com.workshop.workshop_server.model.Workshop;

import jakarta.persistence.GeneratedValue;
import jakarta.persistence.Id;

public class WorkshopDto {
    @Id
    @GeneratedValue
    private Long id;

    private String name;
    private String subject;
    private String description;
    private Long leadId;

    public WorkshopDto(Workshop workshop) {
        this.id = workshop.getId();
        this.name = workshop.getName();
        this.subject = workshop.getSubject();
        this.description =workshop.getDescription();
        
        User lead = workshop.getLead();
        if (lead != null) {
            this.leadId = lead.getId();
        }
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

    public Long getLeadId() {
        return this.leadId;
    }

    public void setName(String name) {
        this.name = name;
    }

    public void setSubject(String subject) {
        this.subject = subject;
    }

    public void setDescription(String desc) {
        this.description = desc;
    }
}
