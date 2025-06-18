package Code;

public class DocumentManagementTest {
    public static void main(String[] args) {

        DocumentFactory wordFactory = new WordDocumentFactory();
        DocumentFactory pdfFactory = new PdfDocumentFactory();
        DocumentFactory excelFactory = new ExcelDocumentFactory();

        
        Document wordDoc = wordFactory.createDocument();
        Document pdfDoc = pdfFactory.createDocument();
        Document excelDoc = excelFactory.createDocument();

        
        System.out.println("Testing Word Document:");
        wordDoc.open();
        wordDoc.save();
        wordDoc.close();

        System.out.println("\nTesting PDF Document:");
        pdfDoc.open();
        pdfDoc.save();
        pdfDoc.close();

        System.out.println("\nTesting Excel Document:");
        excelDoc.open();
        excelDoc.save();
        excelDoc.close();
    }
}
