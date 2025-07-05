package com.example.spring_data_jpa;

import com.example.spring_data_jpa.model.Employee;
import com.example.spring_data_jpa.service.EmployeeService;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.context.ApplicationContext;

@SpringBootApplication
public class SpringDataJpaApplication {

	private static EmployeeService employeeService;

	public static void main(String[] args) {
		ApplicationContext context = SpringApplication.run(SpringDataJpaApplication.class, args);
		employeeService = context.getBean(EmployeeService.class);
		testAddEmployee();
	}

	private static void testAddEmployee() {
		Employee emp = new Employee();
		emp.setName("Kanhaiya");
		emp.setSalary(50000);
		employeeService.addEmployee(emp);
	}

}

