package com.workshop.workshop_server.service.workshop;

import java.util.List;

import com.workshop.workshop_server.entity.Workshop;
import com.workshop.workshop_server.entity.User;

public interface WorkshopService {
    public abstract List<Workshop> getWorkshops();
    public abstract Workshop addWorkshop(Workshop workshop);
    public abstract Workshop updateWorkshop(Long id, Workshop newWorkshop);
    public abstract void deleteWorkshop(Long id);
    public abstract Workshop getWorkshop(Long id);
    public abstract User getLead(Long id);
}
