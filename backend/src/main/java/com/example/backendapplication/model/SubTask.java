package com.example.backendapplication.model;

import jakarta.persistence.*;
import lombok.*;

import java.util.Date;
import java.util.UUID;

@Getter
@Setter
@Entity
@Builder
@NoArgsConstructor
@AllArgsConstructor
@Table(name = "subtasks")
public class SubTask {

    @Id
    @GeneratedValue(strategy = GenerationType.UUID)
    private UUID id;

    private String subTaskName;
    private String subTaskDetails;
    private boolean subTaskCompleted;
    private Date subTaskCreatedDate;
    private Date subTaskUpdatedDate;

    @ManyToOne
    @JoinColumn(name = "task_id")
    private Task task;
}
