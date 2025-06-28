package org.example;

import org.junit.jupiter.api.*;

import static org.junit.jupiter.api.Assertions.*;

public class CalculatorTest {

    private Calculator calculator;

    @BeforeEach
    void setUp() {

        calculator = new Calculator();
        System.out.println("Setup done");
    }

    @AfterEach
    void tearDown() {

        calculator.clear();
        System.out.println("Teardown done");
    }

    @Test
    void testAddition() {

        int a = 2;
        int b = 3;

        int result = calculator.add(a, b);


        assertEquals(5, result);
    }
}

