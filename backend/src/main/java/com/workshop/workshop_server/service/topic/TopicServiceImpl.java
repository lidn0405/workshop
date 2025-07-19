package com.workshop.workshop_server.service.topic;

import java.util.List;

import org.springframework.stereotype.Service;

import com.workshop.workshop_server.model.Topic;
import com.workshop.workshop_server.repository.TopicRepository;
import jakarta.persistence.EntityNotFoundException;

@Service
public class TopicServiceImpl implements TopicService{
    private TopicRepository topicRepository;

    public TopicServiceImpl(TopicRepository topicRepository) {
        this.topicRepository = topicRepository;
    }

    public List<Topic> getTopics() {
        return topicRepository.findAll();
    }

    public Topic getTopic(Long id) {
        return topicRepository.findById(id)
            .orElseThrow(() -> new EntityNotFoundException("Topic not found with id: " + id));
    }
}
