package com.cognizant.spring_learn.util;
import io.jsonwebtoken.Jwts;
import io.jsonwebtoken.security.Keys;
import org.springframework.stereotype.Component;

import java.security.Key;
import java.util.Date;

@Component
public class JwtUtil {

    // Ideally read from env ⬇
    private final Key key = Keys.hmacShaKeyFor("very‑secret‑key‑minimum‑256‑bits!".getBytes());

    public String generateToken(String subject, long ttlMillis) {
        long now = System.currentTimeMillis();
        return Jwts.builder()
                .setSubject(subject)
                .setIssuedAt(new Date(now))
                .setExpiration(new Date(now + ttlMillis))
                .signWith(key)
                .compact();
    }
}
