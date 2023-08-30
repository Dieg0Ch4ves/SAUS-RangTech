package com.saus.saus.entity;

import java.time.LocalTime;
import java.util.List;

import com.fasterxml.jackson.annotation.JsonManagedReference;
import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;


//Entidade de unidade de saude
@Entity
@Table(name = "health_units")
@Getter
@AllArgsConstructor
public class HealthUnits {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    private String name;
    private String local;
    private LocalTime openingTime;
    private LocalTime closingTime;

    @OneToMany(mappedBy = "healthUnits", cascade = CascadeType.ALL, orphanRemoval = true)
    @JsonManagedReference
    private List<Doctor> doctors;


    public HealthUnits(String name, String local, LocalTime openingTime, LocalTime closingTime, List<Doctor> doctors) {
        this.name = name;
        this.local = local;
        this.openingTime = openingTime;
        this.closingTime = closingTime;
        this.doctors = doctors;
    }

    public HealthUnits(Long id, String local, String name, LocalTime openingTime) {
        super();
        this.id = id;
        this.name = name;
        this.local = local;
        this.openingTime = openingTime;
    }

    public HealthUnits() {
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

    public String getLocal() {
        return local;
    }

    public void setLocal(String local) {
        this.local = local;
    }

    public LocalTime getOpeningTime() {
        return openingTime;
    }

    public void setOpeningTime(LocalTime openingTime) {
        this.openingTime = openingTime;
    }

    public LocalTime getClosingTime() {
        return closingTime;
    }

    public void setClosingTime(LocalTime closingTime) {
        this.closingTime = closingTime;
    }

    public List<Doctor> getDoctors() {
        return doctors;
    }

    public void setDoctors(List<Doctor> doctors) {
        this.doctors = doctors;
    }
}
