document.querySelector("form").onkeyup=function() {myfunction()};
document.getElementById("tipo").onchange = function() {myfunction()};

function myfunction(){
    var numA= document.getElementById("numA").value;
    var numB=document.getElementById("numB").value;
    var numC=document.getElementById("numC").value;
    


    if(numA == 0  || numB ==0 || numC == 0){
        document.getElementById("NumX").innerHTML="X";
        document.getElementById("formula").innerHTML="";
    }else{
        /*directo o inverso*/
        if(document.getElementById("tipo").Value =="directa"){
            document.getElementById("formula").innerHTML="X = "+numB+" * "+numC+" / "+numA;
            document.getElementById("NumX").innerHTML= numB * numC / numA;
        }
        else{
            document.getElementById("formula").innerHTML= "X = "+numA+" * "+numB+" / "+numC;
            document.getElementById("NumX").innerHTML=numA * numB / numC;
        }
        }
    }
