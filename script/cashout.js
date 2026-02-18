document.getElementById('cashout-btn').addEventListener('click',function(){
    console.log('cashout working')
    //1.get the agent number and validate
    const cashoutNumberInput=document.getElementById('cashout-number');
    const cashoutNumber = cashoutNumberInput.value;
    console.log(cashoutNumberInput);
      if(cashoutNumber.length != 11){
        alert('invalid number');
        return;
    }
    

    //2.get the amount, validate,convert to number
    const cashoutAmountInput= document.getElementById('cashout-amount');
    const cashoutAmount =cashoutAmountInput.value;
    console.log(cashoutAmount);
  

    //3.get the current balance, validate, convert to number
    const currentBalanceInput=document.getElementById('balance');
    const currentBalance=currentBalanceInput.innerText;
    console.log(currentBalance);
    //4.calculate the balance
    const newBalance=Number(currentBalance)-Number(cashoutAmount);
   
    if(newBalance <0){
        alert('invalid');
        return;
    }
    

     //5.get the pin and verify
     const cashoutPinInut = document.getElementById('cashout-pin');
     const cashoutPin = cashoutPinInut.value;
    
     if(cashoutPin =='1234'){
         //5-1. true:: show an alert > set balance
         alert('cashout successful');
          console.log('new balance:',newBalance);
          currentBalanceInput.innerText=newBalance;



     }else{
             //5-2. false:: show an error> return
             alert('invalid pin');
             return;
     }
   
  
})