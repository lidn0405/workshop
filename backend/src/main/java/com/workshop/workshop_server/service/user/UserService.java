package com.workshop.workshop_server.service.user;

import java.util.List;

import com.workshop.workshop_server.model.User;
import com.workshop.workshop_server.model.Workshop;

public interface UserService {
    abstract List<User> getUsers();
    abstract User addUser(User user);
    abstract User updateUser(Long id, User updatedUser);
    abstract void deleteUser(Long id);
    abstract User getUser(Long id);
    abstract List<Workshop> getWorkshops(Long id);
}
