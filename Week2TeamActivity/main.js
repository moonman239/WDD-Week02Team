function sumToInputtedNumber() {
    let textbox = parseInt(document.getElementById("textbox_02").value);
    let output = 0;
    for (let i=1; i<=textbox; i+=1)
      output = output + i;
    document.getElementById("sum").innerHTML = output;
  }
  
function sum() {
    alert("hi");
    var input1 = parseInt(document.getElementById("textbox1_03").value);
    var input2 = parseInt(document.getElementById("textbox2_03").value);
    alert(input1 + input2);
    document.getElementById("result").innerHTML = input1 + input2;
  }