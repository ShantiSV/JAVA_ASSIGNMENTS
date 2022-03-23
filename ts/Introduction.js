
var a,b,c,d
console.log(a,b,c,d)
// --------------------------------------------------
var myvar =1
console.log(myvar)
// --------------------------------------------------
var fname = "Shanti"
var lname = "Suma"
var mar_status="single"
var country="India"
var age=22
// --------------------------------------------------
var fname1 = "Shanti",lname1 = "Suma", mar_status1="single",country1="India",age1=22

console.log(fname1,lname1,mar_status1,country1,age1) 
// --------------------------------------------------
var arr = ['Mon','Tue','Wed','Thu','Fri','Sat','Sun']
var obj ={name:"Shanti",age:22,country:"India"}
var MT = null
var nan = NaN
var not_defined = undefined
str = "sample text"
console.log(typeof(a))
console.log(typeof(b))
console.log(typeof(c))
console.log(typeof(d))
console.log(typeof(arr))
console.log(typeof(obj))
console.log(typeof(MT))
console.log(typeof(nan))
console.log(typeof(not_defined))
console.log(typeof(str))
// --------------------------------------------------
var c1 = 10>1
var c2 = 10==10
var c3 = 10<=6
var c4 = 10!=10
var c5 = 10>=10
var c6 = 6!=6

console.log(c1,c2,c3,c4,c5,c6)
// --------------------------------------------------
console.log(5**2)
console.log(5+6+9)
let breadth = 5
let height = 6
console.log("Area of triangle is:",0.5*breadth*height)
console.log("*****")
console.log("*****")
console.log("*****")
console.log("*****")
console.log("*****")

// --------------------------------------------------
var count = 0
const myarray = [11,22,33,44,55]
for(i in myarray){
    count +=1
}
console.log(count)

// --------------------------------------------------
const x = []
const foods = ['apple','banana','orange','pineapple','grapes','mango',
'watermelon','papaya','strawberry','cherry','pear','kiwi','guava',
'pomegranate','dragon fruit','coconut','biryani','pizza','burger','pasta']
console.log(foods[4])
console.log("Length of array is:",foods.length)

// --------------------------------------------------
var num = 10
function addFive(num){
    return num+5
}
console.log(addFive(5))
console.log(addFive(0))
console.log(addFive(-5))

// --------------------------------------------------
var result = addFive(num)
console.log(result)

// --------------------------------------------------
function getOpposite(num){
    if(num==0){
        return 0
    }
    else if(typeof(num)=="string" || num%1 != 0){
        return -1
    }
    else{
        return -num
    }
}
console.log(getOpposite(5));
console.log(getOpposite(0));
console.log(getOpposite(-5));
console.log(getOpposite("5a"));
console.log(getOpposite(5.5));

// --------------------------------------------------
num = 5
var result = getOpposite(num)
console.log(result)

// --------------------------------------------------
function toSeconds(min){
    return min*60
}
console.log(toSeconds(5))
console.log(toSeconds(3))
console.log(toSeconds(2))

// --------------------------------------------------
var min = 5;
var secs = toSeconds(min)

// --------------------------------------------------
const emp_info = {name:"Shanti", age:22, empID:"003BD2", location:"Bangalore"}
console.log(emp_info)