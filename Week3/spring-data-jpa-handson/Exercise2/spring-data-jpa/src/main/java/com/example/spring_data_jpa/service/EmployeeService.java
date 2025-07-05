package com.example.spring_data_jpa.service;


import com.example.spring_data_jpa.model.Employee;
import com.example.spring_data_jpa.repository.EmployeeRepository;
import jakarta.transaction.Transactional;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class EmployeeService {

    @Autowired
    private EmployeeRepository employeeRepository;

    @Transactional
    public void addEmployee(Employee employee) {
        employeeRepository.save(employee);
        System.out.println("Saved: " + employee);
    }
}


