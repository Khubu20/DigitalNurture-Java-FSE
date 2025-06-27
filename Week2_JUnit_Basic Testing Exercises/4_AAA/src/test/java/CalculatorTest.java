import org.junit.Before;
import org.junit.After;
import org.junit.Test;
import static org.junit.Assert.*;

public class CalculatorTest {

    private Calculator calc;

    // Setup method: runs before each test
    @Before
    public void setUp() {
        calc = new Calculator();
        System.out.println("Setup: Calculator instance created");
    }

    // Teardown method: runs after each test
    @After
    public void tearDown() {
        calc = null;
        System.out.println("Teardown: Calculator instance destroyed");
    }

    @Test
    public void testAddition() {
        // Arrange
        int a = 5;
        int b = 3;

        // Act
        int result = calc.add(a, b);

        // Assert
        assertEquals(8, result);
    }

    @Test
    public void testSubtraction() {
        // Arrange
        int a = 10;
        int b = 4;

        // Act
        int result = calc.subtract(a, b);

        // Assert
        assertEquals(6, result);
    }
}
