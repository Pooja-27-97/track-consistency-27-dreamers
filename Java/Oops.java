public class Oops {
    public static void main(String[] args) {
        // Pen p1 = new Pen(); //object
        // p1.setColor("Purple");
        // System.out.println(p1.getColor());


        // Student s1 = new Student();
        // s1.name = "Brecky";
        // s1.roll = 7;
        // s1.password = "123abcd";
        // s1.marks[0] = 90;
        // s1.marks[1] = 80;
        // s1.marks[2] = 100;

        // Student s2 = new Student(s1);
        // s2.password = "abcd";
        // s1.marks[1] = 95;
        // for(int i=0; i < 3; i++) {
        //     System.out.println(s2.marks[i]);
        // }

        Dog d1 = new Dog();
        d1.bark();
        d1.breath();
    }
}

class Animal {
    String color;

    void eat() {
        System.out.println("Eats food");
    }

    void breath() {
        System.out.println("Breath through nose");
    }
}

class Dog extends Animal {
    void bark() {
        System.out.println("Bow!");
    }
}

class Cat extends Animal {
    void meow() {
        System.out.println("Meow!");
    }
}

// class Pen { //class
//     private String color;
//     private int tip;

//     String getColor() {
//         return this.color;
//     }

//     void setColor(String newColor) {
//         color = newColor;
//     }

//     void setTip(int newTip) {
//         tip = newTip;
//     }
// }

// class Student {
//     String name;
//     int roll;
//     String password;
//     int marks[];

//     //shallow
//     // Student(Student s1) {
//     //     marks = new int[3];
//     //     this.name = s1.name;
//     //     this.roll = s1.roll;
//     //     this.marks = s1.marks;
//     // }

//     //Deep-copy
//     Student(Student s1) {
//         marks = new int[3];
//         this.name = s1.name;
//         this.roll = s1.roll;
//         for(int i=0; i < marks.length ; i++) {
//             this.marks[i] = s1.marks[i];
//         }
//     }

//     Student() {
//         System.out.println("Hello World!");
//     }

//     Student(String name) {
//         this.name = name;
//     }

//     Student(int roll) {
//         this.roll = roll;
//     }
// }