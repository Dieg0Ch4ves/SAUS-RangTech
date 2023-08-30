package com.saus.saus.controllers;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import com.saus.saus.entity.HealthUnits;
import com.saus.saus.entity.models.HealthUnitRequestDTO;
import com.saus.saus.entity.models.HealthUnitResponseDTO;
import com.saus.saus.services.HealthUnitService;

import jakarta.validation.Valid;

//Controller de unidade de saude
@RestController
@RequestMapping("/healthUnit")
public class HealthUnitsController {

	//Instancia do service da unidade de saude
	@Autowired
	HealthUnitService service;

	//endpoint de criação
	@PostMapping
	public ResponseEntity<HealthUnitResponseDTO> createHealthUnit(@Valid @RequestBody HealthUnitRequestDTO data) {
		HealthUnitResponseDTO newHealthUnit = service.create(data);
		return ResponseEntity.ok(newHealthUnit);
	}

	//endpoint para listar todas as unidades de saude
	@GetMapping
	public ResponseEntity<List<HealthUnits>> listHealthUnits() {
		List<HealthUnits> allHealthUnit = service.read();
		return ResponseEntity.ok(allHealthUnit);
	}

	//endpoint ler por id
	@GetMapping("/{id}")
	public ResponseEntity<HealthUnits> readById(@PathVariable Long id) {
		HealthUnits healthUnit = service.readById(id);
		return ResponseEntity.ok(healthUnit);
	}

	//endpoint de alteração
	@PutMapping("/{id}")
	public ResponseEntity<HealthUnitResponseDTO> changeHealthUnit(@PathVariable Long id,
																  @Valid @RequestBody HealthUnitRequestDTO request) {
		HealthUnitResponseDTO healthUnit = service.change(id, request);
		return ResponseEntity.ok(healthUnit);
	}

	//endpoint de delete
	@DeleteMapping("/{id}")
	public void deleteHealthUnit(@PathVariable Long id) {
		service.delete(id);
	}

}
