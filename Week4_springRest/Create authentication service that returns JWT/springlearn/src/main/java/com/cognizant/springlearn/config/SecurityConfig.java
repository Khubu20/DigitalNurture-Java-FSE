package com.cognizant.springlearn.config;

import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.security.config.Customizer;
import org.springframework.security.web.SecurityFilterChain;
import org.springframework.security.config.annotation.web.builders.HttpSecurity;

@Configuration
public class SecurityConfig {

    @Bean
    public SecurityFilterChain securityFilterChain(HttpSecurity http) throws Exception {
        http
                // Allow all requests without authentication
                .authorizeHttpRequests(auth -> auth.anyRequest().permitAll())

                // Enable basic authentication (so curl -u works)
                .httpBasic(Customizer.withDefaults())

                // Disable CSRF for testing purposes
                .csrf(csrf -> csrf.disable());

        return http.build();
    }
}
