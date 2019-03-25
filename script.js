
//declare variables
var Fname;
var Lname;
var age;
var dob;
var dobipt;
var eye;
//click handler - Just reset variables (besides age) above in click function


//OBJECT
var Obj = {
Firstname: "",
Lastname: "",
ageProp: 0,
Dateofbirth: "",
Eyecolor: "",   

//METHOD 1
print: function(a){
document.querySelector(".target2").innerHTML = "Firstname:" + " "  + Fname;
   
document.querySelector(".target3").innerHTML = "Lastname:" + " " + Lname;   
    
document.querySelector(".target4").innerHTML = "Eye" + " " + "Color:" +  this.Eyecolor;    
    
document.querySelector(".target5").innerHTML = "Date of Birth:" + dob;
    } ,

//METHOD 2  
checkAge: function(a){
if(this.ageProp < 13){
//alert("Your age does not qualify, therefore you can not submit this survey");
}
//WORKS

if(this.ageProp > 13){
document.querySelector(".target1").innerHTML = ("You are qualified to recieve a permit");
}  
  
    }        
    };    

//CLICK FUNCTION
document.getElementById("btn1").addEventListener('click',
    function(){
Fname = document.querySelector(".ipt1").value;
Obj.Firstname = Fname;
console.log(Fname); //WORKS

Lname = document.querySelector(".ipt2").value;
Obj.Lastname = Lname;
console.log(Lname); //WORKS

eye = document.querySelector(".eyecolor");
Obj.Eyecolor = eye.eyes.value;
console.log(Obj.Eyecolor); //WORKS

age = document.querySelector(".ipt3").value;
Obj.ageProp = age;
Obj.checkAge(); 
console.log(Obj.checkAge);//WORKS

dob = document.querySelector(".ipt4").value;
Obj.Dateofbirth = dob;
console.log(dob); //WORKS

//Print method
Obj.print();   
    });   