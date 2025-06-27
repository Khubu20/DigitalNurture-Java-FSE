package in.cog.bean.test;
import org.junit.Test;
import static org.junit.Assert.*;
import com.javaCode.Calculator;

public class TestCalculator {

    @Test
    public void testAddition() {
        Calculator calc = new Calculator();
        int result = calc.add(2, 3);
        assertEquals(5, result);
    }
}
