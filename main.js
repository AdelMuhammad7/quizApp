// get elements
let countSpan = document.querySelector(".count span")
let categorySpan = document.querySelector(".category span")
let bulletsEl = document.querySelector(".bullets")
let bulletsContainer = document.querySelector(".bullets .spans")
let quizCate = document.querySelector(".quiz_Category")
let quizApp = document.querySelector(".quiz-app")
let quizInfo = document.querySelector(".quiz-info")
let quizArea = document.querySelector(".quiz-area")
let answersArea = document.querySelector(".answers-area")
let submit = document.querySelector(".submit-button")
let submitCategory = document.querySelector(".submitCategory")
let results = document.querySelector(".results")
let countdownElement = document.querySelector(".countdown")
let selectCat = document.querySelector("select")
// question of math
let dataMath = [
    {
        "title": "iamge_numbers/one.png",
        "answer_1": "three",
        "answer_2": "one",
        "answer_3": "ten",
        "answer_4": "nine",
        "right_answer": "one"
    },
    {
        "title": "iamge_numbers/two.png",
        "answer_1": "three",
        "answer_2": "two",
        "answer_3": "ten",
        "answer_4": "six",
        "right_answer": "two"
    },
    {
        "title": "iamge_numbers/three.png",
        "answer_1": "five",
        "answer_2": "three",
        "answer_3": "six",
        "answer_4": "two",
        "right_answer": "three"
    },
    {
        "title": "iamge_numbers/four.jpg",
        "answer_1": "eight",
        "answer_2": "one",
        "answer_3": "ten",
        "answer_4": "four",
        "right_answer": "four"
    },
    {
        "title": "iamge_numbers/five.png",
        "answer_1": "five",
        "answer_2": "one",
        "answer_3": "four",
        "answer_4": "nine",
        "right_answer": "five"
    },
    {
        "title": "iamge_numbers/six.png",
        "answer_1": "two",
        "answer_2": "six",
        "answer_3": "ten",
        "answer_4": "eight",
        "right_answer": "six"
    },
    {
        "title": "iamge_numbers/seven.png",
        "answer_1": "three",
        "answer_2": "seven",
        "answer_3": "ten",
        "answer_4": "five",
        "right_answer": "seven"
    },
    {
        "title": "iamge_numbers/eight.png",
        "answer_1": "three",
        "answer_2": "one",
        "answer_3": "ten",
        "answer_4": "eight",
        "right_answer": "eight"
    },
    {
        "title": "iamge_numbers/nine.png",
        "answer_1": "four",
        "answer_2": "one",
        "answer_3": "ten",
        "answer_4": "nine",
        "right_answer": "nine"
    },
    {
        "title": "iamge_numbers/ten.jpg",
        "answer_1": "three",
        "answer_2": "one",
        "answer_3": "ten",
        "answer_4": "nine",
        "right_answer": "ten"
    }
]
//  question of animals
let dataPhoto = [
    {
        "title": "images/bee.png",
        "answer_1": "cat",
        "answer_2": "dog",
        "answer_3": "bee",
        "answer_4": "lion",
        "right_answer": "bee"
    },
    {
        "title": "images/cat.jpg",
        "answer_1": "dolphin",
        "answer_2": "dog",
        "answer_3": "bee",
        "answer_4": "cat",
        "right_answer": "cat"
    },
    {
        "title": "images/dog.jpg",
        "answer_1": "elephant",
        "answer_2": "dog",
        "answer_3": "lion",
        "answer_4": "bird",
        "right_answer": "dog"
    },
    {
        "title": "images/dolphin.jpg",
        "answer_1": "dolphin",
        "answer_2": "elephant",
        "answer_3": "lion",
        "answer_4": "bird",
        "right_answer": "dolphin"
    },
    {
        "title": "images/elephant.jpg",
        "answer_1": "dog",
        "answer_2": "cat",
        "answer_3": "bird",
        "answer_4": "elephant",
        "right_answer": "elephant"
    },
    {
        "title": "images/falcon.jpg",
        "answer_1": "falcon",
        "answer_2": "snake",
        "answer_3": "bee",
        "answer_4": "donkey",
        "right_answer": "falcon"
    },
    {
        "title": "images/fish.jpg",
        "answer_1": "cat",
        "answer_2": "snake",
        "answer_3": "fish",
        "answer_4": "lion",
        "right_answer": "fish"
    },
    {
        "title": "images/horse.jpg",
        "answer_1": "horse",
        "answer_2": "dog",
        "answer_3": "cat",
        "answer_4": "bee",
        "right_answer": "horse"
    },
    {
        "title": "images/lion.jpg",
        "answer_1": "bee",
        "answer_2": "lion",
        "answer_3": "snake",
        "answer_4": "dog",
        "right_answer": "lion"
    },
    {
        "title": "images/snake.jpg",
        "answer_1": "cat",
        "answer_2": "dolphin",
        "answer_3": "snake",
        "answer_4": "lion",
        "right_answer": "snake"
    }
]

// this make to change qustions
let currentIndex = 0;
// presons right answers
let rightAnswers = 0;
// intervel 
let countDownIntervel;


submitCategory.addEventListener("click" , function(){
    quizCate.style.display = "none"
    quizApp.style.display = "flex"

    if(selectCat.value === "numbers") {
        categorySpan .innerHTML = "numbers"
        // make bullets and number of the Question 
        let mathCount = dataMath.length
        createBullets(mathCount)

        // add Questions To Html 
        // currentIndex >> this make to change qustions
        addQuestionsToHtml(dataMath[currentIndex] , mathCount)

        // countDown Interveal
        countdown(30 , mathCount)

        // on submit
        submit.addEventListener("click" , () => {

            // get the right answer
            let theRightAnswer = dataMath[currentIndex].right_answer
            
            // current index++
            currentIndex++

            // check the Answer
            checkAnswer(theRightAnswer , mathCount)

            // remove previous question
            quizArea .innerHTML = ""
            answersArea .innerHTML = ""

            // add next question
            addQuestionsToHtml(dataMath[currentIndex] , mathCount)

            // handel bullets 
            handelBullets ()

            // countDown Interveal
            clearInterval(countDownIntervel)
            countdown( 30 , mathCount)

            // show Result
            showResult(mathCount)
        })
    }else if (selectCat.value === "animals"){
        categorySpan .innerHTML = "animals"
         // make bullets and number of the Question 
        let photoCount = dataPhoto.length
        createBullets(photoCount)

        // add Questions To Html 
        // currentIndex >> this make to change qustions
        addQuestionsToHtml(dataPhoto[currentIndex] , photoCount)

        // countDown Interveal
        countdown(30 , photoCount)

        // on submit
        submit.addEventListener("click" , () => {

            // get the right answer
            let theRightAnswer = dataPhoto[currentIndex].right_answer
            
            // current index++
            currentIndex++

            // check the Answer
            checkAnswer(theRightAnswer , photoCount)

            // remove previous question
            quizArea .innerHTML = ""
            answersArea .innerHTML = ""

            // add next question
            addQuestionsToHtml(dataPhoto[currentIndex] , photoCount)

            // handel bullets 
            handelBullets ()

            // countDown Interveal
            clearInterval(countDownIntervel)
            countdown( 30 , photoCount)

            // show Result
            showResult(photoCount)
        })
    }
})

// to get question With AJAX form JSON File
// function getQuestions (){
//     let request = new XMLHttpRequest()

//     request.onreadystatechange = function(){
//         if(this.readyState === 4 && this.status === 200){
//             let questionsObject = JSON.parse(this.responseText)
            
//             // make bullets and number of the Question 
//             let questionsCount = questionsObject.length
//             createBullets(questionsCount)

//             // add Questions To Html 
//             // currentIndex >> this make to change qustions
//             addQuestionsToHtml(questionsObject[currentIndex] , questionsCount)

//             // countDown Interveal
//             countdown(60 , questionsCount)

//             // on submit
//             submit.addEventListener("click" , () => {

//                 // get the right answer
//                 let theRightAnswer = questionsObject[currentIndex].right_answer
                
//                 // current index++
//                 currentIndex++

//                 // check the Answer
//                 checkAnswer(theRightAnswer , questionsCount)

//                 // remove previous question
//                 quizArea .innerHTML = ""
//                 answersArea .innerHTML = ""

//                 // add next question
//                 addQuestionsToHtml(questionsObject[currentIndex] , questionsCount)

//                 // handel bullets 
//                 handelBullets ()

//                 // countDown Interveal
//                 clearInterval(countDownIntervel)
//                 countdown( 60 , questionsCount)

//                 // show Result
//                 showResult(questionsCount)
//             })
//         }
//     }
//     request.open("get" , "math_question.json")
//     request.send()
// }


// make bullets and number of the Question 

function createBullets(num){
    countSpan.innerHTML = num
    
    for(let i=0; i < num; i++){
        let theBullet = document.createElement("span")
        if(i === 0 ){
            theBullet.classList.add("on")
        }
        bulletsContainer.append(theBullet)
    }
}

// add Questions To Html 
function addQuestionsToHtml(obj , count){
    if(currentIndex < count){
        console.log(obj)
        // create Question
        let imgTitle = document.createElement("img")
        imgTitle.setAttribute("src" , `${obj.title}`)
        quizArea.append(imgTitle)

        // create 4 Answers 
        for(let i = 1; i <= 4; i++){
            // mainDiv
            let mainDiv = document.createElement("div")
            mainDiv.className = "answer"

            // input
            let inputRadio = document.createElement("input")
            inputRadio.name = "answers"
            inputRadio.type = "radio"
            inputRadio.id = `answer_${i}`
            inputRadio.dataset.answer = obj[`answer_${i}`]

            // checked first input
            if ( i === 1 ){
                inputRadio.checked = true
            }

            // label
            let thelabel = document.createElement("label")
            thelabel.setAttribute("for" , `answer_${i}`)
            thelabel.innerText = obj[`answer_${i}`]

            // append to html
            mainDiv.append(inputRadio)
            mainDiv.append(thelabel)
            answersArea.append(mainDiv)
        }
    }
}

function checkAnswer(rAnswer , count){
    // ana gebt kol el answer
    let answers = document.getElementsByName("answers")
    // 3amlt var 3shan el answer ely hay5tarha
    let theChoosenAnswer;
    // 3amlt loop 3la el answer lwo checked yb2a heya de el answer
    for(let i=0; i < answers.length; i++){
        if(answers[i].checked){
            theChoosenAnswer = answers[i].dataset.answer
        }
    }
    // lwo choosen answer = right answer kda s7 yb2 ya5od darga 
    if(rAnswer === theChoosenAnswer) {
        rightAnswers++
    }
}

function handelBullets(){
    let allBullets = document.querySelectorAll(".bullets .spans span")
    allBullets.forEach(function(el , index){
        if(currentIndex === index){
            el.className = "on";
        }
    })
}

function showResult (count){
    let yourResult;
    if(currentIndex === count){
        quizInfo.remove()
        quizArea.remove()
        answersArea.remove()
        submit.remove()
        bulletsEl.remove()
        quizApp.classList.add("finish")
        results.style.display = "flex"

        if(rightAnswers >= (count / 2) && rightAnswers < count){   
            yourResult= `<span class="good">Good : </span> You answered  <span class="good">${rightAnswers}</span> form 10`
            
        } else if (rightAnswers === count) {
            yourResult= `<span class="perfect">Perfect : </span> You answered  <span class="perfect">${rightAnswers}</span> form 10`

        }else {
            yourResult = `<span class="bad">Bad : </span> You answered  <span class="bad">  ${ rightAnswers} </span>  form 10`
        }
        results.innerHTML = yourResult 
    }
}

function countdown(duration , count){
    if(currentIndex < count) {

        let minutes;
        let seconds;
    
        countDownIntervel = setInterval (function() {
            minutes = parseInt(duration / 60)
            seconds = parseInt(duration % 60)
            
            minutes = minutes < 10 ? `0${minutes}` : minutes; 
            seconds = seconds < 10 ? `0${seconds}` : seconds;
           
            countdownElement.innerHTML = `${minutes} : ${seconds}`
            
            if(--duration < 0){
                clearInterval(countDownIntervel)
                submit.click()
            }
        } , 1000)
    }
}