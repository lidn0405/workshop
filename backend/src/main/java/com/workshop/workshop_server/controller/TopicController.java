package com.workshop.workshop_server.controller;

import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.workshop.workshop_server.dto.TopicDto;
import com.workshop.workshop_server.service.topic.TopicService;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;

import java.util.List;


@RestController
@RequestMapping("/api/topic")
public class TopicController {

    private TopicService topicService;

    public TopicController(TopicService topicService) {
        this.topicService = topicService;
    }

    @GetMapping
    public List<TopicDto> getTopics() {
        return topicService.getTopics();
    }

    @GetMapping("/{id}")
    public TopicDto getTopic(@PathVariable Long id) {
        return topicService.getTopic(id);
    }

    @GetMapping("/{workshop_id}/all")
    public List<TopicDto> getAllTopicsFromWorkshop(@PathVariable Long workshop_id) {
        return topicService.getTopicsFromWorkshop(workshop_id);
    }

    @GetMapping("/{id}/subtopics")
    public List<TopicDto> getSubtopicsDtos(@PathVariable Long id) {
        return topicService.getSubtopics(id);
    }
    
    
    
    
}
