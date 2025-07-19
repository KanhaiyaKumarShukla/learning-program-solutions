package com.cognizant.account.model;

public class AccountDetails {
    private String number;
    private String type;
    private double balance;

    public AccountDetails(String number, String type, double balance) {
        this.number = number;
        this.type = type;
        this.balance = balance;
    }

    public String getNumber() { return number; }
    public String getType() { return type; }
    public double getBalance() { return balance; }
}
