package com.workshop.workshop_server.service.workshop;

import java.util.List;

import org.springframework.stereotype.Service;

import com.workshop.workshop_server.model.Workshop;
import com.workshop.workshop_server.repository.WorkshopRepository;

import jakarta.persistence.EntityNotFoundException;

@Service
public class WorkshopServiceImpl implements WorkshopService {
    
    private WorkshopRepository workshopRepository;

    public WorkshopServiceImpl(WorkshopRepository workshopRepository) {
        this.workshopRepository = workshopRepository;
    }

    public List<Workshop> getWorkshops() {
        return workshopRepository.findAll();
    }

    public Workshop addWorkshop(Workshop workshop) {
        return workshopRepository.save(workshop);
    }

    public Workshop updateWorkshop(Long id, Workshop newWorkshop) {
        return workshopRepository.findById(id)
            .map(workshop -> {
                workshop.setName(newWorkshop.getName());
                workshop.setSubject(newWorkshop.getSubject());
                workshop.setDesc(newWorkshop.getDescription());
                workshopRepository.save(workshop);
                return workshop;
            })
            .orElseGet(() -> this.workshopRepository.save(newWorkshop));
    }

    public void deleteWorkshop(Long id) {
        workshopRepository.deleteById(id);
    }

    public Workshop getWorkshop(Long id) {
        return workshopRepository.findById(id)
            .orElseThrow(() -> new EntityNotFoundException("Workshop not found with id " + id));
    }
    
}
