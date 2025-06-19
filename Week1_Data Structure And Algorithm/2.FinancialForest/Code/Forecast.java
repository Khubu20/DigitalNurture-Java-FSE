package Code;
import java.util.Scanner;

public class Forecast {

    // Recursive method to calculate future value
    public static double calculateFutureValue(double initialAmount, double rate, int years) {
        // Base case
        if (years == 0) {
            return initialAmount;
        }
        // Recursive case
        return calculateFutureValue(initialAmount, rate, years - 1) * (1 + rate);
    }

    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);

        // Take input from user
        System.out.print("Enter initial amount (₹): ");
        double initialAmount = sc.nextDouble();

        System.out.print("Enter annual growth rate (as %): ");
        double ratePercent = sc.nextDouble();
        double rate = ratePercent / 100.0;

        System.out.print("Enter number of years: ");
        int years = sc.nextInt();

        // Call the recursive method
        double futureValue = calculateFutureValue(initialAmount, rate, years);

        // Display result
        System.out.printf("Future value after %d years: ₹%.2f\n", years, futureValue);

        sc.close();
    }
}

