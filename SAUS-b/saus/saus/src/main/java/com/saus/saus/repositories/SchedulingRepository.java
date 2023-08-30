package com.saus.saus.repositories;

import java.time.LocalDateTime;
import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.saus.saus.entity.Doctor;
import com.saus.saus.entity.Scheduling;

//Repositorio do agendamento
@Repository
public interface SchedulingRepository extends JpaRepository<Scheduling, Long>{

}
