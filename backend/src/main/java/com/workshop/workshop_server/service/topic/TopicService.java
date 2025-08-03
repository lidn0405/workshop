package com.workshop.workshop_server.service.topic;

import java.util.List;

import com.workshop.workshop_server.dto.TopicDto;

public interface TopicService {
    abstract List<TopicDto> getTopics();
    abstract TopicDto getTopic(Long id);
    abstract List<TopicDto> getSubtopics(Long id);
    abstract List<TopicDto> getTopicsFromWorkshop(Long workshop_id);
}
