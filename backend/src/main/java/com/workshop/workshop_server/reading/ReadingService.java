package com.workshop.workshop_server.reading;

import java.util.List;

public abstract class ReadingService {
    public abstract List<Reading> getReadings();
    public abstract Reading addReading(Reading reading);
    public abstract Reading updateReading(Long id, Reading newReading);
    public abstract void deleteReading(Long id);

    public abstract Reading getReading(Long id);
}
