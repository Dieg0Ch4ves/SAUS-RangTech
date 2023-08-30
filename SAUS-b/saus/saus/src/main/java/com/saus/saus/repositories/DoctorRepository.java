package com.saus.saus.repositories;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.saus.saus.entity.Doctor;

//Repositorio do doctor
@Repository
public interface DoctorRepository extends JpaRepository<Doctor, Long>{

	List<Doctor> findByHealthUnitsId(Long healthUnitsId);
}
