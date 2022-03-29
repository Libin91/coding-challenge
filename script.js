function yourQuestion() {
    let answerOption = ['yes','no', 'maybe', 'might be', 'never', 'dumb question tbh'];
    let result = answerOption[Math.floor(Math.random()*answerOption.length)];
   
    let userAnswer = document.getElementById("QUESTION").value;
    document.getElementById("magic8ballanswer").innerHTML ="The ball say:" + result;
    document.getElementById("QUESTION").value = "";

};

function resetQuestion(){
    window.location.reload();
}