var billAmount=document.querySelector(".bill-amount");
var cashGiven=document.querySelector(".cash-given");
var buttonCheck=document.querySelector(".check");
var message=document.querySelector("#message"); 
var notes=document.querySelectorAll(".no-of-notes");
var transit=document.querySelector(".transit");

var notesList=[2000,500,200,100,50,20,10,1];

buttonCheck.addEventListener("click", function checkHandler(){
    message.style.display = "none";
    if(billAmount.value > 0 ){
        if(Number(cashGiven.value) > Number(billAmount.value)){
            var calculatedAmount=(cashGiven.value - billAmount.value);
            for( let i=0;i<notesList.length;i++){
                var noOfNotes=Math.trunc(calculatedAmount/notesList[i]);
                var calculatedAmount=calculatedAmount%notesList[i];
                notes[i].innerText = noOfNotes;
            }

        }
        else if (cashGiven.value==billAmount.value) {
            message.style.display="block";
            mes="You have paid exact bill amount!";
            errorMessage(mes);
        } 
        else {
            message.style.display="block";      
            mes="Given amount is less than bill amount!!";
            errorMessage(mes);
        }
    }else{
        message.style.display="block";
       mes="Invalid Bill amount !!";
       errorMessage(mes);
    }
});
function errorMessage(mes){
    
    message.innerText=mes;
}