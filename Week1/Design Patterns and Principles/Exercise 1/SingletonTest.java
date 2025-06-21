public class SingletonTest {
    public static void main(String[] args) {
        Logger logger1 = Logger.getInstance();
        logger1.log("Test message 1");
        
        Logger logger2 = Logger.getInstance();
        logger2.log("Test message 2");
        
        System.out.println("Same instance? " + (logger1 == logger2));
    }
}