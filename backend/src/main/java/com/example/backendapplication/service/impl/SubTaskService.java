// package com.example.backendapplication.service.impl;

// import com.example.backendapplication.exceptions.TaskNotFoundException;
// import com.example.backendapplication.model.SubTask;
// import com.example.backendapplication.model.Task;
// import com.example.backendapplication.repository.SubtaskRepository;
// import com.example.backendapplication.repository.TaskRepository;
// import com.example.backendapplication.service.ISubTaskService;
// import lombok.RequiredArgsConstructor;
// import lombok.extern.slf4j.Slf4j;
// import org.springframework.data.domain.Page;
// import org.springframework.data.domain.Pageable;
// import org.springframework.stereotype.Service;

// import java.util.Date;
// import java.util.UUID;

// @Service
// @RequiredArgsConstructor
// @Slf4j


// public class SubTaskService implements ISubTaskService {

//     private final SubtaskRepository subtaskrepository;


//     @Override
//     // public SubTask createSubtask(UUID taskId, SubTask subTask) {
//     //     // SubTask subtask = subtask.builder()
//     //     // .subTaskName("Example SubTask")
//     //     // .subTaskDetails("Details of the example subtask")
//     //     // .subTaskCompleted(false)
//     //     // .subTaskCreatedDate(new Date())
//     //     // .subTaskUpdatedDate(new Date())
//     //     // .build();        
//     //     // throw new UnsupportedOperationException("Unimplemented method 'createSubtask'");
//     // }

//     @Override
//     public SubTask getSubtasksByTaskId(UUID subtaskId) throws TaskNotFoundException {
//         throw new UnsupportedOperationException("Unimplemented method 'getSubtasksByTaskId'");
//     }

//     @Override
//     public SubTask updateSubTask(UUID subtaskId, SubTask subTask) throws TaskNotFoundException {
//         throw new UnsupportedOperationException("Unimplemented method 'updateSubTask'");
//     }    
    
// }