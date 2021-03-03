"use strict";

var checkbox = document.getElementById('checkbox');
checkbox.addEventListener('change', function () {
  //change the website theme
  document.body.classList.toggle('dark');
});
var app = Vue.createApp({
  data: function data() {
    return {
      index: 0,
      selectedAnswer: '',
      correctAnswer: 0,
      wrongAnswer: 0,
      count: 4,
      questions: [{
        question: "What is Unilorin tag name?",
        answers: {
          a: "Better than far",
          b: "Better by stress",
          c: "First and bes",
          d: "Pride of Nigeria"
        },
        correctAnswer: 'a'
      }, {
        question: "Which country are you?",
        answers: {
          a: "Nigeria",
          b: "Ghana",
          c: "Canada",
          d: "Germany"
        },
        correctAnswer: 'a'
      }, {
        question: "The club that won 2020 champions league is?",
        answers: {
          a: "Liverpool",
          b: "Manchester United",
          c: "Arsenal",
          d: "Bayern Munich"
        },
        correctAnswer: 'd'
      }, {
        question: "Albert Einstein, male or female",
        answers: {
          a: "Male",
          b: "Female"
        },
        correctAnswer: 'a'
      }]
    };
  },
  methods: {
    answered: function answered(e) {
      this.selectedAnswer = e.target.value;

      if (this.selectedAnswer == this.questions[this.index]['correctAnswer']) {
        this.correctAnswer++;
      } else this.wrongAnswer++;
    },
    nextQuestion: function nextQuestion() {
      this.selectedAnswer = '';
      this.index++;
    },
    showResults: function showResults() {
      this.index++;
    },
    resetQuiz: function resetQuiz() {
      this.index = 0;
      this.selectedAnswer = '';
      this.correctAnswer = 0;
      this.wrongAnswer = 0;
    }
  }
});
app.mount('#app');