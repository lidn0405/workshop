package com.workshop.workshop_server.workshops;

import org.springframework.web.bind.annotation.RestController;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;

import java.util.List;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.PathVariable;



@RestController
public class WorkshopController {

    @Autowired
    private WorkshopService workshopService;

    public WorkshopController(WorkshopService workshopService) {
        this.workshopService = workshopService;
    }

    @GetMapping("/workshop")
    public List<Workshop> getWorkshops() {
        return workshopService.getWorkshops();
    }
    
    @PostMapping("/workshop")
    public Workshop addWorkshop(@RequestBody Workshop workshop) {
        return workshopService.addWorkshop(workshop);
    }

    @PutMapping("/workshop/{id}")
    public Workshop updateWorkshop(@PathVariable Long id, @RequestBody Workshop workshop) {
        return workshopService.updateWorkshop(id, workshop);
    }
    
    @DeleteMapping("/workshop/{id}")
    public void deleteWorkshop(@PathVariable Long id) {
        workshopService.deleteWorkshop(id);
    }
}
