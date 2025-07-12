package com.cognizant.spring_learn;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.context.ApplicationContext;
import org.springframework.context.support.ClassPathXmlApplicationContext;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;

@SpringBootApplication
public class SpringLearnApplication {
	private static final Logger LOGGER = LoggerFactory.getLogger(SpringLearnApplication.class);

	public static void main(String[] args) {
		SpringApplication.run(SpringLearnApplication.class, args);
		displayCountry();
	}

	public static void displayCountry() {
		try {
			// 1. Create ApplicationContext from XML configuration
			ApplicationContext context = new ClassPathXmlApplicationContext("country.xml");

			// 2. Retrieve the country bean
			Country country = context.getBean("country", Country.class);

			// 3. Log the country details
			LOGGER.debug("Country : {}", country.toString());
		} catch (Exception e) {
			LOGGER.error("Error occurred: {}", e.getMessage());
		}
	}
}
