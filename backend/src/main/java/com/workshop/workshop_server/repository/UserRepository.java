package com.workshop.workshop_server.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.workshop.workshop_server.entity.User;

public interface UserRepository extends JpaRepository<User, Long> {
    
}
