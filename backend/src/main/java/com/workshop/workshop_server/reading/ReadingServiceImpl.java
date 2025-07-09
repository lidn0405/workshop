package com.workshop.workshop_server.reading;

import java.util.List;

import org.springframework.stereotype.Service;

import jakarta.persistence.EntityNotFoundException;

@Service
public class ReadingServiceImpl extends ReadingService{
    
    ReadingRepository readingRepository;

    public ReadingServiceImpl(ReadingRepository readingRepository) {
        this.readingRepository = readingRepository;
    }

    public List<Reading> getReadings() {
        return readingRepository.findAll();
    }

    public Reading addReading(Reading reading) {
        return readingRepository.save(reading);
    }

    public Reading updateReading(Long id, Reading newReading) {
        return readingRepository.findById(id)
            .map(reading -> {
                reading.setTitle(newReading.getTitle());
                reading.setContent(newReading.getContent());
                return readingRepository.save(reading);
            })
            .orElseGet(() -> readingRepository.save(newReading));
    }

    public void deleteReading(Long id) {
        readingRepository.deleteById(id);
    }

    public Reading getReading(Long id) {
        return readingRepository.findById(id).orElseThrow(() -> new EntityNotFoundException("No reading found with id " + id));
    }
}
