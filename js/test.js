const quizForm = document.getElementById('quiz-form');
const resultContainer = document.getElementById('result');

quizForm.addEventListener('submit', function(event) {
  event.preventDefault();

  resultContainer.innerHTML = ''

  const answers = {
    1: quizForm.q1.value,
    2: quizForm.q2.value,
    3: quizForm.q3.value,
    4: quizForm.q4.value,
    5: quizForm.q4.value
  };

  const correctAnswers = {
    1: 'c',
    2: 'b',
    3: 'c',
    4: 'c',
    5: 'b'
  };
  let score = 0;
  for (let question in answers) {
    if (answers[question] === correctAnswers[question]) {
      resultContainer.innerHTML += `<p> Question ${question}: Correct!</p>`;
      result.classList.add('correct');
      score++;
    } else {
      resultContainer.innerHTML += `<p> Question ${question}: Incorrect. The correct answer is ${correctAnswers[question].toUpperCase()}.</p>`;
      result.classList.add('incorrect');
    }
  }
  
  resultContainer.innerHTML += `<p> You answered correctly ${score} out of ${Object.keys(correctAnswers).length} questions.</p>`;
});
