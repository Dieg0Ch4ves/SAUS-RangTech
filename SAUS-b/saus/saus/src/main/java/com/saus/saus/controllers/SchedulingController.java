package com.saus.saus.controllers;

import java.time.LocalDate;
import java.time.LocalDateTime;
import java.time.LocalTime;
import java.util.List;

import com.saus.saus.entity.models.SchedulingResponseDTO;
import com.saus.saus.services.SchedulingService;
import jakarta.validation.Valid;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.format.annotation.DateTimeFormat;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import com.saus.saus.entity.Doctor;
import com.saus.saus.entity.Scheduling;
import com.saus.saus.entity.models.SchedulingRequestDTO;
import com.saus.saus.repositories.DoctorRepository;
import com.saus.saus.repositories.SchedulingRepository;

import javax.print.Doc;


//Controller do agendamento
@RestController
@RequestMapping("/scheduling")
@CrossOrigin(origins = "*")
public class SchedulingController {

	//instancia do service
	@Autowired
	SchedulingService service;


	//endpoint de criação
	@PostMapping("/{idDoctor}")
	public ResponseEntity<SchedulingResponseDTO> create(@PathVariable Long idDoctor, @Valid @RequestBody SchedulingRequestDTO data) {
		SchedulingResponseDTO scheduling = service.create(idDoctor, data);
		return ResponseEntity.ok(scheduling);
	}

	//endpoint de ler por id
	@GetMapping("/{id}")
	public  ResponseEntity<SchedulingResponseDTO> readById(@PathVariable Long id) {
		SchedulingResponseDTO response = service.readById(id);
		return ResponseEntity.ok(response);
	}

	//endpoint de alteração
	@PutMapping("/{id}")
	public ResponseEntity<SchedulingResponseDTO> change(@PathVariable Long id, @Valid @RequestBody SchedulingRequestDTO request) {
		SchedulingResponseDTO changedScheduling = service.change(id,request);
		return ResponseEntity.ok(changedScheduling);
	}

	//endpoint de delete
	@DeleteMapping("/{id}")
	public void delete(@PathVariable Long id) {
		service.delete(id);
	}


	//endpoint para listar os horarios disponiveis
	@GetMapping("/available-times/{doctorId}")
	public ResponseEntity<List<String>> getAvailableTimes(
			@PathVariable Long doctorId,
			@RequestParam String day) {
		List<String> availableTimes = service.listAvailableTimes(doctorId, day);
		return ResponseEntity.ok(availableTimes);
	}

}
