
package com.skillbridge.backend.dto;

import jakarta.validation.constraints.Email;
import jakarta.validation.constraints.NotBlank;
import jakarta.validation.constraints.Size;

public class RegisterRequest {

    @NotBlank(message = "Full name is required")
    @Size(min = 2, max = 80)
    private String fullName;

    @NotBlank(message = "Email is required")
    @Email(message = "Enter a valid email address")
    private String email;

    @NotBlank(message = "Password is required")
    @Size(min = 8, message = "Password must contain at least 8 characters")
    private String password;

    @NotBlank(message = "Please select a career goal")
    private String careerGoal;

    private static final java.util.Set<String> ALLOWED_CAREERS =
        java.util.Set.of(
            "AI / ML Engineer",
            "Full Stack Developer",
            "Data Scientist",
            "Software Engineer",
            "Data Analyst",
            "Cloud Engineer"
        );

    public String getFullName() {
        return fullName;
    }

    public void setFullName(String fullName) {
        this.fullName = fullName;
    }

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

    public String getCareerGoal() {
        return careerGoal;
    }

    public void setCareerGoal(String careerGoal) {
        this.careerGoal = careerGoal;
    }

    @jakarta.validation.constraints.AssertTrue(
        message = "Please select a valid career goal"
    )
    public boolean isCareerGoalValid() {
        return careerGoal != null &&
               ALLOWED_CAREERS.contains(careerGoal);
    }
}
