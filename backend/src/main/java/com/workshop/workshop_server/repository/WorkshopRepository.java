package com.workshop.workshop_server.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.workshop.workshop_server.entity.Workshop;

public interface WorkshopRepository extends JpaRepository<Workshop, Long>{
    
}
