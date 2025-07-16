package com.workshop.workshop_server.controller;

import org.springframework.web.bind.annotation.RestController;

import com.workshop.workshop_server.entity.Workshop;
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
@RequestMapping("/api")
public class WorkshopController {

    private WorkshopService workshopService;

    public WorkshopController(WorkshopService workshopService) {
        this.workshopService = workshopService;
    }

    @GetMapping("/workshops")
    public List<Workshop> getWorkshops() {
        return workshopService.getWorkshops();
    }
    
    @PostMapping("/workshops")
    public Workshop addWorkshop(@RequestBody Workshop workshop) {
        return workshopService.addWorkshop(workshop);
    }

    @PutMapping("/workshops/{id}")
    public Workshop updateWorkshop(@PathVariable Long id, @RequestBody Workshop workshop) {
        return workshopService.updateWorkshop(id, workshop);
    }
    
    @DeleteMapping("/workshops/{id}")
    public void deleteWorkshop(@PathVariable Long id) {
        workshopService.deleteWorkshop(id);
    }

    @GetMapping("/workshops/{id}")
    public Workshop getWorkshop(@PathVariable Long id) {
        return workshopService.getWorkshop(id);
    }
    
}
