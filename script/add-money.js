document.getElementById('add-money-btn').addEventListener('click',function(){
    //1.get bank
    const bankAccount = getValueFromInput('select-bank');
    console.log(bankAccount);
    if(bankAccount == "Select Bank"){
        alert('select a bank');
        return;
    }


     //2.get bank account and validate
     const bankAcocuntNumber = getValueFromInput('bank-account-number');
     console.log(bankAcocuntNumber);
     if(bankAcocuntNumber.length != 11){
        alert('invalid number');
        return;
     }
     //3. get amount
     const amount = getValueFromInput('add-amount');
     console.log(amount);
       //4.get the current balance, validate, convert to number
    const currentBalanceInput=document.getElementById('balance');
    const currentBalance=currentBalanceInput.innerText;
    console.log(currentBalance);

    //4.calculate the balance
    const newBalance=Number(currentBalance)+Number(amount);
   
    if(newBalance <0){
        alert('invalid amount');
        return;
    }
     const pin=getValueFromInput('add-money-pin');
    console.log(pin);
    if(pin =='1234'){
//          //5-1. true:: show an alert > set balance
         alert(`add money successful from ${'bankAccount'} at ${new Date()}`);
          console.log('new balance:',newBalance);
          currentBalanceInput.innerText=newBalance;



     }else{
             //5-2. false:: show an error> return
             alert('invalid pin');
             return;
     }
})