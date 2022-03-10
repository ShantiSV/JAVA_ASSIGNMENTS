package com.example.AccessModifier;
public class AccessModifier
{
	public static void main(String[] args) 
	{
		 System.out.println("hello team");
	        methodOne();
	        int x = 10;
	        int value = methodTwo(12,5, x);  
	        System.out.println(value);
	        int subtractedValue = sub(5,2);
	        System.out.println(sub(5,2));
	        System.out.println(subtractedValue);
	}
	static String methodOne()
	{ 
		System.out.println("method one is executed");
	    return "hello";
	}
	static int methodTwo(int num1, int num2,int num3)
	{ 
		return num1-num2;
	}
	static int sub(int num1, int num2)
	{
	    return num1-num2;
	} 
}