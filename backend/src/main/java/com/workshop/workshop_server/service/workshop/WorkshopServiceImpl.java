package com.workshop.workshop_server.service.workshop;

import java.util.List;
import java.util.stream.Collectors;

import org.springframework.stereotype.Service;

import com.workshop.workshop_server.dto.WorkshopDto;
import com.workshop.workshop_server.model.Workshop;
import com.workshop.workshop_server.repository.WorkshopRepository;

import jakarta.persistence.EntityNotFoundException;
import jakarta.transaction.Transactional;

@Service
public class WorkshopServiceImpl implements WorkshopService {
    
    private WorkshopRepository workshopRepository;

    public WorkshopServiceImpl(WorkshopRepository workshopRepository) {
        this.workshopRepository = workshopRepository;
    }

    @Transactional
    public List<WorkshopDto> getWorkshops() {
        List<Workshop> workshops = workshopRepository.findAll();

        return workshops.stream()
                .map(WorkshopDto::new)
                .collect(Collectors.toList());
    }

    @Transactional
    public WorkshopDto addWorkshop(WorkshopDto workshopDto) {
        Workshop workshop = new Workshop();
        workshop.setName(workshopDto.getName());
        workshop.setSubject(workshopDto.getSubject());
        workshop.setDesc(workshopDto.getDescription());

        Workshop saved = workshopRepository.save(workshop);
        return new WorkshopDto(saved);
    }

    @Transactional
    public WorkshopDto updateWorkshop(Long id, WorkshopDto newWorkshopDto) {
        return workshopRepository.findById(id)
            .map(workshop -> {
                workshop.setName(newWorkshopDto.getName());
                workshop.setSubject(newWorkshopDto.getSubject());
                workshop.setDesc(newWorkshopDto.getDescription());
                Workshop saved = workshopRepository.save(workshop);
                return new WorkshopDto(saved);
            })
            .orElseGet(() -> {
                    Workshop workshop = new Workshop(newWorkshopDto.getName(), newWorkshopDto.getSubject(), newWorkshopDto.getDescription());
                    Workshop saved = workshopRepository.save(workshop);
                    return new WorkshopDto(saved);
                }
            );
    }

    @Transactional
    public void deleteWorkshop(Long id) {
        workshopRepository.deleteById(id);
    }

    @Transactional
    public WorkshopDto getWorkshop(Long id) {
        Workshop workshop = workshopRepository.findById(id)
            .orElseThrow(() -> new EntityNotFoundException("Workshop not found with id " + id));
        
        return new WorkshopDto(workshop);
    }
    
}
