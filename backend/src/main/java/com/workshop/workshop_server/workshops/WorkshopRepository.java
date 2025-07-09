package com.workshop.workshop_server.workshops;

import org.springframework.data.jpa.repository.JpaRepository;

public interface WorkshopRepository extends JpaRepository<Workshop, Long>{
    
}
