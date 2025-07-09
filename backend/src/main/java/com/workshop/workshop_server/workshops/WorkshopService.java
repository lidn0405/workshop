package com.workshop.workshop_server.workshops;

import java.util.List;

public interface WorkshopService {
    public abstract List<Workshop> getWorkshops();
    public abstract Workshop addWorkshop(Workshop workshop);
    public abstract Workshop updateWorkshop(Long id, Workshop newWorkshop);
    public abstract void deleteWorkshop(Long id);
    public abstract Workshop getWorkshop(Long id);
}
