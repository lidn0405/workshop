package com.workshop.workshop_server.config;

import java.util.Arrays;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.CommandLineRunner;
import org.springframework.stereotype.Component;

import com.workshop.workshop_server.model.Reading;
import com.workshop.workshop_server.model.Topic;
import com.workshop.workshop_server.model.User;
import com.workshop.workshop_server.model.Workshop;
import com.workshop.workshop_server.repository.ReadingRepository;
import com.workshop.workshop_server.repository.TopicRepository;
import com.workshop.workshop_server.repository.UserRepository;
import com.workshop.workshop_server.repository.WorkshopRepository;

@Component
public class DataInitializer implements CommandLineRunner{
    
    @Autowired
    ReadingRepository readingRepository;
    @Autowired
    TopicRepository topicRepository;
    @Autowired
    UserRepository userRepository;
    @Autowired
    WorkshopRepository workshopRepository;

    @Override
    public void run(String... args) {
        User admin = new User("admin@email", "admin", "admin");
        Workshop test1 = new Workshop("TestWorkshop", "Subject", "Desc", admin);

        Topic topicTest = new Topic("test", test1);
        Topic topicTest2 = new Topic("subtopic_test", null, null, null);
        topicTest2.setParent(topicTest);
        topicTest.setSubtopics(Arrays.asList(topicTest2));

        if (userRepository.count() == 0) {
            userRepository.save(admin);
            userRepository.save(
                new User("user1@email.com", "User1", "Password")
            );
            System.out.println("Users initialized");
        }

        if (workshopRepository.count() == 0) {
            workshopRepository.save(test1);
            workshopRepository.save(
                new Workshop("Workshop1", "Subject", "Desc", admin)
            );
            workshopRepository.save(
                new Workshop("Workshop2", "Subject", "Desc", admin)
            );
            workshopRepository.save(
                new Workshop("Workshop3", "Subject", "Desc", admin)
            );
            System.out.println("Workshops initialized");
        }

        if (readingRepository.count() == 0) {
            readingRepository.save(
                new Reading("Reading1", "AYAYA")
            );
            System.out.println("Readings initialized");
        }

        if (topicRepository.count() == 0) {
            topicRepository.save(topicTest);
            topicRepository.save(topicTest2);
            topicRepository.save(
                new Topic("Topic1", test1)  
            );
            topicRepository.save(
                new Topic("Topic2", test1, null, null)  
            );
            System.out.println("Topics initialized");
        }
        
    }

}
