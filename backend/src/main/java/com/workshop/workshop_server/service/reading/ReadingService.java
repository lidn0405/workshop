package com.workshop.workshop_server.service.reading;

import java.util.List;

import com.workshop.workshop_server.entity.Reading;

public abstract class ReadingService {
    public abstract List<Reading> getReadings();
    public abstract Reading addReading(Reading reading);
    public abstract Reading updateReading(Long id, Reading newReading);
    public abstract void deleteReading(Long id);

    public abstract Reading getReading(Long id);
}
