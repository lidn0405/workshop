package com.workshop.workshop_server.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.workshop.workshop_server.entity.Topic;

public interface TopicRepository extends JpaRepository<Topic, Long>{}