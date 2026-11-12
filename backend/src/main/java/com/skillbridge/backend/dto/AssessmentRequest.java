package com.skillbridge.backend.dto;

import jakarta.validation.constraints.NotBlank;
import jakarta.validation.constraints.Size;

public class AssessmentRequest {

    @NotBlank(message = "Career goal is required")
    private String careerGoal;

    @NotBlank(message = "Skills data is required")
    @Size(max = 10000)
    private String skills;

    public String getCareerGoal() {
        return careerGoal;
    }

    public void setCareerGoal(String careerGoal) {
        this.careerGoal = careerGoal;
    }

    public String getSkills() {
        return skills;
    }

    public void setSkills(String skills) {
        this.skills = skills;
    }
}