import static org.mockito.Mockito.*;
import static org.junit.jupiter.api.Assertions.*;
import org.junit.jupiter.api.Test;
import org.mockito.Mockito;

public class MyServiceTest {

    @Test
    public void testExternalApi() {
        // 1. Create a mock of ExternalApi
        ExternalApi mockApi = Mockito.mock(ExternalApi.class);

        // 2. Stub the getData() method
        when(mockApi.getData()).thenReturn("Mock Data");

        // 3. Pass the mock to MyService
        MyService service = new MyService(mockApi);

        // 4. Call fetchData() and verify the result
        String result = service.fetchData();
        assertEquals("Mock Data", result);
    }
}



