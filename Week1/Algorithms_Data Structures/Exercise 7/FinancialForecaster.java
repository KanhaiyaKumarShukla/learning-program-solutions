import java.util.HashMap;
import java.util.Map;

public class FinancialForecaster {
    private static Map<String, Double> memo = new HashMap<>();
    
    public static double calculateFutureValue(double currentValue, double[] growthRates, int years) {
        if (years == 0) return currentValue;
        
        String key = currentValue + "-" + years;
        
        if (memo.containsKey(key)) {
            return memo.get(key);
        }
        
        double growthRate = growthRates[growthRates.length - years];
        double nextValue = currentValue * (1 + growthRate);
        
        double result = calculateFutureValue(nextValue, growthRates, years - 1);
        
        memo.put(key, result);
        return result;
    }

    public static double calculateFutureValueIterative(double currentValue, double[] growthRates, int years) {
        double result = currentValue;
        for (int i = 0; i < years; i++) {
            result *= (1 + growthRates[i]);
        }
        return result;
    }
}