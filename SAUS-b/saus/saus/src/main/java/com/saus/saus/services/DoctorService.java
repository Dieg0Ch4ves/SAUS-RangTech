package com.saus.saus.services;

import com.saus.saus.entity.Doctor;
import com.saus.saus.entity.HealthUnits;
import com.saus.saus.entity.models.DoctorRequestDTO;
import com.saus.saus.entity.models.DoctorResponseDTO;
import com.saus.saus.repositories.DoctorRepository;
import com.saus.saus.repositories.HealthUnitRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List;


//Service de docter
@Service
public class DoctorService {


    //Instancias do repositories de doctor e unidade de saude
    @Autowired
    DoctorRepository repository;

    @Autowired
    HealthUnitRepository healthUnitRepository;

    //metodo de criação do doctor
    public DoctorResponseDTO create(Long idHu, DoctorRequestDTO data) {
        HealthUnits healthUnit = healthUnitRepository.findById(idHu).get();
        Doctor newDoctor = new Doctor(data.name(), data.specialty(), healthUnit, new ArrayList<>());
        Doctor savedDoctor = repository.save(newDoctor);
        return new DoctorResponseDTO(savedDoctor.getId(), savedDoctor.getName(), savedDoctor.getSpecialty(),
                savedDoctor.getHealthUnits(), savedDoctor.getSchedulings());
    }

    //metodo de listagem de todos os doctor
    public List<Doctor> read() {
        return repository.findAll();
    }

    //metodo de listagem de doctor por unidade de saude
    public List<Doctor> readByHealthUnit(Long idHealthUnit) {
        return repository.findByHealthUnitsId(idHealthUnit);
    }

    //metodo de alteração do doctor
    public DoctorResponseDTO change(Long id, DoctorRequestDTO request) {
        Doctor doctor = repository.findById(id).get();
        doctor.setName(request.name());
        doctor.setSpecialty(request.specialty());
        Doctor response = repository.save(doctor);
        return new DoctorResponseDTO(response.getId(),response.getName(),response.getSpecialty()
                ,response.getHealthUnits(), response.getSchedulings());
    }

    //metodo de ler doctor por id
    public DoctorResponseDTO readById(Long id) {
        Doctor doctor =  repository.findById(id).get();
        return new DoctorResponseDTO(doctor.getId(), doctor.getName(), doctor.getSpecialty(), doctor.getHealthUnits(),
                doctor.getSchedulings());
    }


    //metodo de exclusão do doctor
    public void delete(Long id) {
        repository.deleteById(id);
    }

}
