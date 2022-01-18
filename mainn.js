Number(document.getElementById("income1").value="");
Number(document.getElementById("income2").value="");
Number(document.getElementById("income3").value="");
Number(document.getElementById("income4").value="");

Number(document.getElementById("Grocery").value="");
Number(document.getElementById("Gas").value="");
Number(document.getElementById("emi").value="");
Number(document.getElementById("Other").value="");


function Calculate(){
  number_1 = Number(document.getElementById("income1").value);
  number_2 = Number(document.getElementById("income2").value);
  number_3 = Number(document.getElementById("income3").value);
  number_4 = Number(document.getElementById("income4").value);
    

  number_5 = Number(document.getElementById("Grocery").value);
  number_6 = Number(document.getElementById("Gas").value);
  number_7 = Number(document.getElementById("emi").value);
  number_8 = Number(document.getElementById("Other").value);



 var zee=number_1+number_2+number_3+number_4;
  var op=number_5+number_6+number_7+number_8;

actual-zee-op;
console.log(actual_answer);

document.getElementById("answer1").innerHTML=actual_answer;
Number(document.getElementById("income1").value="");
Number(document.getElementById("income2").value="");
Number(document.getElementById("income3").value="");
Number(document.getElementById("income4").value="");

Number(document.getElementById("Grocery").value="");
Number(document.getElementById("Gas").value="");
Number(document.getElementById("emi").value="");
Number(document.getElementById("Other").value="");




document.getElementById("saving month").innerHTML=actual_answer;
}

function About()
{
    window.location="About.html";
}



