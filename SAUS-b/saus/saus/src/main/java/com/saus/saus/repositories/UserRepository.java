package com.saus.saus.repositories;

import org.springframework.data.jpa.repository.JpaRepository;

import com.saus.saus.entity.User;
import org.springframework.security.core.userdetails.UserDetails;

//Repositorio do usuario
public interface UserRepository extends JpaRepository<User, String>{
	UserDetails findByLogin(String login);
}
