public class DocumentManagementTest {
    public static void main(String[] args) {
        
        DocumentFactory wordFactory = new WordDocumentFactory();
        DocumentFactory pdfFactory = new PdfDocumentFactory();
        DocumentFactory excelFactory = new ExcelDocumentFactory();

       
        System.out.println("Processing Word Document:");
        wordFactory.processDocument();
        
        System.out.println("Processing PDF Document:");
        pdfFactory.processDocument();
        
        System.out.println("Processing Excel Document:");
        excelFactory.processDocument();
        
        
        System.out.println("Verifying document types:");
        verifyDocumentType(wordFactory.createDocument(), "Word Document");
        verifyDocumentType(pdfFactory.createDocument(), "PDF Document");
        verifyDocumentType(excelFactory.createDocument(), "Excel Document");
    }
    
    private static void verifyDocumentType(Object doc, String expectedType) {
        String actualType = doc.toString();
        System.out.println("Expected: " + expectedType + ", Actual: " + actualType);
        System.out.println("Match: " + expectedType.equals(actualType) + "\n");
    }
}