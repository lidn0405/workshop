package com.workshop.workshop_server.controller;

import java.util.List;

import org.springframework.web.bind.annotation.RestController;

import com.workshop.workshop_server.entity.User;
import com.workshop.workshop_server.repository.UserRepository;
import com.workshop.workshop_server.service.user.UserService;
import com.workshop.workshop_server.entity.Workshop;

import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.PutMapping;


@RestController
@RequestMapping("/api")
public class UserController {

    private UserService userService;

    public UserController(UserService userService, UserRepository userRepository) {
        this.userService = userService;
    }

    @GetMapping("/users")
    public List<User> getUsers() {
        return userService.getUsers();
    }

    @PostMapping("/users")
    public User addUser(@RequestBody User user) {
        return userService.addUser(user);
    }
    
    @PutMapping("/users/{id}")
    public User updataUser(@PathVariable Long id,@RequestBody User newUser) {
        return userService.updateUser(id, newUser);
    }

    @DeleteMapping("/users/{id}")
    public void deleteUser(Long id) {
        userService.deleteUser(id);
    }

    @GetMapping("/users/{id}")
    public User getUser(@PathVariable Long id) {
        return userService.getUser(id);
    }
    
    @GetMapping("/users/{id}/workshops")
    public List<Workshop> getWorkshops(@PathVariable Long id) {
        return userService.getWorkshops(id);
    }
    
}
