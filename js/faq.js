const answers = [
                document.getElementById("faq-answer-1"),
                document.getElementById("faq-answer-2"),
                document.getElementById("faq-answer-3"),
                document.getElementById("faq-answer-4"),
                document.getElementById("faq-answer-5")
            ]
const questions = [
                document.getElementById("faq-question-1"),
                document.getElementById("faq-question-2"),
                document.getElementById("faq-question-3"),
                document.getElementById("faq-question-4"),
                document.getElementById("faq-question-5")
            ]
const arrows = [
                document.getElementById("faq-question-1-arrow"),
                document.getElementById("faq-question-2-arrow"),
                document.getElementById("faq-question-3-arrow"),
                document.getElementById("faq-question-4-arrow"),
                document.getElementById("faq-question-5-arrow")
            ]

let isClosed = true;


for (let i = 0; i < answers.length; i++){
    questions[i].addEventListener("click", ()=>{
        if (isClosed){
            isClosed = false;
            gsap.to(answers[i], {maxHeight: "500px", duration: .3, ease: "none"})
            gsap.to(arrows[i], {rotate: 90, transformOrigin: "50% 50%", duration: .3, ease: "none"})
        }
        else{
            isClosed = true;
            gsap.to(answers[i],{maxHeight: "0px", duration: .1, delay: 0, ease: "none"})
            gsap.to(arrows[i], {rotate: 0, transformOrigin: "50% 50%", duration: .3, ease: "none"})
        }
    })
}