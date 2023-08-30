package com.saus.saus.services;

import com.saus.saus.entity.Doctor;
import com.saus.saus.entity.HealthUnits;
import com.saus.saus.entity.Scheduling;
import com.saus.saus.entity.models.SchedulingRequestDTO;
import com.saus.saus.entity.models.SchedulingResponseDTO;
import com.saus.saus.repositories.DoctorRepository;
import com.saus.saus.repositories.SchedulingRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.time.LocalDate;
import java.time.LocalTime;
import java.time.format.DateTimeFormatter;
import java.util.ArrayList;
import java.util.Collections;
import java.util.List;

//Service do agendamento
@Service
public class SchedulingService {

    //instancias do service de formato de time, o repositorio do agendamento e de doctor
    @Autowired
    TimeFormatter timeFormatter;

    @Autowired
    SchedulingRepository repository;

    @Autowired
    DoctorRepository doctorRepository;

    //Metodo de Criação de agendamento
    public SchedulingResponseDTO create(Long doctorId, SchedulingRequestDTO data) {
        Doctor doctor = doctorRepository.findById(doctorId).get();
        LocalTime time = timeFormatter.parseTime(data.time());
        LocalDate day = timeFormatter.parseDate(data.day());
        HealthUnits healthUnit = doctor.getHealthUnits();
        List<Scheduling> doctorSchedulings = doctor.getSchedulings();

        if (time.isBefore(healthUnit.getOpeningTime()) || time.isAfter(healthUnit.getClosingTime())) {
            System.out.println("Horario Indisponivel");
            return null;
        }

        for (Scheduling existingSchedule : doctorSchedulings) {
            if (existingSchedule.getTime().equals(time) && existingSchedule.getDay().equals(day)) {
                System.out.println("Horario ja selecionado");
                return null;
            }
        }

        Scheduling newScheduling = new Scheduling(time, day, data.namePatient(), data.document(), data.status(), doctor);
        Scheduling savedScheduling = repository.save(newScheduling);
        return new SchedulingResponseDTO(savedScheduling.getId(),
                savedScheduling.getTime(),
                savedScheduling.getDay(),
                savedScheduling.getNamePatient(),
                savedScheduling.getDocument(),
                savedScheduling.getStatus(),
                savedScheduling.getDoctor());
    }

    //Metodo de ler agendamento por id
    public SchedulingResponseDTO readById(Long id) {
        Scheduling scheduling = repository.findById(id).get();
        return new SchedulingResponseDTO(scheduling.getId(),scheduling.getTime(),scheduling.getDay(),
                scheduling.getNamePatient(),
                scheduling.getDocument(),scheduling.getStatus(),scheduling.getDoctor());
    }

    //Metodo de alteração de agendamento
    public SchedulingResponseDTO change(Long id, SchedulingRequestDTO request) {
        Scheduling scheduling = repository.findById(id).get();
        scheduling.setNamePatient(request.namePatient());
        scheduling.setDocument(request.document());
        scheduling.setStatus(request.status());
        Scheduling response = repository.save(scheduling);
        return new SchedulingResponseDTO(response.getId(),response.getTime(),
                response.getDay(),response.getNamePatient(),response.getDocument(),response.getStatus(),response.getDoctor());
    }

    //Metodo de exclusão de agendamento
    public void delete (Long id) {
        repository.deleteById(id);
    }

    //Metodo de listagem de horarios disponiveis de agendamento
    public List<String> listAvailableTimes(Long doctorId, String day) {
        Doctor doctor = doctorRepository.findById(doctorId).orElse(null);
        LocalDate dayFormatted = timeFormatter.parseDate(day);
        DateTimeFormatter timeFormatter = DateTimeFormatter.ofPattern("HH:mm");
        if (doctor == null) {
            return Collections.emptyList();
        }

        HealthUnits healthUnit = doctor.getHealthUnits();
        LocalTime openingTime = healthUnit.getOpeningTime();
        LocalTime closingTime = healthUnit.getClosingTime();

        List<Scheduling> doctorSchedulings = doctor.getSchedulings();

        List<String> availableTimes = new ArrayList<>();

        LocalTime currentTime = openingTime;
        while (currentTime.isBefore(closingTime)) {
            boolean isAvailable = true;

            for (Scheduling existingSchedule : doctorSchedulings) {
                if (existingSchedule.getDay().equals(dayFormatted) && existingSchedule.getTime().equals(currentTime)) {
                    isAvailable = false;
                    break;
                }
            }

            if (isAvailable) {
                String timeFormatted = currentTime.format(timeFormatter);
                availableTimes.add(timeFormatted);
            }

            currentTime = currentTime.plusHours(1);
        }

        return availableTimes;
    }

}
