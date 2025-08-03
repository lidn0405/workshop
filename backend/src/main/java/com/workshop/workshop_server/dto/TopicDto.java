package com.workshop.workshop_server.dto;

import java.util.List;
import java.util.stream.Collectors;

import com.workshop.workshop_server.model.Topic;

public class TopicDto {
    private Long id;
    private String name;
    private Long workshop_id;
    private List<Long> reading_ids;
    private List<Long> subtopic_ids;
    private Long parent_id;

    public TopicDto(Topic topic) {
        this.id = topic.getId();
        this.name = topic.getName();
        this.workshop_id = topic.getWorkshop().getId();
        this.reading_ids = topic.getReadings().stream()
            .map(Reading -> Reading.getId())
            .collect(Collectors.toList());
        this.parent_id = topic.getParent() != null ? topic.getParent().getId() : null; 
        this.subtopic_ids = topic.getSubtopics().stream()
            .map(Topic -> Topic.getId())
            .collect(Collectors.toList());
    }

    public Long getId() {
        return this.id;
    }

    public String getName() {
        return this.name;
    }

    public Long getWorkshopId() {
        return this.workshop_id;
    }

    public List<Long> getReadingIds() {
        return this.reading_ids;
    }

    public List<Long> getsubtopicIds() {
        return this.subtopic_ids;
    }

    public Long getParentId() {
        return this.parent_id;
    }

    public void setName(String name) {
        this.name = name;
    }

    public void setWorkshopId(Long workshop_id) {
        this.workshop_id = workshop_id;
    }

    public void setReadingIds(List<Long> reading_ids) {
        this.reading_ids = reading_ids;
    }

    public void setSubtopicIds(List<Long> subtopic_ids) {
        this.subtopic_ids = subtopic_ids;
    }

    public void setParentId(Long parent_id) {
        this.parent_id = parent_id;
    }
}
