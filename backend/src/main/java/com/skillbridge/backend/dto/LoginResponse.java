
package com.skillbridge.backend.dto;

import java.time.LocalDateTime;

public class LoginResponse {

    private String token;
    private Long id;
    private String fullName;
    private String email;
    private String careerGoal;
    private LocalDateTime createdAt;

    public LoginResponse(
            String token,
            Long id,
            String fullName,
            String email,
            String careerGoal,
            LocalDateTime createdAt) {

        this.token = token;
        this.id = id;
        this.fullName = fullName;
        this.email = email;
        this.careerGoal = careerGoal;
        this.createdAt = createdAt;
    }

    public String getToken() {
        return token;
    }

    public Long getId() {
        return id;
    }

    public String getFullName() {
        return fullName;
    }

    public String getEmail() {
        return email;
    }

    public String getCareerGoal() {
        return careerGoal;
    }

    public LocalDateTime getCreatedAt() {
        return createdAt;
    }
}
