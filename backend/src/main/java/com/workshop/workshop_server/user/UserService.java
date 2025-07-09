package com.workshop.workshop_server.user;

import java.util.List;

public interface UserService {
    abstract List<User> getUsers();
    abstract User addUser(User user);
    abstract User updateUser(Long id, User updatedUser);
    abstract void deleteUser(Long id);
    abstract User getUser(Long id);
}
