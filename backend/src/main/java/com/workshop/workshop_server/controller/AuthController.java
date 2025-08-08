package com.workshop.workshop_server.controller;

import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.core.Authentication;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.workshop.workshop_server.dto.AuthRequest;
import com.workshop.workshop_server.dto.AuthResponse;
import com.workshop.workshop_server.dto.UserDto;
import com.workshop.workshop_server.model.User;
import com.workshop.workshop_server.security.JwtService;
import com.workshop.workshop_server.security.RegisterService;

import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;


@RestController
@RequestMapping("/auth")
public class AuthController {

    private AuthenticationManager authManager;
    private JwtService jwtService;
    private RegisterService registerService;

    public AuthController(AuthenticationManager authenticationManager, JwtService jwtService, RegisterService registerService) {
        this.authManager = authenticationManager;
        this.jwtService = jwtService;
        this.registerService = registerService;
    }

    @PostMapping("/login")
    public ResponseEntity<?> login(@RequestBody AuthRequest request) {
        Authentication auth = authManager.authenticate(
            new UsernamePasswordAuthenticationToken(request.getEmail(), request.getPassword())
            );
        UserDetails user = (UserDetails) auth.getPrincipal();
        String token = jwtService.generateToken(user);

        return ResponseEntity.ok(new AuthResponse(token));
    }

    @PostMapping("/register")
    public ResponseEntity<?> register(@RequestBody AuthRequest request) {
        User newUser = registerService.registerUser(request);
        UserDto userDto = new UserDto(newUser);

        // Ensures 201 message
        return new ResponseEntity<>(userDto, HttpStatus.CREATED);
    }
    
    
}
