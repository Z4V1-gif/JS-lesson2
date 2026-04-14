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
];
// aktueller Stand der Fragenreihenfolge, fängt bei 0 an
let currentQuestionIndex = 0;

document.addEventListener("DOMContentLoaded", renderQuestion);

function renderQuestion() {
  //Daten der Frage abrufen
  const currentQuestionData = questions[currentQuestionIndex];
  //Überschrift tauschen
  document.getElementById("question-text").textContent =
    currentQuestionData.question;

  // Antwortbuttons holen
  const buttons = document.querySelectorAll(".answers");

  //Button für Button durchegehen und neuen Text zuweisen
  for (let i = 0; i < buttons.length; i++) {
    //Buttontext austauschen
    buttons[i].textContent = currentQuestionData.answers[i].text;

    //corrent, incorrect Class entfernen
    buttons[i].classList.remove("correct", "incorrect");
    // Richtig oder Falsch Tag an die Buttons häften, damit JS schneller erkennt welches stimmt/falsch ist
    if (currentQuestionData.answers[i].correct === true) {
      buttons[i].dataset.correct = "true";
    } else {
      buttons[i].dataset.correct = "false";
    }
  }
}

function nextQuestion() {
  //Fragenstatus +1
  currentQuestionIndex++;
  // Prüfen ob wir am Ende des Fragenkatalogs sind oder ob es weiter gibt
  if (currentQuestionIndex < questions.length) {
    renderQuestion();
  } else {
    alert("Du hast das Quiz beendet!"); // eventueller Punktestand
  }
}

function questionCheck(angeklickterButton) {
  //   const gegebeneAntwort = angeklickterButton.textContent.trim();

  if (angeklickterButton.dataset.correct === "true") {
    alert("richtige Antwort!");
    angeklickterButton.classList.add("correct");
  } else {
    alert("leider flasch!");
    angeklickterButton.classList.add("incorrect");
  }
}
