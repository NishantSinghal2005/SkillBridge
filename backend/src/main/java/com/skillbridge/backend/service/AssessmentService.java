package com.skillbridge.backend.service;

import com.fasterxml.jackson.databind.JsonNode;
import com.fasterxml.jackson.databind.ObjectMapper;
import com.skillbridge.backend.dto.AssessmentRequest;
import com.skillbridge.backend.entity.Assessment;
import com.skillbridge.backend.repository.AssessmentRepository;
import org.springframework.stereotype.Service;
import java.util.*;

@Service
public class AssessmentService {
    private final AssessmentRepository assessmentRepository;
    private final ObjectMapper objectMapper = new ObjectMapper();

    public AssessmentService(AssessmentRepository assessmentRepository) {
        this.assessmentRepository = assessmentRepository;
    }

    public Assessment saveAssessment(Long userId, AssessmentRequest request) {
        Assessment a = new Assessment();
        a.setUserId(userId);
        a.setCareerGoal(request.getCareerGoal());
        a.setSkills(request.getSkills());
        return assessmentRepository.save(a);
    }

    private Map<String, List<String>> requirements() {
        Map<String, List<String>> m = new LinkedHashMap<>();
        m.put("AI / ML Engineer", List.of("Python", "Machine Learning", "Deep Learning", "SQL", "Data Structures & Algorithms", "Git/GitHub"));
        m.put("Full Stack Developer", List.of("HTML/CSS", "JavaScript", "React", "Node.js", "SQL", "Git/GitHub"));
        m.put("Data Scientist", List.of("Python", "SQL", "Machine Learning", "Statistics", "Data Visualization", "Deep Learning"));
        m.put("Software Engineer", List.of("Java", "C++", "Data Structures & Algorithms", "Operating Systems", "Computer Networks", "Git/GitHub"));
        m.put("Data Analyst", List.of("Python", "SQL", "Statistics", "Data Visualization", "Excel", "MySQL"));
        m.put("Cloud Engineer", List.of("Linux", "Computer Networks", "Python", "Cloud Computing", "Git/GitHub", "Operating Systems"));
        return m;
    }

    public Map<String, Object> analyzeSkills(Long userId) throws Exception {
        Assessment a = assessmentRepository.findTopByUserIdOrderByCreatedAtDesc(userId)
                .orElseThrow(() -> new NoSuchElementException("No assessment found. Please take the exam."));
        List<String> required = requirements().getOrDefault(a.getCareerGoal(), Collections.emptyList());
        JsonNode data = objectMapper.readTree(a.getSkills());
        Map<String, String> levels = new HashMap<>();
        for (JsonNode item : data) levels.put(item.path("name").asText(), item.path("level").asText("Beginner"));
        List<String> strong = new ArrayList<>(), weak = new ArrayList<>(), missing = new ArrayList<>();
        double points = 0;
        for (String skill : required) {
            String level = levels.get(skill);
            if (level == null) missing.add(skill);
            else if (level.equalsIgnoreCase("Advanced")) { strong.add(skill); points += 1.0; }
            else if (level.equalsIgnoreCase("Intermediate")) { strong.add(skill); points += 0.65; }
            else { weak.add(skill); points += 0.25; }
        }
        int score = required.isEmpty() ? 0 : (int)Math.round(points * 100.0 / required.size());
        Map<String,Object> result = new LinkedHashMap<>();
        result.put("assessmentId", a.getId()); result.put("careerGoal", a.getCareerGoal()); result.put("readinessScore", score);
        result.put("requiredSkills", required); result.put("strongSkills", strong); result.put("weakSkills", weak); result.put("missingSkills", missing);
        return result;
    }

    private Map<String, String> resources() {
        Map<String,String> r = new HashMap<>();
        r.put("Python", "https://docs.python.org/3/tutorial/"); r.put("Machine Learning", "https://scikit-learn.org/stable/tutorial/index.html");
        r.put("Deep Learning", "https://www.tensorflow.org/tutorials"); r.put("SQL", "https://www.w3schools.com/sql/");
        r.put("Data Structures & Algorithms", "https://www.geeksforgeeks.org/data-structures/"); r.put("Git/GitHub", "https://docs.github.com/en/get-started");
        r.put("HTML/CSS", "https://developer.mozilla.org/en-US/docs/Learn"); r.put("JavaScript", "https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide");
        r.put("React", "https://react.dev/learn"); r.put("Node.js", "https://nodejs.org/en/learn"); r.put("Statistics", "https://www.khanacademy.org/math/statistics-probability");
        r.put("Data Visualization", "https://www.tableau.com/learn/training"); r.put("Java", "https://dev.java/learn/"); r.put("C++", "https://www.learncpp.com/");
        r.put("Operating Systems", "https://pages.cs.wisc.edu/~remzi/OSTEP/"); r.put("Computer Networks", "https://www.cloudflare.com/learning/network-layer/what-is-a-computer-network/");
        r.put("Excel", "https://support.microsoft.com/excel"); r.put("MySQL", "https://dev.mysql.com/doc/"); r.put("Linux", "https://ubuntu.com/tutorials/command-line-for-beginners");
        r.put("Cloud Computing", "https://aws.amazon.com/training/");
        return r;
    }

    private Map<String, String> projects() {
        Map<String,String> p = new HashMap<>();
        p.put("Python", "Build a command-line expense tracker"); p.put("Machine Learning", "Train and evaluate a house-price prediction model");
        p.put("Deep Learning", "Build an image classifier and document its accuracy"); p.put("SQL", "Design a relational student database with joins and reports");
        p.put("Data Structures & Algorithms", "Solve 30 array, string, tree and graph problems"); p.put("Git/GitHub", "Publish two projects with clear README files");
        p.put("HTML/CSS", "Create a responsive portfolio website"); p.put("JavaScript", "Build an interactive task manager");
        p.put("React", "Build a searchable product dashboard"); p.put("Node.js", "Create a REST API with validation");
        p.put("Statistics", "Analyze a public dataset and explain confidence intervals"); p.put("Data Visualization", "Create an interactive sales dashboard");
        p.put("Java", "Build a console-based library management system"); p.put("C++", "Implement a command-line inventory manager");
        p.put("Operating Systems", "Document process scheduling simulations"); p.put("Computer Networks", "Build and document a client-server socket demo");
        p.put("Excel", "Create a pivot-table based monthly report"); p.put("MySQL", "Build a normalized database with indexes");
        p.put("Linux", "Write shell scripts to automate backups and logs"); p.put("Cloud Computing", "Deploy a small web app using a cloud free tier");
        return p;
    }

    public List<Map<String,Object>> generateRoadmap(Long userId) throws Exception {
        Map<String,Object> analysis = analyzeSkills(userId);
        @SuppressWarnings("unchecked") List<String> weak = (List<String>)analysis.get("weakSkills");
        @SuppressWarnings("unchecked") List<String> missing = (List<String>)analysis.get("missingSkills");
        List<String> todo = new ArrayList<>(weak); todo.addAll(missing);
        List<Map<String,Object>> roadmap = new ArrayList<>();
        Map<String,String> resources = resources(), projects = projects();
        int week = 1;
        for (String skill : todo) {
            Map<String,Object> step = new LinkedHashMap<>();
            step.put("week", week++); step.put("skill", skill);
            step.put("project", projects.getOrDefault(skill, "Complete a practical mini-project in " + skill));
            step.put("resourceUrl", resources.getOrDefault(skill, "https://www.google.com/search?q=" + skill.replace(" ", "+") + "+tutorial"));
            step.put("projectUrl", "https://github.com/topics/" + skill.toLowerCase(Locale.ROOT).replaceAll("[^a-z0-9]+", "-"));
            roadmap.add(step);
        }
        return roadmap;
    }
}
