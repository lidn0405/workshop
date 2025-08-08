package com.workshop.workshop_server.controller;

import java.util.List;

import org.springframework.web.bind.annotation.RestController;

import com.workshop.workshop_server.dto.UserDto;
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
    public List<UserDto> getUsers() {
        return userService.getUsers();
    }

    @GetMapping("/{id}")
    public UserDto getUser(@PathVariable Long id) {
        return userService.getUser(id);
    }

    @PostMapping
    public UserDto addUser(@RequestBody UserDto user) {
        return userService.addUser(user);
    }
    
    @PutMapping("/{id}")
    public UserDto updataUser(@PathVariable Long id,@RequestBody UserDto newUser) {
        return userService.updateUser(id, newUser);
    }

    @DeleteMapping("/{id}")
    public void deleteUser(Long id) {
        userService.deleteUser(id);
    }
    
    @GetMapping("/{id}/workshops")
    public List<Long> getWorkshops(@PathVariable Long id) {
        return userService.getWorkshopIds(id);
    }

    @GetMapping("/email/{email}")
    public UserDto getUserFromEmail(@PathVariable String email) {
        return userService.getUserFromEmail(email);
    }
    
    
}
