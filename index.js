//let name= "Duncan";
//let age= 22;
//isSchool= "false";
//console.log(name);
//console.log(age);
//console.log(isSchool);
//window.alert(`Hello, this is ${name}!`);
//window.alert(`And I am ${age} years old!`);
//document.getElementById("hd1").textContent = "Big Hello to the World";
//document.getElementById("p1").textContent = `My name is ${name}`;
//let username;
//username =  window.prompt("What is your username?");
//document.getElementById("submit").onclick = function() {
  //  username = document.getElementById("myInput").value;
    //document.getElementById("hd1").textContent = `I ${username} would like to say a big Hello to the world`;
    //console.log(username);
//}
const PI = 3.142;
let radius;
let circumference;
document.getElementById("submit").onclick = function() {
   radius= document.getElementById("myInput").value;
   radius = Number(radius);
   circumference = 2 * PI * radius;
   document.getElementById("myH2").textContent ="The circumference is " + circumference + " cm";

}