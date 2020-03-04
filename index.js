//var person = String(prompt("Please enter your name"));
if(person != ""){ 
var a= prompt("Enter Start Slice");
{
if(isNaN(a)===true){
  alert("Sorry,not a number");
  return prompt("Enter Start Slice");
  }
else {
  var b= prompt("Enter End Slice");
 if(isNan(b)===true){
  alert("Sorry,not a number");
  return prompt("Enter End Slice");
  }
  else{
  var c=(person.slice(a,b));
  console.log(alert(c));
 }}}}
  