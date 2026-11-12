package com.skillbridge.backend.repository;

import com.skillbridge.backend.entity.Assessment;
import org.springframework.data.jpa.repository.JpaRepository;
import java.util.List;
import java.util.Optional;

public interface AssessmentRepository extends JpaRepository<Assessment, Long> {

    List<Assessment> findByUserId(Long userId);

    Optional<Assessment> findTopByUserIdOrderByCreatedAtDesc(Long userId);
}