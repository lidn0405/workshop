package com.workshop.workshop_server.service.user;

import java.util.List;

import org.springframework.stereotype.Service;

import com.workshop.workshop_server.dto.UserDto;
import com.workshop.workshop_server.model.User;
import com.workshop.workshop_server.model.Workshop;
import com.workshop.workshop_server.repository.UserRepository;

import jakarta.persistence.EntityNotFoundException;

@Service
public class UserServiceImpl implements UserService {
    
    private UserRepository userRepository;

    public UserServiceImpl(UserRepository userRepository) {
        this.userRepository = userRepository;
    }

    @Override
    public List<User> getUsers() {
        return userRepository.findAll();
    }

    @Override
    public User addUser(User user) {
        return userRepository.save(user);
    }

    @Override
    public User updateUser(Long id, User updatedUser) {
        return userRepository.findById(id)
            .map(user -> {
                user.setName(updatedUser.getName());
                user.setUsername(updatedUser.getUsername());
                user.setEmail(updatedUser.getEmail());
                userRepository.save(user);
                return user;
            })
            .orElseGet(() -> userRepository.save(updatedUser));
    }

    @Override
    public void deleteUser(Long id) {
        userRepository.deleteById(id);
    }

    @Override
    public User getUser(Long id) {
        return userRepository.findById(id)
            .orElseThrow(() -> new EntityNotFoundException("User not found with id " + id));
    }

    @Override
    public List<Workshop> getWorkshops(Long id) {
        User user = getUser(id);
        return user.getLedWorkshops();
    }

    public UserDto getUserDto(Long id) {
        User user = getUser(id);

        return new UserDto(user);
    }
}
