
package com.skillbridge.backend.service;

import io.jsonwebtoken.Jwts;
import io.jsonwebtoken.security.Keys;

import javax.crypto.SecretKey;

import org.springframework.stereotype.Service;

import java.nio.charset.StandardCharsets;
import java.util.Date;

@Service
public class JwtService {

    // Development secret key.
    // We will move this into environment variables later.
    private static final String SECRET_KEY =
        "SkillBridgeDevelopmentSecretKey2026SecureJWTToken";

    private final SecretKey key = Keys.hmacShaKeyFor(
        SECRET_KEY.getBytes(StandardCharsets.UTF_8)
    );

    // Token validity: 24 hours
    private static final long EXPIRATION_TIME =
        1000 * 60 * 60 * 24;

    public String generateToken(String email) {

        return Jwts.builder()
            .subject(email)
            .issuedAt(new Date())
            .expiration(
                new Date(System.currentTimeMillis() + EXPIRATION_TIME)
            )
            .signWith(key)
            .compact();
    }

    public String extractEmail(String token) {

        return Jwts.parser()
            .verifyWith(key)
            .build()
            .parseSignedClaims(token)
            .getPayload()
            .getSubject();
    }

    public boolean isTokenValid(String token, String email) {

        try {
            String tokenEmail = extractEmail(token);
            return tokenEmail.equals(email);
        } catch (Exception exception) {
            return false;
        }
    }
}
