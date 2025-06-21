public class SearchTest {
    public static void main(String[] args) {
 
        Product[] products = {
            new Product("P100", "Laptop", "Electronics", 999.99),
            new Product("P203", "Desk Chair", "Furniture", 149.99),
            new Product("P305", "Coffee Maker", "Kitchen", 79.99),
            new Product("P402", "Bluetooth Headphones", "Electronics", 129.99),
            new Product("P507", "Running Shoes", "Sporting Goods", 89.99)
        };
        

        System.out.println("=== LINEAR SEARCH (UNSORTED) ===");
        Product found = SearchService.linearSearch(products, "P402");
        System.out.println("Found: " + (found != null ? found : "Not found"));
        

        SearchService.sortProducts(products);
        System.out.println("\nSorted Products:");
        for (Product p : products) System.out.println(p.getProductId() + ": " + p.getProductName());
  
        System.out.println("\n=== BINARY SEARCH (SORTED) ===");
        found = SearchService.binarySearch(products, "P203");
        System.out.println("Found: " + (found != null ? found : "Not found"));
    }
}