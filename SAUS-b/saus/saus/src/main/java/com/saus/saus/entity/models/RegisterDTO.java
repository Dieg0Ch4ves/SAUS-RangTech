package com.saus.saus.entity.models;

import com.saus.saus.entity.UserRole;

//DTO para request do usuario no register
public record RegisterDTO(String name, String login, String password, UserRole role) {
}
