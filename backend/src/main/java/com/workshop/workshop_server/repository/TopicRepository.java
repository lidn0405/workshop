package com.workshop.workshop_server.repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;

import com.workshop.workshop_server.model.Topic;

public interface TopicRepository extends JpaRepository<Topic, Long>{
    List<Topic> findByWorkshop_Id(Long workshop_id);
}