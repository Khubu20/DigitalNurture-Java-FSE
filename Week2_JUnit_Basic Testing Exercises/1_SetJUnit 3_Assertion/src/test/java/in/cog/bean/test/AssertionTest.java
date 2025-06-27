package in.cog.bean.test;

import org.junit.Test;

import static org.junit.Assert.*;
import static org.junit.Assert.assertNotNull;
import static org.junit.Assert.assertNull;

    import org.junit.Test;
import static org.junit.Assert.*;

    public class AssertionTest {

        @Test
        public void testAssertions() {
            assertEquals(5, 2 + 3);
            assertTrue(5 > 3);
            assertFalse(5 < 3);
            assertNull(null);
            assertNotNull(new Object());
        }
    }



