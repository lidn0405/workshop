package com.workshop.workshop_server.reading;

import java.util.List;

import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.PathVariable;



@RestController
public class ReadingController {
    ReadingService readingService;

    public ReadingController(ReadingService readingService) {
        this.readingService = readingService;
    }

    @GetMapping("/reading")
    public List<Reading> getReadings() {
        return readingService.getReadings();
    }

    @PostMapping("/reading")
    public Reading addReading(@RequestBody Reading reading) {
        return readingService.addReading(reading);
    }

    @PutMapping("/reading/{id}")
    public Reading updateReading(@PathVariable Long id, @RequestBody Reading reading) {
        return readingService.updateReading(id, reading);
    }

    @DeleteMapping
    public void deleteReading(@PathVariable Long id) {
        readingService.deleteReading(id);
    }
    
    @GetMapping("/reading/{id}")
    public Reading getReading(@PathVariable Long id) {
        return readingService.getReading(id);
    }
    
    
}
