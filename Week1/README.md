# Exercise 1: Implementing the Singleton Pattern

## 📌 Objective
Ensure that the `Logger` utility class has only **one instance** throughout the application lifecycle using the **Singleton Design Pattern**.

---

## 🧩 Key Concepts Used
- Private constructor to restrict object creation.
- Static instance to hold the single object.
- Public static method `getInstance()` for controlled access.

---

## 📁 Files Included
- `Logger.java` – Singleton implementation of a logger utility.
- `Main.java` – Test class to demonstrate singleton behavior.
- `output.txt` – Output log verifying that only one instance of `Logger` is used.

---

## ⚙️ Sample Output
Logger instance created
LOG: Test message 1
LOG: Test message 2
Same instance? true


---

## ✅ Conclusion
This demonstrates a **lazy-loaded** Singleton Pattern where only one instance of the `Logger` class is created and reused across the application.

