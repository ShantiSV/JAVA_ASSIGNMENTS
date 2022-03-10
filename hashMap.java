 HashMap<Character,Integer> charCountMap = new HashMap();
        System.out.println(charCountMap);
        char[] ch = s.toCharArray();
//        System.out.println("ch is "+Arrays.toString(ch));
        for(char c: ch) {
            if(charCountMap.containsKey(c)) {
                charCountMap.put(c, charCountMap.get(c)+1);
            }else {
                charCountMap.put(c,1);
            } 
        }
        System.out.println(charCountMap);