const questions = [
  {
    id: 1,
    question: "Was ist die Hauptstadt von Deutschland",
    answers: [
      { id: "a", text: "München", correct: false },

      { id: "b", text: "Berlin", correct: true },

      { id: "c", text: "Frankfurt", correct: false },

      { id: "d", text: "Kassel", correct: false },
    ],
  },
  {
    id: 2,
    question: "Was ist die Hauptstadt von Frankreich",
    answers: [
      { id: "a", text: "Lyon", correct: false },

      { id: "b", text: "Paris", correct: true },

      { id: "c", text: "Marsaille", correct: false },

      { id: "d", text: "Straßburg", correct: false },
    ],
  },
  {
    id: 3,
    question: "Was ist die Hauptstadt von Spanien",
    answers: [
      { id: "a", text: "Barcelona", correct: false },

      { id: "b", text: "Madrid", correct: true },

      { id: "c", text: "Sevilla", correct: false },

      { id: "d", text: "Palma", correct: false },
    ],
  },
  {
    id: 4,
    question: "Was ist die Hauptstadt von England",
    answers: [
      { id: "a", text: "Bristol", correct: false },

      { id: "b", text: "London", correct: true },

      { id: "c", text: "Burningham", correct: false },

      { id: "d", text: "Manchester", correct: false },
    ],
  },
];

let currentIndex = 0;
let currentCorrectAnswerId = "";

//Frage rendern

function renderQuestion() {
  document.getElementById("question-display").innerHTML = "";

  if (currentIndex >= questions.length) {
    document.getElementById("question-display").innerHTML =
      "<p> Quiz beendet! </p>";
    return;
  }

  const question = questions[currentIndex];
  currentIndex++;

  const correctAnswer = question.answers.find(
    (answer) => answer.correct === true,
  );
  currentCorrectAnswerId = correctAnswer.id;

  const wrapperDiv = document.createElement("div");
  wrapperDiv.classList.add("wrapper");

  const questionDiv = document.createElement("div");
  questionDiv.classList.add("question");

  questionDiv.appendChild(document.createTextNode(question.question));

  const questionGrid = document.createElement("div");
  questionGrid.classList.add("question-grid");
  //shuffledAnswers erstellen, [...] kopiert das Array ohne es zu zerstören
  const mixedAnswers = [...question.answers].sort(() => Math.random() - 0.5);

  //nun die forEach Schleife mit den mixedAnswers ausführen
  mixedAnswers.forEach((answer) => {
    const answersDiv = document.createElement("button");
    answersDiv.classList.add("answers");
    answersDiv.id = answer.id;
    answersDiv.appendChild(document.createTextNode(answer.text));
    questionGrid.appendChild(answersDiv);

    //mit Eventlistener beim Erstellen der buttons die richtige antwort für die Buttons merken und färben
    answersDiv.addEventListener("click", () => {
      if (answer.correct === true) {
        alert("richtig!");
        answersDiv.classList.add("correct");
      } else {
        alert("falsch!");
        answersDiv.classList.add("incorrect");

        //richtigen Button anzeigen lassen
        const rightAnswer = document.getElementById(correctAnswer.id);

        if (rightAnswer) {
          rightAnswer.classList.add("correct");
        }
      }
    });
  });

  wrapperDiv.appendChild(questionDiv);
  wrapperDiv.appendChild(questionGrid);

  document.getElementById("question-display").appendChild(wrapperDiv);
}

function solution() {
  //gemerkte ID beim Rendern als Variable speichern
  const rightButton = document.getElementById(currentCorrectAnswerId);

  //richtige Antwort Farbe geben
  if (rightButton) {
    rightButton.classList.add("correct");
  }
}
