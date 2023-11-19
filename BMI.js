function calculate(){
    var weight = document.getElementById("input1").value;
    var height = document.getElementById("input2").value;

    //converting height from cm to m
    var heightinmeters = height / 100;
 
    //bmi formula
    var bmi = (weight/(heightinmeters*heightinmeters));
    //rounding off bmi to two decimal places only
    bmi = parseFloat(bmi.toFixed(2));

    document.getElementById("output").innerHTML= "Your BMI is " + bmi;

if(  bmi > 16.0 && bmi <18.5){
    document.getElementById("output").innerHTML+=" You are Underweight";
}
else if(bmi >18.5 && bmi < 25.0){
    document.getElementById("output").innerHTML+= " Congrats! You are Normal";
}
else if(bmi > 25.0 && bmi < 40.0){
    document.getElementById("output").innerHTML+=" You are Overweight";
}else{
    document.getElementById("output").innerHTML+= " Please enter correct details";
}
}