package Code;
import java.util.*;

class Product {
    int productId;
    String productName;
    String category;

    public Product(int productId, String productName, String category) {
        this.productId = productId;
        this.productName = productName;
        this.category = category;
    }

    public void display() {
        System.out.println("ID: " + productId + ", Name: " + productName + ", Category: " + category);
    }
}

public class SearchExample {

    public static int searchById(Product[] products, int id) {
        for (int i = 0; i < products.length; i++) {
            if (products[i].productId == id) return i;
        }
        return -1;
    }

    public static void searchByCategory(Product[] products, String category) {
        boolean found = false;
        for (Product product : products) {
            if (product.category.equalsIgnoreCase(category)) {
                product.display();
                found = true;
            }
        }
        if (!found) {
            System.out.println("No products found in category: " + category);
        }
    }

    public static int linearSearch(Product[] products, String name) {
        for (int i = 0; i < products.length; i++) {
            if (products[i].productName.equalsIgnoreCase(name)) return i;
        }
        return -1;
    }

    public static int binarySearch(Product[] products, String name) {
        int left = 0, right = products.length - 1;
        while (left <= right) {
            int mid = left + (right - left) / 2;
            int cmp = products[mid].productName.compareToIgnoreCase(name);
            if (cmp == 0) return mid;
            if (cmp < 0) left = mid + 1;
            else right = mid - 1;
        }
        return -1;
    }

    public static void main(String[] args) {
        Product[] products = {
            new Product(1, "Laptop", "Electronics"),
            new Product(2, "Shirt", "Clothing"),
            new Product(3, "Book", "Stationery"),
            new Product(4, "Phone", "Electronics"),
            new Product(5, "Pen", "Stationery")
        };

        Scanner sc = new Scanner(System.in);

        // Menu
        System.out.println("1. Search by Product Name");
        System.out.println("2. Search by Product ID");
        System.out.println("3. Search by Category");
        System.out.print("Enter your choice: ");
        int choice = sc.nextInt();
        sc.nextLine();  // clear buffer

        switch (choice) {
            case 1:
                // Binary search - needs sorted array
                Arrays.sort(products, Comparator.comparing(p -> p.productName.toLowerCase()));
                System.out.print("Enter product name: ");
                String name = sc.nextLine();
                int idx = binarySearch(products, name);
                if (idx != -1) products[idx].display();
                else System.out.println("Product not found.");
                break;

            case 2:
                System.out.print("Enter product ID: ");
                int id = sc.nextInt();
                int index = searchById(products, id);
                if (index != -1) products[index].display();
                else System.out.println("Product ID not found.");
                break;

            case 3:
                System.out.print("Enter category name: ");
                String category = sc.nextLine();
                searchByCategory(products, category);
                break;

            default:
                System.out.println("Invalid choice.");
        }

        sc.close();
    }
}
