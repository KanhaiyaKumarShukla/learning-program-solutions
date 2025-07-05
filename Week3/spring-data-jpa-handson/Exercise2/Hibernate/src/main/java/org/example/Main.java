package org.example;
import org.example.model.Employee;
import org.example.util.HibernateUtil;
import org.hibernate.Session;
import org.hibernate.Transaction;

public class Main {
    public static void main(String[] args) {
        Employee emp = new Employee();
        emp.setName("Kanhaiya");
        emp.setSalary(60000);

        Session session = HibernateUtil.getSessionFactory().openSession();
        Transaction tx = null;

        try {
            tx = session.beginTransaction();
            session.save(emp);
            tx.commit();
            System.out.println("Saved: " + emp);
        } catch (Exception e) {
            if (tx != null) tx.rollback();
            e.printStackTrace();
        } finally {
            session.close();
        }
    }
}
