function generatePin(){
    const pin = Math.round(Math.random()*10000);
    if(pin <= 1000){
        return generatePin();
    }
    return pin;
}


document.getElementById('btn-pin-create').addEventListener('click', function(){
    const pin = generatePin();
    const pinGenerateField = document.getElementById('pin-generate-field');
    pinGenerateField.value = pin;
})

const submitDisplay = document.getElementById('submit-display');
function button(number){
    const preNumber = submitDisplay.value;
    const newNumber = preNumber + number;
    submitDisplay.value = newNumber;
}
function Clear(){
    submitDisplay.value = "";
}
function Delete(){
    submitDisplay.value = submitDisplay.value.slice(0,-1)
}


document.getElementById('btn-submit').addEventListener('click', function(){
    const pinGenerateField = document.getElementById('pin-generate-field');
    const success = document.getElementById('success');
    const fail = document.getElementById('failur');
    if(submitDisplay.value == pinGenerateField.value && submitDisplay.value > 0){
        success.style.display = 'block';
        fail.style.display = 'none';
    }else{
        fail.style.display = 'block';
        success.style.display = 'none';
    }
    submitDisplay.value = '';
})
