package com.workshop.workshop_server.service.topic;

import java.util.List;

import com.workshop.workshop_server.model.Topic;

public interface TopicService {
    abstract List<Topic> getTopics();
    abstract Topic getTopic(Long id);
}
