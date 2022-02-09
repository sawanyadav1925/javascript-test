function myFunction(){
    var name=document.getElementById("name1").value;
    var exp=/^[a-zA-Z\s]+$/;
    var val = exp.test(name);
    document.getElementById("name1").style.border="1px solid black";
    document.getElementById("p1").innerText="";
    var mobile = document.getElementById("mobile1").value;
    document.getElementById("mobile1").style.border="1px solid black";
    document.getElementById("p2").innerText="";
    if(name == ""){
        document.getElementById("name1").style.border= "1px solid red";
        document.getElementById("p1").innerText="this field is required!";
    }
    else if(val != true){
        document.getElementById("name1").style.border= "1px solid red";
        document.getElementById("p1").innerText="name should be string!";
    }
   
    if(mobile.length != 10 ){
      document.getElementById("mobile1").style.border= "1px solid red";
      document.getElementById("p2").innerText="only 10 digits!";
    }
    else{
    document.getElementById("txt").innerHTML=name;
    document.getElementById("txt1").innerHTML=mobile;
    }

}