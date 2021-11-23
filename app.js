var billAmount=document.querySelector(".bill-amount");
var cashGiven=document.querySelector(".cash-given");
var buttonCheck=document.querySelector(".check");
var message=document.querySelector("#message"); 
var notes=document.querySelectorAll(".no-of-notes");
var transit=document.querySelector(".transit")
var notesList=[2000,500,200,100,20,10,1];

buttonCheck.addEventListener("click", function checkHandler(){
    message.style.display = "none";
    if(billAmount.value > 0 ){
        if(cashGiven.value >= billAmount.value){
            var calculatedAmount=cashGiven.value -billAmount.value;
            for( let i=0;i<notesList.length;i++){
                var noOfNotes=Math.trunc(calculatedAmount/notesList[i]);
                var calculatedAmount=calculatedAmount%notesList[i];
                notes[i].innerText = noOfNotes;
            }

        }else{
            mes="Given amount is less than bill amount!!";
            errorMessage(mes);
        }
    }else{
       mes="Invalid Bill amount !!";
       errorMessage(mes);
    }
});
function errorMessage(mes){
    message.style.display="block";
    message.innerText=mes;
}