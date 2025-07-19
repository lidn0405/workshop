package com.workshop.workshop_server.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.workshop.workshop_server.model.Reading;

public interface ReadingRepository extends JpaRepository<Reading, Long>{
    
}
