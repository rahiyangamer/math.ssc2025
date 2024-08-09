const quiz = [
    { question: "1. ধারা 2, 4, 6, 8 এর ১০ম পদ কি?", options: ["10", "20", "18", "16"], answer: 1 },
    { question: "2. বৃত্তের ব্যাসার্ধ যদি ৫ মিটার হয়, তবে এর ক্ষেত্রফল কত?", options: ["25π", "20π", "5π", "50π"], answer: 0 },
    { question: "3. 2x + 3 = 7 হলে, x এর মান কত?", options: ["1", "2", "3", "4"], answer: 1 },
    { question: "4. √49 এর মান কত?", options: ["5", "6", "7", "8"], answer: 2 },
    { question: "5. 10-এর 30% কত?", options: ["3", "7", "10", "4"], answer: 0 },
    { question: "6. একটি বৃত্তের ব্যাস 14 মিটার হলে, এর পরিধি কত?", options: ["44 মিটার", "28 মিটার", "22 মিটার", "36 মিটার"], answer: 0 },
    { question: "7. 3 এবং 5-এর গুণফল কত?", options: ["15", "10", "8", "20"], answer: 0 },
    { question: "8. 2/5 + 3/5 = ?", options: ["1", "5/5", "4/5", "2"], answer: 2 },
    { question: "9. একটি আয়তক্ষেত্রের দৈর্ঘ্য 10 মিটার এবং প্রস্থ 5 মিটার হলে, ক্ষেত্রফল কত?", options: ["15 বর্গমিটার", "50 বর্গমিটার", "100 বর্গমিটার", "25 বর্গমিটার"], answer: 1 },
    { question: "10. 15x = 75 হলে, x এর মান কত?", options: ["5", "3", "4", "6"], answer: 1 },
    { question: "11. যদি একটি সংখ্যা ৩ দ্বারা বিভাজ্য হয়, তবে তা কত?", options: ["1", "5", "9", "6"], answer: 3 },
    { question: "12. 8-এর 25% কত?", options: ["2", "4", "1", "6"], answer: 0 },
    { question: "13. 36-এর বর্গমূল কত?", options: ["6", "12", "18", "9"], answer: 0 },
    { question: "14. একটি ত্রিভুজের ৩টি কোণ যোগফল কত?", options: ["90°", "180°", "360°", "120°"], answer: 1 },
    { question: "15. ধারা 3, 6, 9, 12-এর সাধারণ পার্থক্য কত?", options: ["2", "3", "4", "6"], answer: 1 },
    { question: "16. x^2 = 64 হলে, x এর মান কত?", options: ["8", "6", "7", "4"], answer: 0 },
    { question: "17. 1/2 এর শতকরা কত ভাগ?", options: ["25%", "50%", "75%", "100%"], answer: 1 },
    { question: "18. একটি বৃত্তের ব্যাস 14 সেমি হলে, এর ব্যাসার্ধ কত?", options: ["7 সেমি", "14 সেমি", "28 সেমি", "10 সেমি"], answer: 0 },
    { question: "19. 7 × 8 = ?", options: ["42", "48", "56", "64"], answer: 2 },
    { question: "20. একত্রিত সংখ্যা 16 এর বর্গমূল কত?", options: ["2", "4", "8", "6"], answer: 1 },
    { question: "21. 45 এর 20% কত?", options: ["9", "10", "11", "12"], answer: 0 },
    { question: "22. 1 লিটার = কত মিলিলিটার?", options: ["100 মিলিলিটার", "500 মিলিলিটার", "1000 মিলিলিটার", "1500 মিলিলিটার"], answer: 2 },
    { question: "23. সমান্তর ধারার প্রথম এবং শেষ পদ যদি 5 এবং 20 হয়, তবে ধারাটির পদ সংখ্যা কত?", options: ["5", "10", "15", "8"], answer: 3 },
    { question: "24. 4x = 28 হলে, x এর মান কত?", options: ["5", "6", "7", "8"], answer: 2 },
    { question: "25. একটি বৃত্তের পরিধি যদি 44 মিটার হয়, তবে এর ব্যাসার্ধ কত?", options: ["7 মিটার", "14 মিটার", "21 মিটার", "28 মিটার"], answer: 0 },
    { question: "26. একটি ত্রিভুজের ২টি বাহু 5 মিটার এবং 12 মিটার হলে, তৃতীয় বাহু কত?", options: ["5 মিটার", "13 মিটার", "12 মিটার", "15 মিটার"], answer: 1 },
    { question: "27. যদি কোনো ত্রিভুজের ২টি কোণ 45° এবং 60° হয়, তবে তৃতীয় কোণ কত?", options: ["75°", "60°", "45°", "30°"], answer: 0 },
    { question: "28. একটি রেকটাঙ্গেল এর পরিধি 36 মিটার হলে, এবং এক পাশ 10 মিটার হলে অন্য পাশের দৈর্ঘ্য কত?", options: ["8 মিটার", "6 মিটার", "10 মিটার", "16 মিটার"], answer: 1 },
    { question: "29. একটি সংখ্যা ৭ দ্বারা ভাগ করলে ৩ বাকী থাকে। যদি সংখ্যাটি ৫০০ হয় তবে বিভাজক কত?", options: ["73", "7", "30", "5"], answer: 1 },
    { question: "30. 9 + 15 × (3 - 2) = ?", options: ["24", "27", "18", "12"], answer: 1 },
];

let currentQuestionIndex = 0;
let correctAnswers = 0;
let selectedAnswers = [];
let wrongAnswers = [];

function loadQuestion(index) {
    const quizContainer = document.getElementById('quiz');
    const questionData = quiz[index];
    
    const questionHtml = `
        <h3>${questionData.question}</h3>
        ${questionData.options.map((option, i) => {
            const isSelected = selectedAnswers[index] === i;
            
            return `
                <label>
                    <input type="radio" name="option" value="${i}" ${isSelected ? 'checked' : ''}>
                    ${option}
                </label>
            `;
        }).join('')}
    `;
    
    quizContainer.innerHTML = questionHtml;
}

function checkAnswer() {
    const selectedOption = document.querySelector('input[name="option"]:checked');
    
    if (selectedOption) {
        const answer = parseInt(selectedOption.value);
        const correctAnswer = quiz[currentQuestionIndex].answer;
        
        selectedAnswers[currentQuestionIndex] = answer; // Store selected answer
        
        if (answer === correctAnswer) {
            correctAnswers++;
        } else {
            wrongAnswers.push(currentQuestionIndex + 1); // Store the question number where the answer is wrong
        }
        
        highlightAnswers();
        
        if (currentQuestionIndex < quiz.length - 1) {
            setTimeout(() => {
                currentQuestionIndex++;
                loadQuestion(currentQuestionIndex);
            }, 1000);
        } else {
            showFinalResult();
        }
    } else {
        alert('Please select an option!');
    }
}

function highlightAnswers() {
    const labels = document.querySelectorAll('label');
    const correctAnswer = quiz[currentQuestionIndex].answer;

    labels.forEach((label, index) => {
        if (index === correctAnswer) {
            label.classList.add('correct');
        } else if (selectedAnswers[currentQuestionIndex] === index) {
            label.classList.add('incorrect');
        }
    });
}

function goBack() {
    if (currentQuestionIndex > 0) {
        currentQuestionIndex--;
        loadQuestion(currentQuestionIndex);
        highlightAnswers();
        document.getElementById('result').innerHTML = '';
    } else {
        alert('This is the first question.');
    }
}

function showFinalResult() {
    const resultContainer = document.getElementById('result');
    const nextQuizBtn = document.getElementById('next-quiz-btn');

    if (correctAnswers === quiz.length) {
        resultContainer.innerHTML = `
            Congratulations 🎉
            <br>সঠিক উত্তরের সংখ্যা: ${correctAnswers}
        `;
        nextQuizBtn.style.display = 'block';
    } else {
        resultContainer.innerHTML = `
            😓 তুমি সব সঠিক উত্তর দিতে পারো নাই তাই আবার চেষ্টা করো
            <br>ভুল উত্তরগুলোর সংখ্যা: ${wrongAnswers.length}
            <br>ভুল উত্তরগুলি: ${wrongAnswers.join(', ')}
        `;
        nextQuizBtn.style.display = 'none';
    }
}

// Initial load
loadQuestion(currentQuestionIndex);