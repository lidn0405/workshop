package com.workshop.workshop_server.model;

import java.util.ArrayList;
import java.util.Collection;
import java.util.List;

import org.springframework.security.core.GrantedAuthority;
import org.springframework.security.core.authority.SimpleGrantedAuthority;
import org.springframework.security.core.userdetails.UserDetails;

import jakarta.persistence.Entity;
import jakarta.persistence.EnumType;
import jakarta.persistence.Enumerated;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.Id;
import jakarta.persistence.JoinColumn;
import jakarta.persistence.JoinTable;
import jakarta.persistence.ManyToMany;
import jakarta.persistence.OneToMany;
import jakarta.persistence.Table;

@Entity
@Table(name = "app_user")
public class User implements UserDetails{

    @Id
    @GeneratedValue
    private Long id;
    private String username;
    private String email;
    private String password;

    @Enumerated(EnumType.STRING)
    private Role role;

    @OneToMany(mappedBy = "lead")
    private List<Workshop> led_workshops = new ArrayList<>();

    @ManyToMany
     @JoinTable(
        name = "joined_workshops",
        joinColumns = @JoinColumn(name = "user_id"),
        inverseJoinColumns = @JoinColumn(name = "workshop_id"))
    List<Workshop> joined_workshops;

    public User() {
        this.email = "None";
        this.username = "None";
        this.password = "None";
        this.role = Role.USER;
    }

    public User(String email, String username, String password) {
        this.email = email;
        this.username = username;
        this.password = password;
        this.role = Role.USER;
    }

    public Long getId() {
        return this.id;
    }

    public String getEmail() {
        return this.email;
    }

    // Used for auth purposes
    @Override
    public String getUsername() {
        return this.email;
    }

    public String getDisplayName() {
        return this.username;
    }

    public String getPassword() {
        return this.password;
    }

    public Role getRole() {
        return this.role;
    }

    public List<Workshop> getLedWorkshops() {
        return this.led_workshops;
    }

    public List<Workshop> getJoinedWorkshops() {
        return this.joined_workshops;
    }

    public void setEmail(String email) {
        this.email = email;
    }

    public void setUsername(String username) {
        this.username = username;
    }

    // Figure out how to do security
    public void setPassword(String password) {
        this.password = password;
    }

    public void setRole(Role role) {
        this.role = role;
    }

    public void setLedWorkshops(List<Workshop> led_workshops) {
        this.led_workshops = led_workshops;
    }

    public void setJoinedWorkshops(List<Workshop> joined_workshops) {
        this.joined_workshops = joined_workshops;
    }

    @Override
    public Collection<? extends GrantedAuthority> getAuthorities() {
        return List.of(new SimpleGrantedAuthority("ROLE_" + role.name()));
    }

    @Override public boolean isAccountNonExpired() { return true; }
    @Override public boolean isAccountNonLocked() { return true; }
    @Override public boolean isCredentialsNonExpired() { return true; }
    @Override public boolean isEnabled() { return true; }
}
