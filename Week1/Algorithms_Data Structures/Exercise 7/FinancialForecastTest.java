public class FinancialForecastTest {
    public static void main(String[] args) {
        double initialInvestment = 10000.0;
        double[] growthRates = {0.05, 0.07, 0.03, 0.08, 0.06}; // 5 years of growth rates
        
        double futureValue = FinancialForecaster.calculateFutureValue(initialInvestment, growthRates, 5);
        System.out.printf("Memoized Recursive Forecast: $%.2f\n", futureValue);
        
        double iterativeValue = FinancialForecaster.calculateFutureValueIterative(initialInvestment, growthRates, 5);
        System.out.printf("Iterative Forecast: $%.2f\n", iterativeValue);
        
        System.out.println("Results Match: " + (futureValue == iterativeValue));
    }
}