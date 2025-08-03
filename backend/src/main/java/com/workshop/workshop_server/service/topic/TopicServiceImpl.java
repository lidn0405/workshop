package com.workshop.workshop_server.service.topic;

import java.util.List;
import java.util.stream.Collectors;

import org.springframework.stereotype.Service;

import com.workshop.workshop_server.dto.TopicDto;
import com.workshop.workshop_server.model.Topic;
import com.workshop.workshop_server.repository.TopicRepository;
import jakarta.persistence.EntityNotFoundException;

@Service
public class TopicServiceImpl implements TopicService{
    private TopicRepository topicRepository;

    public TopicServiceImpl(TopicRepository topicRepository) {
        this.topicRepository = topicRepository;
    }

    public List<TopicDto> getTopics() {
        List<Topic> topics = topicRepository.findAll();
        return topics.stream()
                .map(TopicDto::new)
                .collect(Collectors.toList());
    }

    public TopicDto getTopic(Long id) {
        Topic topic = topicRepository.findById(id)
            .orElseThrow(() -> new EntityNotFoundException("Topic not found with id: " + id));
        
        return new TopicDto(topic);
    }

    public List<TopicDto> getSubtopics(Long id) {
        Topic topic = topicRepository.findById(id)
            .orElseThrow(() -> new EntityNotFoundException("Topic not found with id: " + id));

        return topic.getSubtopics()
                .stream()
                .map(TopicDto::new)
                .collect(Collectors.toList());
    }

    public List<TopicDto> getTopicsFromWorkshop(Long workshop_id) {
        List<Topic> topics = topicRepository.findByWorkshop_Id(workshop_id);
        if (topics.isEmpty()) {
            throw new EntityNotFoundException("No topics found for workshop with id: " + workshop_id);
        }
        return topics.stream()
                .map(TopicDto::new)
                .collect(Collectors.toList());
    }
}
