package com.workshop.workshop_server.user;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.Id;
import jakarta.persistence.Table;

@Entity
@Table(name = "\"users\"")
public class User {

    @Id
    @GeneratedValue
    private Long id;
    private String name;
    private String email;
    private String password;


    public User() {
        this.name = "None";
        this.email = "None";
        this.password = "None";
    }

    public User(String name, String email, String password) {
        this.name = name;
        this.email = email;
        this.password = password;
    }

    public Long getId() {
        return this.id;
    }

    public String getName() {
        return this.name;
    }

    public String getEmail() {
        return this.email;
    }

    // Figure out how to do security
    public String getPassword() {
        return this.password;
    }

    public void setName(String name) {
        this.name = name;
    }

    public void setEmail(String email) {
        this.email = email;
    }

    // Figure out how to do security
    public void setPassword(String password) {
        this.password = password;
    }
}
