public class Exceptions_{
    public static void main(String[] args){
        try{
            int[] a = new int[5];
            a[5] = 10;
        }
        catch(ArrayIndexOutOfBoundsException e){
            System.out.println("Exception occured");
        }
        finally{
            System.out.println("Finally block");
        }


        /*SS-1
        #1 - right format
        #2 - right format
        #3 - wrong format
        #4 - wrong format
        #5 - right format
        SS-2
        #1 - right format
        #2 - wrong format
        #3 - right format
        #4 - right format
        #5 - wrong format
        SS-3
        #1 - right format
        #2 - right format
        #3 - right format
        SS-4
        #1 - wrong format
        #2 - wrong format
        #3 - wrong format
        SS-5
        #1 - wrong format
        #2 - wrong format
        #3 - wrong format
        #4 - right format
        #5 - wrong format
        #6 - wrong format
        */
        try{                        
            System.out.println("s1");   
            // String x=null;              
            System.out.println("s2");
            System.out.println("s3");
            try{
                System.out.println("s4");

                System.out.println("s5");
                System.out.println("s6");
            }
            catch(NullPointerException e){
                System.out.println("s7");
            }
            finally{
                System.out.println("s8");
            }
            System.out.println("s9");
        }
        catch(NullPointerException e){
            System.out.println("s10");
        }
        finally{
            System.out.println("s11");
        }
        System.out.println("s12");

        /*
        case 1: no exception
        case 2: exception @s2 + handled
        case 3: exception @s2 + not handled
        case 4: exception @s5+ matched
        case 5: exception @s5 + inner catch not matched, outer catch matched
        case 6: exception @s5 + both catch unmatched
        case 7: exception @s7 + catched
        case 8: exception @s7 + non match
        case 9: s8 + match
        case 10: s8 + non match
        case 11: exception @s9 + block matched
        case 12: exception @s9 plus no match of catch
        case 13: exception @s10
        case 14: exception @s11/s12
        *********************************************************************
        case 1: s1-s2-s3-s4-s5-s6-s8-s9-s11-s12
        case 2: s1-s10-s11-s12
        case 3: s1-s11-interrupt
        case 4: s1-s2-s3-s4-s7-s8-s9-s11-s12
        case 5: s1-s2-s3-s4-s8-s10-s11-s12
        case 6: s1-s2-s3-s4-s8-s11-interrupt
        case 7: s1-s2-s3-s4-s5-s6-s8-s9-s11-s12
        case 8: s1-s2-s3-s4-s5-s6-s8-s9-s11-s12
        case 9: s1-s2-s3-s4-s5-s6-s10-s11-s12
        case 10:s1-s2-s3-s4-s5-s6-s11-interrupt
        case 11:s1-s2-s3-s4-s5-s6-s8-s10-s11-s12
        case 12:s1-s2-s3-s4-s5-s6-s8-s11-interrupt
        case 13:s1-s2-s3-s4-s5-s6-s8-s9-s11-s12
        case 14:s1-s2-s3-s4-s5-s6-s8-s9-interrupt
        */



    }