package collection1hashset;

import java.util.HashSet;
import java.util.LinkedHashSet;
import java.util.SortedSet;
import java.util.TreeSet;

public class Collectionhashset {

	public static void main(String[] args) {
		// TODO Auto-generated method stub

		Collectionhashset h = new Collectionhashset();
        h.add("hello");
        h.add(1);
        h.add(true);
        h.add(1.08);
        h.add(true);
        s
        System.out.println(h.add("team"));
        
//        LinkedHashSet -> dup not allowed, insertion order preserved
        
        LinkedCollectionhashset a = new LinkedCollectionhashset();
        a.add("hello");
        a.add("team");
        a.add("hello");
//        System.out.println(a);
        
        SortedSet s = new TreeSet();
//    first, last, headset, tailset, subset, 
//        s.add(115);
//        s.add(110);
//        s.add(107);
//        s.add(100);
//        s.add(101);
//        s.add(103);
//        s.add(104);
        
        
        s.add("hello");
        s.add("hai");
        s.add("team");
//        s.add(100);
//        s.add(101);
//        s.add(103);
//        s.add(104);
        System.out.println(s);
        System.out.println(s.last());
        System.out.println(s.headSet("team"));
//        System.out.println(s.tailSet(104));
//        
//        System.out.println(s.subSet(103, 110));
        
        
        
	}

}





