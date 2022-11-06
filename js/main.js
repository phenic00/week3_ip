const myAnswers = document.querySelectorAll(".ouranswers");
const finishButton = document.querySelector("#submit")

let total = 0;
let score = 0;
myAnswers.forEach(function(answer){
    total+= parseInt(answer.value);
});

finishButton.addEventListener("click", function(e){
 
    myAnswers.forEach(function(answer){
        if (answer.checked){
            score += parseInt(answer.value);
        }
   
    })
   