package com.workshop.workshop_server.service.workshop;

import java.util.List;

import com.workshop.workshop_server.dto.WorkshopDto;
import com.workshop.workshop_server.model.User;

public interface WorkshopService {
    public abstract List<WorkshopDto> getWorkshops();
    public abstract WorkshopDto addWorkshop(WorkshopDto workshopDto);
    public abstract WorkshopDto updateWorkshop(Long id, WorkshopDto newWorkshopDto, User leadUser);
    public abstract void deleteWorkshop(Long id);
    public abstract WorkshopDto getWorkshop(Long id);
}
