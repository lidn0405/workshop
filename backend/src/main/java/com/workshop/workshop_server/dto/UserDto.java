package com.workshop.workshop_server.dto;

import com.workshop.workshop_server.model.User;

import jakarta.persistence.GeneratedValue;
import jakarta.persistence.Id;

public class UserDto {

    @Id
    @GeneratedValue
    private Long id;
    private String name;
    private String email;
    private String password;

    public UserDto(User user) {
        this.name = user.getName();
        this.email = user.getEmail();
        this.password = user.getPassword();
    }

    public String getName() {
        return this.name;
    }

    public String getEmail() {
        return this.email;
    }

    public String getPassword() {
        return this.password;
    }

    public void setName(String name) {
        this.name = name;
    }

    public void setEmail(String email) {
        this.email = email;
    }

    public void setPassword(String password) {
        this.password = password;
    }
}
