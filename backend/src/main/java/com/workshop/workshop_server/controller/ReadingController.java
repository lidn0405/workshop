package com.workshop.workshop_server.controller;

import java.util.List;

import org.springframework.web.bind.annotation.RestController;

import com.workshop.workshop_server.entity.Reading;
import com.workshop.workshop_server.service.reading.ReadingService;

import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.PathVariable;



@RestController
@RequestMapping("/api")
public class ReadingController {
    ReadingService readingService;

    public ReadingController(ReadingService readingService) {
        this.readingService = readingService;
    }

    @GetMapping("/readings")
    public List<Reading> getReadings() {
        return readingService.getReadings();
    }

    @PostMapping("/readings")
    public Reading addReading(@RequestBody Reading reading) {
        return readingService.addReading(reading);
    }

    @PutMapping("/readings/{id}")
    public Reading updateReading(@PathVariable Long id, @RequestBody Reading reading) {
        return readingService.updateReading(id, reading);
    }

    @DeleteMapping
    public void deleteReading(@PathVariable Long id) {
        readingService.deleteReading(id);
    }
    
    @GetMapping("/readings/{id}")
    public Reading getReading(@PathVariable Long id) {
        return readingService.getReading(id);
    }
    
    
}
