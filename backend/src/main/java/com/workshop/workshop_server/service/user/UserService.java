package com.workshop.workshop_server.service.user;

import java.util.List;

import com.workshop.workshop_server.dto.UserDto;

public interface UserService {
    abstract List<UserDto> getUsers();
    abstract UserDto addUser(UserDto user);
    abstract UserDto updateUser(Long id, UserDto updatedUser);
    abstract void deleteUser(Long id);
    abstract UserDto getUser(Long id);
    abstract List<Long> getWorkshopIds(Long id);
    abstract UserDto getUserFromEmail(String email);
}
