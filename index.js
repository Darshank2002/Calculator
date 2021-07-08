
//Function to Display
function Display(ele){
    document.getElementById("displayText").innerHTML += ele;

}
//Function to Calculate
function Calc(){
    var a = document.getElementById("displayText").innerHTML;
    var res = eval(a);
    document.getElementById("displayText").innerHTML = res ;

}
//Function to Clear the Window
function Clear(){
    document.getElementById("displayText").innerHTML= "";
}