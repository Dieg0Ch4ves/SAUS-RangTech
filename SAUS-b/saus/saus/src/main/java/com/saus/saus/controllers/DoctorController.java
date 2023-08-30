package com.saus.saus.controllers;

import java.util.List;

import com.saus.saus.entity.models.DoctorRequestDTO;
import com.saus.saus.entity.models.DoctorResponseDTO;
import com.saus.saus.services.DoctorService;
import jakarta.transaction.UserTransaction;
import jakarta.validation.Valid;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import com.saus.saus.entity.Doctor;

//Controller de doctor
@RestController
@RequestMapping("/doctor")
public class DoctorController {

	//Instancia do service de doctor
	@Autowired
	DoctorService service;

	//endpoint de criação
	@PostMapping("/{idHu}")
	public ResponseEntity<DoctorResponseDTO> createDoctor(@PathVariable Long idHu, @Valid @RequestBody DoctorRequestDTO data) {
		DoctorResponseDTO newDoctor = service.create(idHu, data);
		return ResponseEntity.ok(newDoctor);
	}

	//endpoint para ler todos os doctors
	@GetMapping
	public ResponseEntity<List<Doctor>> getAllDoctors() {
		List<Doctor> allDoctors = service.read();
		return ResponseEntity.ok(allDoctors);
	}

	//endpoint para ler por id
	@GetMapping("/get/{doctorId}")
	public ResponseEntity<DoctorResponseDTO> getDoctorById(@PathVariable Long doctorId) {
		DoctorResponseDTO response = service.readById(doctorId);
		return ResponseEntity.ok(response);
	}

	//endpoint para ler os doctor por unidade de saude
	@GetMapping("/{idHu}")
	public ResponseEntity<List<Doctor>> listDoctorsForHealthUnits(@PathVariable Long idHu) {
		List<Doctor> listDoctor = service.readByHealthUnit(idHu);
		return ResponseEntity.ok(listDoctor);
	}

	//endpoint de alteração
	@PutMapping("/{id}")
	public ResponseEntity<DoctorResponseDTO> change(@PathVariable Long id, @Valid @RequestBody DoctorRequestDTO request) {
		DoctorResponseDTO changedDoctor = service.change(id, request);
		return ResponseEntity.ok(changedDoctor);
	}

	//endpoint de delete
	@DeleteMapping("/{id}")
	public void delete(@PathVariable Long id) {
		service.delete(id);
	}
}
