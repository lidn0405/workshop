package com.workshop.workshop_server.controller;

import org.springframework.web.bind.annotation.RestController;

import com.workshop.workshop_server.dto.WorkshopDto;
import com.workshop.workshop_server.service.workshop.WorkshopService;

import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;

import java.util.List;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.PathVariable;


@RestController
@RequestMapping("/api/workshops")
public class WorkshopController {

    private WorkshopService workshopService;

    public WorkshopController(WorkshopService workshopService) {
        this.workshopService = workshopService;
    }

    @GetMapping
    public List<WorkshopDto> getWorkshops() {
        return workshopService.getWorkshops();
    }

    @GetMapping("/{id}")
    public WorkshopDto getWorkshop(@PathVariable Long id) {
        return workshopService.getWorkshop(id);
    }
    
    @PostMapping
    public WorkshopDto addWorkshop(@RequestBody WorkshopDto workshopDto) {
        return workshopService.addWorkshop(workshopDto);
    }

    @PutMapping("/{id}")
    public WorkshopDto updateWorkshop(@PathVariable Long id, @RequestBody WorkshopDto workshopDto) {
        return workshopService.updateWorkshop(id, workshopDto);
    }
    
    @DeleteMapping("/{id}")
    public void deleteWorkshop(@PathVariable Long id) {
        workshopService.deleteWorkshop(id);
    }
    
}
