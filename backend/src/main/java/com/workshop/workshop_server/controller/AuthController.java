package com.workshop.workshop_server.controller;

import java.util.Map;

import org.springframework.http.ResponseEntity;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.workshop.workshop_server.dto.AuthRequest;
import com.workshop.workshop_server.dto.RegisterRequest;
import com.workshop.workshop_server.model.Role;
import com.workshop.workshop_server.model.User;
import com.workshop.workshop_server.repository.UserRepository;
import com.workshop.workshop_server.security.JwtService;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;


@RestController
@RequestMapping("/api/auth")
public class AuthController {
    private final UserRepository userRepository;
    private final PasswordEncoder passwordEncoder;
    private final JwtService jwtService;
    private final AuthenticationManager authenticationManager;

    public AuthController(UserRepository userRepository, PasswordEncoder passwordEncoder, JwtService jwtService, AuthenticationManager authenticationManager) {
        this.userRepository = userRepository;
        this.passwordEncoder = passwordEncoder;
        this.jwtService = jwtService;
        this.authenticationManager = authenticationManager;
    }

    @PostMapping("/register")
    public ResponseEntity<Map<String, String>> register(@RequestBody RegisterRequest request) {
        if (userRepository.findByEmail(request.getEmail()).isPresent()) {
            return ResponseEntity.badRequest().body(Map.of("message", "Email already registered"));
        }
        if (userRepository.findByUsername(request.getUsername()).isPresent()) { // Assuming findByUsername exists
            return ResponseEntity.badRequest().body(Map.of("message", "Username already taken"));
        }

        User user = new User();
        user.setName(request.getName());
        user.setEmail(request.getEmail());
        user.setUsername(request.getUsername());
        user.setPassword(passwordEncoder.encode(request.getPassword()));
        user.setRole(Role.USER); // Set default role or based on request

        userRepository.save(user);

        // Generate token immediately after registration if desired
        String jwtToken = jwtService.generateToken(user);
        return ResponseEntity.ok(Map.of("token", jwtToken));
    }
    
    @PostMapping("/authenticate")
    public ResponseEntity<Map<String, String>> authenticate(@RequestBody AuthRequest request) {
        authenticationManager.authenticate(
            new UsernamePasswordAuthenticationToken(
                request.getEmail(), // Or username, depending on what your UserDetailsService uses
                request.getPassword()
            )
        );
        User user = userRepository.findByEmail(request.getEmail())
                                .orElseThrow(() -> new RuntimeException("User not found")); // Should not happen after authenticate

        String jwtToken = jwtService.generateToken(user);
        return ResponseEntity.ok(Map.of("token", jwtToken));
    }
}
