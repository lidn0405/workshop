package com.workshop.workshop_server.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.workshop.workshop_server.entity.Topic;
import com.workshop.workshop_server.service.topic.TopicService;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;

import java.util.List;

@RestController
@RequestMapping("/api/topic")
public class TopicController {

    @Autowired
    private TopicService topicService;

    public TopicController(TopicService topicService) {
        this.topicService = topicService;
    }

    @GetMapping
    public List<Topic> getTopics() {
        return topicService.getTopics();
    }

    @GetMapping("/{id}")
    public Topic getTopic(@PathVariable Long id) {
        return topicService.getTopic(id);
    }
    
    
}
