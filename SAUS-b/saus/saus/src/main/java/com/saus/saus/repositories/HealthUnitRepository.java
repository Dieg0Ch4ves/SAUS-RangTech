package com.saus.saus.repositories;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.saus.saus.entity.HealthUnits;

//Repositorio da unidade de saude
@Repository
public interface HealthUnitRepository extends JpaRepository<HealthUnits, Long>{
}
