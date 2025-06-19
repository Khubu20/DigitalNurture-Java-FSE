public class factory {
    public interface Shape {
        void draw();
    }

    static class Circle implements Shape {
        public void draw() {
            System.out.println("Drawing Circle...");
        }
    }

    static class Rectangle implements Shape {
        public void draw() {
            System.out.println("Drawing Rectangle...");
        }
    }

    static class ShapeFactory {

        public Shape getShape(String shapeType) {
            if (shapeType == null) return null;

            if (shapeType.equalsIgnoreCase("circle")) {
                return new Circle();
            } else if (shapeType.equalsIgnoreCase("rectangle")) {
                return new Rectangle();
            }

            return null;
        }
    }


        public static void main(String[] args) {
            ShapeFactory factory = new ShapeFactory();

            Shape s1 = factory.getShape("circle");
            Shape s2 = factory.getShape("rectangle");

            s1.draw();  // Drawing Circle...
            s2.draw();  // Drawing Rectangle...
        }



}