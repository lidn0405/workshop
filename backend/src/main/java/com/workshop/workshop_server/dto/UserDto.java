package com.workshop.workshop_server.dto;

import java.util.List;
import java.util.stream.Collectors;

import com.workshop.workshop_server.model.User;


public class UserDto {

    private Long id;
    private String name;
    private String email;
    private String username;
    private String password;
    private String role;
    private List<Long> led_workshops_ids;
    private List<Long> joined_workshops_ids;

    public UserDto(User user) {
        this.id = user.getId();
        this.name = user.getName();
        this.email = user.getEmail();
        this.username = user.getUsername();
        this.password = user.getPassword();
        this.role = user.getRole().name();
        this.led_workshops_ids = user.getLedWorkshops().stream()
                .map(Workshop -> Workshop.getId())
                .collect(Collectors.toList());
        this.joined_workshops_ids = user.getJoinedWorkshops().stream()
                .map(Workshop -> Workshop.getId())
                .collect(Collectors.toList());
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

    public String getUsername() {
        return this.username;
    }

    public String getPassword() {
        return this.password;
    }

    public String getRole() {
        return this.role;
    }

    public List<Long> getLedWorkshops() {
        return this.led_workshops_ids;
    }

    public List<Long> getJoinedWorkshops() {
        return this.joined_workshops_ids;
    }

}
