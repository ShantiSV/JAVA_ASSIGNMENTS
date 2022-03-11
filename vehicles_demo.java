abstract class Vehicles{  
  abstract void run();  
}  
class Buses extends Vehicles{  
void run(){System.out.println("running safely");}  
public static void main(String args[]){  
 Vehicles obj = new Buses();  
 obj.run();  
}  
}  