package com.workshop.workshop_server.controller;

import java.util.List;

import org.springframework.web.bind.annotation.RestController;

import com.workshop.workshop_server.model.User;
import com.workshop.workshop_server.model.Workshop;
import com.workshop.workshop_server.repository.UserRepository;
import com.workshop.workshop_server.service.user.UserService;

import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.PutMapping;


@RestController
@RequestMapping("/api/users")
public class UserController {

    private UserService userService;

    public UserController(UserService userService, UserRepository userRepository) {
        this.userService = userService;
    }

    @GetMapping
    public List<User> getUsers() {
        return userService.getUsers();
    }

    @PostMapping
    public User addUser(@RequestBody User user) {
        return userService.addUser(user);
    }
    
    @PutMapping("/{id}")
    public User updataUser(@PathVariable Long id,@RequestBody User newUser) {
        return userService.updateUser(id, newUser);
    }

    @DeleteMapping("/{id}")
    public void deleteUser(Long id) {
        userService.deleteUser(id);
    }

    @GetMapping("/{id}")
    public User getUser(@PathVariable Long id) {
        return userService.getUser(id);
    }
    
    @GetMapping("/{id}/workshops")
    public List<Workshop> getWorkshops(@PathVariable Long id) {
        return userService.getWorkshops(id);
    }
    
}
