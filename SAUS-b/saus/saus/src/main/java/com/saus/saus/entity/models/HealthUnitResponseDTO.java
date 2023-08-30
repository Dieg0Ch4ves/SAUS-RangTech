package com.saus.saus.entity.models;

import com.saus.saus.entity.Doctor;

import java.time.LocalTime;
import java.util.List;

//DTO para response de unidade de saude
public record HealthUnitResponseDTO(Long id, String name, String local, LocalTime openingTime, LocalTime closingTime, List<Doctor> doctors) {

}
