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
- `SingletonTest.java` – Test class to demonstrate singleton behavior.
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


# 🧪 Exercise 2: Implementing the Factory Method Pattern

## 📌 Objective
Create a document management system that can generate different types of documents (Word, PDF, Excel) using the **Factory Method Design Pattern**.

---

## 🧩 Key Concepts Used
- Interface `Document` as a common contract.
- Concrete document types: `WordDocument`, `PdfDocument`, `ExcelDocument`.
- Abstract factory `DocumentFactory` with a `createDocument()` method.
- Concrete factory classes for each document type.

---

## 📁 Files Included
- `Document.java` – Interface for document types.
- `WordDocument.java`, `PdfDocument.java`, `ExcelDocument.java` – Document implementations.
- `DocumentFactory.java` – Abstract factory.
- `WordDocumentFactory.java`, `PdfDocumentFactory.java`, `ExcelDocumentFactory.java` – Factory implementations.
- `DocumentManagementTest.java` – Test class demonstrating factory use.
- `output.txt` – Sample output from factory-based document creation.

---

## ⚙️ Sample Output
Processing Word Document:
Opening Word document...
Saving Word document...
Closing Word document...
Processed: Word Document

Processing PDF Document:
Opening PDF document...
Saving PDF document...
Closing PDF document...
Processed: PDF Document

Processing Excel Document:
Opening Excel document...
Saving Excel document...
Closing Excel document...
Processed: Excel Document

Verifying document types:
Expected: Word Document, Actual: Word Document
Match: true

Expected: PDF Document, Actual: PDF Document
Match: true

Expected: Excel Document, Actual: Excel Document
Match: true


---

## ✅ Conclusion
This demonstrates how the **Factory Method Pattern** decouples object creation from usage, allowing for easy extension of new document types without modifying existing code.
