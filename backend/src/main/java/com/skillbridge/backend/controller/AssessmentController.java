
package com.skillbridge.backend.controller;

import com.skillbridge.backend.dto.AssessmentRequest;
import com.skillbridge.backend.entity.Assessment;
import com.skillbridge.backend.entity.User;
import com.skillbridge.backend.repository.UserRepository;
import com.skillbridge.backend.service.AssessmentService;

import jakarta.validation.Valid;

import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.core.Authentication;
import org.springframework.web.bind.annotation.*;

import java.util.Map;

@RestController
@RequestMapping("/api/assessments")
public class AssessmentController {

    private final AssessmentService assessmentService;
    private final UserRepository userRepository;

    public AssessmentController(
            AssessmentService assessmentService,
            UserRepository userRepository) {

        this.assessmentService = assessmentService;
        this.userRepository = userRepository;
    }

    // Submit assessment
    @PostMapping
    public ResponseEntity<?> submitAssessment(
            @Valid @RequestBody AssessmentRequest request,
            Authentication authentication) {

        User user = getUser(authentication);

        if (user == null) {
            return ResponseEntity.status(HttpStatus.UNAUTHORIZED)
                    .body(Map.of("message", "User not found"));
        }

        Assessment assessment = assessmentService.saveAssessment(
                user.getId(), request
        );

        return ResponseEntity.status(HttpStatus.CREATED)
                .body(assessment);
    }

    // Get skill gap analysis
    @GetMapping("/analysis")
    public ResponseEntity<?> getAnalysis(
            Authentication authentication) throws Exception {

        User user = getUser(authentication);

        if (user == null) {
            return ResponseEntity.status(HttpStatus.UNAUTHORIZED)
                    .body(Map.of("message", "User not found"));
        }

        return ResponseEntity.ok(
                assessmentService.analyzeSkills(user.getId())
        );
    }

    // Get learning roadmap
    @GetMapping("/roadmap")
    public ResponseEntity<?> getRoadmap(
            Authentication authentication) throws Exception {

        User user = getUser(authentication);

        if (user == null) {
            return ResponseEntity.status(HttpStatus.UNAUTHORIZED)
                    .body(Map.of("message", "User not found"));
        }

        return ResponseEntity.ok(
                assessmentService.generateRoadmap(user.getId())
        );
    }

    // Find logged-in user
    private User getUser(Authentication authentication) {

        if (authentication == null) {
            return null;
        }

        return userRepository.findByEmail(authentication.getName())
                .orElse(null);
    }
}
