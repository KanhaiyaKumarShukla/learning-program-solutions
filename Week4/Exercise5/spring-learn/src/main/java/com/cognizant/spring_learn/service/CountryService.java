package com.cognizant.spring_learn.service;

import com.cognizant.spring_learn.model.Country;
import org.springframework.context.support.ClassPathXmlApplicationContext;
import org.springframework.stereotype.Service;
import java.util.List;
import java.util.stream.Collectors;

@Service
public class CountryService {

    private final List<Country> countries;

    public CountryService() {
        // Load all countries from XML configuration
        ClassPathXmlApplicationContext context =
                new ClassPathXmlApplicationContext("country.xml");

        // Get all country beans
        countries = context.getBeansOfType(Country.class)
                .values()
                .stream()
                .collect(Collectors.toList());

        context.close();
    }

    public Country getCountry(String code) {
        // Case-insensitive search
        return countries.stream()
                .filter(c -> c.getCode().equalsIgnoreCase(code))
                .findFirst()
                .orElseThrow(() -> new RuntimeException("Country not found"));
    }
}
