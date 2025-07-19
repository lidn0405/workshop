package com.workshop.workshop_server.model;

import java.util.List;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.Id;
import jakarta.persistence.JoinColumn;
import jakarta.persistence.JoinTable;
import jakarta.persistence.ManyToMany;
import jakarta.persistence.OneToMany;
import jakarta.persistence.Table;

@Entity
@Table(name = "app_user")
public class User {

    @Id
    @GeneratedValue
    private Long id;
    private String name;
    private String email;
    private String password;

    @OneToMany(mappedBy = "lead")
    private List<Workshop> led_workshops;

    @ManyToMany
     @JoinTable(
        name = "joined_workshops",
        joinColumns = @JoinColumn(name = "user_id"),
        inverseJoinColumns = @JoinColumn(name = "workshop_id"))
    List<Workshop> joined_workshops;

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

    public List<Workshop> getLedWorkshops() {
        return this.led_workshops;
    }
}
