console.log('loggin comming');

document.getElementById('login-btn').addEventListener('click',function(){
    //1-get the mobile number
    const inputNumber=document.getElementById('input-number');
    const number=inputNumber.value;
    console.log(number);

    //2-get the pin
    const inputPin=document.getElementById('input-pin');
    const pin=inputPin.value;
    console.log(pin);
    //3-match the mobile number and pin number
    if(number=='01234567890' && pin=='1234'){
            //3.1-if true -login success and go to homepage
        alert('login success');
        // window.location.replace("/home.html");
        window.location.assign("/home.html");
    
    }else{
         //3.2-if false return
         alert('login failed');
         return;
    }
    
   
})