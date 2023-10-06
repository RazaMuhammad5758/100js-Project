function calc() {
    const num1 = document.getElementById('num1').value;
    const num2 = document.getElementById('num2').value;
    const operation = document.getElementById('operation').value;

    if(operation === "+"){
        var result = parseInt(num1) + parseInt(num2);
    }
    else if(operation === '-'){
        var result = parseInt(num1) - parseInt(num2);
    }
    else if(operation === '*'){
        var result = parseInt(num1) * parseInt(num2);
    }
    else if(operation === '/'){
        var result = parseInt(num1) / parseInt(num2);
    }

    document.getElementById('result1').value = result
    
}