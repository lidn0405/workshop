package com.workshop.workshop_server.dto;

public class AuthRequest {
    private String email; // Assuming authentication by email, adjust to 'username' if preferred
    private String password;


    public String getEmail() {
        return email;
    }

    public void setEmail(String email) {
        this.email = email;
    }

    public String getPassword() {
        return password;
    }

    public void setPassword(String password) {
        this.password = password;
    }
}
