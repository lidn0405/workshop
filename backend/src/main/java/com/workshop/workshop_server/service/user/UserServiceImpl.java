package com.workshop.workshop_server.service.user;

import java.util.List;
import java.util.stream.Collectors;

import org.springframework.stereotype.Service;

import com.workshop.workshop_server.dto.UserDto;
import com.workshop.workshop_server.model.Role;
import com.workshop.workshop_server.model.User;
import com.workshop.workshop_server.repository.UserRepository;

import jakarta.persistence.EntityNotFoundException;

@Service
public class UserServiceImpl implements UserService {
    
    private UserRepository userRepository;

    public UserServiceImpl(UserRepository userRepository) {
        this.userRepository = userRepository;
    }

    @Override
    public List<UserDto> getUsers() {
        return userRepository.findAll().stream()
                .map(UserDto::new)
                .collect(Collectors.toList());
    }

    // TODO: Fix the joined and led workshops
    @Override
    public UserDto addUser(UserDto user) {
        User newUser = new User();
        newUser.setEmail(user.getEmail());
        newUser.setUsername(user.getUsername());
        try {
            newUser.setRole(Role.valueOf(user.getRole()));
        } catch (IllegalArgumentException e) {
            System.out.println("Invalid User Role");
        }
        userRepository.save(newUser);
        return new UserDto(newUser);
    }

    @Override
    public UserDto updateUser(Long id, UserDto updatedUser) {
        User tempUser = userRepository.findById(id)
            .map(user -> {
                user.setUsername(updatedUser.getUsername());
                user.setEmail(updatedUser.getEmail());
                userRepository.save(user);
                return user;
            })
            .orElseThrow(() -> new EntityNotFoundException("User not found with id " + id));
        
        return new UserDto(tempUser);
    }

    @Override
    public void deleteUser(Long id) {
        userRepository.deleteById(id);
    }

    @Override
    public UserDto getUser(Long id) {
        User user =  userRepository.findById(id)
            .orElseThrow(() -> new EntityNotFoundException("User not found with id " + id));
        
        return new UserDto(user);
    }

    @Override
    public List<Long> getWorkshopIds(Long id) {
        UserDto user = getUser(id);
        return user.getLedWorkshops();
    }
}
