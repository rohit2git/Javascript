var  numField1 = document.getElementById('numField1');
var  numField2 = document.getElementById('numField2');
var  resultField = document.getElementById('resultField');

numField1.value = 0;
numField2.value = 0;

var form = document.getElementById('xIsWhatPercentOfY');

form.addEventListener('submit', function(event) {
    
    if (!numField1.value || !numField2.value) {
        alert("Please enter values in the fields");
    } else {
        numField1.value = parseFloat(numField1.value);
        numField2.value = parseFloat(numField2.value);
        resultField.innerText = "Result: " + (numField1.value / numField2.value) * 100 + "%";
        event.preventDefault();
    }
});

