package com.saus.saus.services;

import java.time.LocalTime;
import java.util.ArrayList;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.saus.saus.entity.HealthUnits;
import com.saus.saus.entity.models.HealthUnitRequestDTO;
import com.saus.saus.entity.models.HealthUnitResponseDTO;
import com.saus.saus.repositories.HealthUnitRepository;

//Service de unidade de saude
@Service
public class HealthUnitService {

	//Instancia do repositorio e o service de formatar o time e day
	@Autowired
	HealthUnitRepository repository;

	@Autowired
	private TimeFormatter timeService;

	//metodo de criação da unidade de saude
	public HealthUnitResponseDTO create(HealthUnitRequestDTO data) {
		LocalTime openingTime = timeService.parseTime(data.openingTime());
		LocalTime closingTime = timeService.parseTime(data.closingTime());
		HealthUnits healthUnit = new HealthUnits(data.name(), data.local(), openingTime, closingTime, new ArrayList<>());
		HealthUnits savedHealthUnit = repository.save(healthUnit);
		return new HealthUnitResponseDTO(savedHealthUnit.getId(), savedHealthUnit.getName(), savedHealthUnit.getLocal(),
				savedHealthUnit.getOpeningTime(), savedHealthUnit.getClosingTime(), savedHealthUnit.getDoctors());
	}

	//metodo de listagem de todas as unidades de saude
	public List<HealthUnits> read() {
		return repository.findAll();
	}

	//metodo de ler unidades de saude por id
	public HealthUnits readById(Long id) {
		return repository.findById(id).get();
	}

	//metodo de alteração das unidades de saude
	public HealthUnitResponseDTO change(Long id, HealthUnitRequestDTO data) {
		HealthUnits healthUnit = repository.findById(id).get();
		LocalTime openingTime = timeService.parseTime(data.openingTime());
		LocalTime closingTime = timeService.parseTime(data.closingTime());
		healthUnit.setName(data.name());
		healthUnit.setLocal(data.local());
		healthUnit.setOpeningTime(openingTime);
		healthUnit.setClosingTime(closingTime);
		HealthUnits response = repository.save(healthUnit);
		return new HealthUnitResponseDTO(response.getId(), response.getName(), response.getLocal(),
				response.getOpeningTime(), response.getClosingTime(),response.getDoctors());
	}

	//metodo de exclusão das unidades de saude
	public void delete(Long id) {
		HealthUnits healthUnit = repository.findById(id).get();
		repository.delete(healthUnit);
	}
}
