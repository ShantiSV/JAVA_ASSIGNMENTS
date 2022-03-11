public class Threading {
    public static void main(String[] args){
        ChildDemo c = new ChildDemo();
        c.start();
        for(int i=0;i<10;i++){
            Thread.currentThread().setName("hiperf"+i);
            System.out.println("Main thread "+i);
            System.out.println("Current thread "+Thread.currentThread().getName());
        }
    }
}