package multiThreading;

 

public class ThreadDemo {

 

    public static void main(String[] args) { // executed by main thread
        // TODO Auto-generated method stub
        ChildDemo c = new ChildDemo();  // thread instantiating
        c.start();    // starting a thread 

 

        for(int i = 0; i<=10;i++) {
             Thread.currentThread().setName("spider man ");
            System.out.println("main thread is "+i + Thread.currentThread().getName());
//            System.out.println("main thread is "+ Thread.currentThread().getName());
        }
    }

 

}
 