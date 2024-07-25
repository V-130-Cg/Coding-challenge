package com.example.backendapplication.repository;

import com.example.backendapplication.model.SubTask;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface SubtaskRepository extends JpaRepository<SubTask, Long> {
}