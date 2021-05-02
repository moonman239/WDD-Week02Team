function writeContent() {
    let textbox = parseInt(document.getElementById("textbox").value);
    let output = 0;
    for (let i=1; i<=textbox; i+=1)
      output = output + i;
    document.getElementById("contents").innerHTML = output;
  }
  
function sum() {
    alert("hi");
    var input1 = parseInt(document.getElementById("textbox1").value);
    var input2 = parseInt(document.getElementById("textbox2").value);
    alert(input1 + input2);
    document.getElementById("result").innerHTML = input1 + input2;
  }