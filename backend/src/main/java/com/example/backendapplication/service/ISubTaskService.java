package com.example.backendapplication.service;

import com.example.backendapplication.exceptions.TaskNotFoundException;
import com.example.backendapplication.model.SubTask;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;

import java.util.UUID;

public interface ISubTaskService {
    // Page<SubTask> getAllSubTasks(Pageable page);
    SubTask createSubtask(UUID taskId, SubTask subTask);
    // SubTask toggleSubTaskCompletion(UUID subtaskId) throws TaskNotFoundException;
    SubTask getSubtasksByTaskId(UUID subtaskId) throws TaskNotFoundException;
    // SubTask deleteSubTask(UUID subtaskId) throws TaskNotFoundException;
    SubTask updateSubTask(UUID subtaskId, SubTask subTask) throws TaskNotFoundException;
}
