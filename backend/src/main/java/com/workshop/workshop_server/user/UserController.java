package com.workshop.workshop_server.user;

import java.util.List;

import org.springframework.web.bind.annotation.RestController;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.PutMapping;


@RestController
public class UserController {

    @Autowired
    private UserService userService;

    public UserController(UserService userService) {
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
    public User getMethodName(@PathVariable Long id) {
        return userService.getUser(id);
    }
    
}
