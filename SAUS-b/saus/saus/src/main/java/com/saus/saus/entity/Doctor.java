package com.saus.saus.entity;

import com.fasterxml.jackson.annotation.JsonBackReference;
import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Getter;

import java.util.List;


//Entidade de doctor
@Entity
@Table(name = "doctor")
@Getter
@AllArgsConstructor
public class Doctor {


	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private Long id;
	private String name;
	private String specialty;
	
	@ManyToOne
	@JoinColumn(name = "health_unit_id")
	@JsonBackReference
	private HealthUnits healthUnits;

	@OneToMany(mappedBy = "doctor", cascade = CascadeType.ALL, orphanRemoval = true)
	private List<Scheduling> schedulings;
	
	public Doctor(String name, String specialty, HealthUnits healthUnits, List<Scheduling> schedulings) {
		this.name = name;
		this.specialty = specialty;
		this.healthUnits = healthUnits;
		this.schedulings = schedulings;
	}

	public Doctor() {
		super();
	}

	public Long getId() {
		return id;
	}

	public void setId(Long id) {
		this.id = id;
	}

	public String getName() {
		return name;
	}

	public void setName(String name) {
		this.name = name;
	}

	public String getSpecialty() {
		return specialty;
	}

	public void setSpecialty(String specialty) {
		this.specialty = specialty;
	}

	public HealthUnits getHealthUnits() {
		return healthUnits;
	}

	public void setHealthUnits(HealthUnits healthUnits) {
		this.healthUnits = healthUnits;
	}

	public List<Scheduling> getSchedulings() {
		return schedulings;
	}

	public void setSchedulings(List<Scheduling> schedulings) {
		this.schedulings = schedulings;
	}
}
