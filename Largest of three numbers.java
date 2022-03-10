package LargestNmuber;

import java.util.Scanner;

public class Main {

	public static void main(String[] args) {
		// TODO Auto-generated method stub
		int  a1,a2,a3,largest,temp;
		Scanner a = new Scanner(System.in);
		System.out.println("enter the first number");
		a1=a.nextInt();
		System.out.println("enter the second number");
		a2=a.nextInt();
		System.out.println("enter the third number");
		a3=a.nextInt();
		temp=a1>a2?a1:a2;
		largest=a3>temp?a3:temp;
		System.out.println("thelargest number:"+largest);
		

	}

}
