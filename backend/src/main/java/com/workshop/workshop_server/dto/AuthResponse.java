package com.workshop.workshop_server.dto;

public class AuthResponse {
    private String token;
    private String username;

    public AuthResponse() {}

    public AuthResponse(String token, String username) {
        this.token = token;
        this.username = username;
    }

    public String getToken() {
        return token;
    }
    
    public String getUsername() {
        return this.username;
    }

    public void setToken(String token) {
        this.token = token;
    }

    public void setUsername(String username) {
        this.username = username;
    }
}
