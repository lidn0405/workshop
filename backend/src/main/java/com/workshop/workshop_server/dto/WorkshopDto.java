package com.workshop.workshop_server.dto;

import java.util.List;
import java.util.stream.Collectors;

import com.workshop.workshop_server.model.Topic;
import com.workshop.workshop_server.model.User;
import com.workshop.workshop_server.model.Workshop;

import jakarta.persistence.Id;

public class WorkshopDto {
    @Id
    private Long id;

    private String name;
    private String subject;
    private String description;
    private Long leadId;
    private List<Long> topicIds;

    public WorkshopDto(Workshop workshop) {
        this.id = workshop.getId();
        this.name = workshop.getName();
        this.subject = workshop.getSubject();
        this.description =workshop.getDescription();
        
        User lead = workshop.getLead();
        if (lead != null) {
            this.leadId = lead.getId();
        }

        List<Topic> topics = workshop.getTopics();
        if (topics != null) {
            topicIds = topics.stream()
                .map(Topic::getId)
                .collect(Collectors.toList());
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

    public List<Long> getTopicIds() {
        return this.topicIds;
    }
}
