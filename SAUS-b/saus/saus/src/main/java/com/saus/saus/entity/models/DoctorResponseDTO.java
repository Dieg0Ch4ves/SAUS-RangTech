package com.saus.saus.entity.models;

import com.saus.saus.entity.HealthUnits;
import com.saus.saus.entity.Scheduling;

import java.util.List;

//DTO para response do doctor
public record DoctorResponseDTO(Long id, String name, String specialty, HealthUnits healthUnit, List<Scheduling> schedulings) {
}
