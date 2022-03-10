package hashmap;
import java.util.HashMap;
public class HashMap1
{
	public static void main(String[] args) 
	{
		HashMap h = new HashMap();
		h.put(101, "john");  //addition of data's
		HashMap h2 = new HashMap();
		h2.put(1000, "jerry");
		h2.put(1010, "tom");
		h.put(102, "loki");
		h.put(105, "hulk");
		h.put(210, "spidy");
		//	        System.out.println(h);
		h.remove(102);   //remove 
		//	        System.out.println(h);
		//	        System.out.println(h.containsKey("john"));
		//	        System.out.println(h.containsValue("hulk"));
		System.out.println(h.entrySet());
		//	        System.out.println(h.pu
		System.out.println(h.putIfAbsent(210,"hulk"));
		System.out.println(h.putIfAbsent(10,"captain america"));
		System.out.println(h.keySet()); //to get all the keys
		System.out.println(h.values()); // to get all the values
		h.putAll(h2); // inserting all the data's 
		//clear, is empty 
		System.out.println(h);
	}
}