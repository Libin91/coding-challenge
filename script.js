import {answers} from "./modules/answers.js";

let audio = new Audio('Tada-sound.mp3')
let result = answers[Math.floor(Math.random()*answers.length)];
let submitbutton = document.querySelector("#fortunebutton");
let resetTheQuestion = document.querySelector("#reset");
let inpuT = document.getElementById('QUESTION');
let magicAnswer = document.getElementById("magic8ballanswer");
// let btn = document.getElementById('fortunebutton');

inpuT.addEventListener("input", function(){
  submitbutton.disabled = (this.value === '');
})

 function yourQuestion()  {
    audio.play();
    magicAnswer.innerHTML ="The ball says: " + result;
    inpuT.value = "";
     
 }

function resetQuestion(){
    window.location.reload();
}

submitbutton.addEventListener("click", yourQuestion);
resetTheQuestion.addEventListener("click", resetQuestion);
