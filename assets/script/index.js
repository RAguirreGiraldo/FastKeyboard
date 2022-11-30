'use strict';
























// document get by id va a escuchar al submit-btn con evento click y va llamar la funcion setAlarm
//
document.getElementById('submit-btn').addEventListener("click", setAlarm);

function setAlarm() {
    let data = document.getElementById('hourwakeup').value;
    document.getElementById('setalarm').innerHTML = "Your word was " + data;
        
    if(!data) {
        output.innerText = 'Please input Valid Hour.';
        return;
    }       
}





/*    

    onEvent('click', btnConvert, function() {
    output.innerText = '';
    


    if(!initialNumber) {
        output.innerText = 'Please input Valid Hour.';
        return;
    }

    let selectedinput = select("input[name='convert']:checked");
    if(!selectedinput)  {
        output.innerText = 'Please Enter a Valid Hour';
        return;
    }

    let result;
    if(selectedinput.value !== true)  {
            
    }   
    
    
    });
    
    */





