package com.saus.saus.entity.models;

import com.saus.saus.entity.Doctor;
import com.saus.saus.entity.Status;

import java.time.LocalDate;
import java.time.LocalTime;

//DTO para response do agendamento
public record SchedulingResponseDTO(Long id, LocalTime time, LocalDate day, String namePatient, String document, Status status, Doctor doctor) {
}
