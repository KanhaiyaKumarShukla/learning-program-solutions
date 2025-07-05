package com.example.spring_data_jpa.repository;


import com.example.spring_data_jpa.model.Employee;
import org.springframework.data.jpa.repository.JpaRepository;

public interface EmployeeRepository extends JpaRepository<Employee, Integer> {
}

