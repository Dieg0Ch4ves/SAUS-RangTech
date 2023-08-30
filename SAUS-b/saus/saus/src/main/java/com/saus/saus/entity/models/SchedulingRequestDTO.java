package com.saus.saus.entity.models;

import com.saus.saus.entity.Doctor;
import com.saus.saus.entity.Status;

//DTO para request do agendamento
public record SchedulingRequestDTO(String time, String day, String namePatient, String document, Status status, Doctor doctor) {
}

