document.addEventListener("DOMContentLoaded", function () {
  const checkBtn = document.getElementById("check-btn");
  const resultDiv = document.getElementById("result");
  const letterInputs = document.querySelectorAll(".letter");

  // Csoportosítjuk az inputokat data-group alapján
  function getAnswersByGroup() {
    const groups = {};
    letterInputs.forEach(input => {
      const group = input.dataset.group;
      if (!groups[group]) groups[group] = [];
      groups[group].push(input);
    });
    return groups;
  }

  checkBtn.addEventListener("click", function () {
    const groups = getAnswersByGroup();
    let correct = 0;
    let total = Object.keys(groups).length;

    for (const [groupName, inputs] of Object.entries(groups)) {
      let allCorrect = true;
      inputs.forEach(input => {
        const userAnswer = input.value.trim().toLowerCase();
        const correctAnswer = input.dataset.answer.toLowerCase();
        if (userAnswer === correctAnswer) {
          input.style.borderColor = "green";
          input.style.backgroundColor = "#e8f5e8";
        } else {
          input.style.borderColor = "red";
          input.style.backgroundColor = "#ffe8e8";
          allCorrect = false;
        }
      });
      if (allCorrect) correct++;
    }

    resultDiv.innerHTML = `<strong>${correct}/${total} Wörter richtig!</strong>`;
    resultDiv.style.color = correct === total ? "green" : correct > total / 2 ? "orange" : "red";
  });

  // Reset stílus a gépeléskor
  letterInputs.forEach(input => {
    input.addEventListener("input", function () {
      this.style.borderColor = "#ccc";
      this.style.backgroundColor = "white";
      resultDiv.innerHTML = "";
    });

    // Automatikus focus a következő mezőre, ha van karakter
    input.addEventListener("input", function () {
      if (this.value.length === 1) {
        const next = this.parentElement.querySelector("input:not([disabled])");
        const allInputs = Array.from(this.parentElement.querySelectorAll("input"));
        const index = allInputs.indexOf(this);
        if (index < allInputs.length - 1) {
          allInputs[index + 1].focus();
        }
      }
    });
  });
});


document.addEventListener("DOMContentLoaded", function () {
  const checkBtn = document.getElementById("check-btn");
  const resultDiv = document.getElementById("result");

  // 1. Betűs típus: két betűt kell beírni (pl. d _ _ Meer)
  const letterInputs = document.querySelectorAll(".letter");

  // 2. Szó típus: egész szót kell beírni (pl. der ________)
  const wordInputs = document.querySelectorAll(".word-input");

  checkBtn.addEventListener("click", function () {
    let correct = 0;
    let total = 0;

    // === 1. Betűs mezők ellenőrzése (csoportosítva) ===
    const letterGroups = {};
    letterInputs.forEach(input => {
      const group = input.dataset.group;
      if (!letterGroups[group]) letterGroups[group] = [];
      letterGroups[group].push(input);
    });

    for (const [groupName, inputs] of Object.entries(letterGroups)) {
      total++;
      let allCorrect = true;
      inputs.forEach(input => {
        const user = input.value.trim().toLowerCase();
        const correctAnswer = input.dataset.answer.toLowerCase();
        if (user === correctAnswer) {
          input.style.borderColor = "green";
          input.style.backgroundColor = "#e8f5e8";
        } else {
          input.style.borderColor = "red";
          input.style.backgroundColor = "#ffe8e8";
          allCorrect = false;
        }
      });
      if (allCorrect) correct++;
    }

    // === 2. Szó mezők ellenőrzése ===
    wordInputs.forEach(input => {
      total++;
      const userAnswer = input.value.trim().toLowerCase();
      const correctAnswer = input.dataset.answer.toLowerCase();

      if (userAnswer === correctAnswer) {
        input.style.borderColor = "green";
        input.style.backgroundColor = "#e8f5e8";
        correct++;
      } else {
        input.style.borderColor = "red";
        input.style.backgroundColor = "#ffe8e8";
      }
    });

    // Eredmény
    resultDiv.innerHTML = `<strong>${correct}/${total} richtige Antwort!</strong>`;
    resultDiv.style.color = correct === total ? "green" : correct > total / 2 ? "orange" : "red";
  });

  // Reset stílus gépeléskor
  [...letterInputs, ...wordInputs].forEach(input => {
    input.addEventListener("input", function () {
      this.style.borderColor = "#ccc";
      this.style.backgroundColor = "white";
      resultDiv.innerHTML = "";
    });
  });

  // Automatikus focus a következő betűmezőre
  letterInputs.forEach((input, index) => {
    input.addEventListener("input", function () {
      if (this.value.length === 1 && index < letterInputs.length - 1) {
        const next = letterInputs[index + 1];
        if (next.dataset.group === this.dataset.group) {
          next.focus();
        }
      }
    });
  });
});

document.addEventListener("DOMContentLoaded", function () {
  const checkBtn = document.getElementById("check-btn");
  const resultDiv = document.getElementById("result");
  const letterInputs = document.querySelectorAll(".letter-input");

  // Összesített csoportok: minden .letter-group egy szó
  const wordGroups = document.querySelectorAll(".letter-group");

  checkBtn.addEventListener("click", function () {
    let correctWords = 0;
    let totalWords = wordGroups.length;

    wordGroups.forEach(group => {
      const inputs = group.querySelectorAll(".letter-input");
      let wordCorrect = true;

      inputs.forEach(input => {
        const userValue = input.value.trim().toLowerCase();
        const correctAnswer = input.dataset.answer.toLowerCase();

        if (userValue === correctAnswer) {
          input.classList.add("correct");
          input.classList.remove("incorrect");
        } else {
          input.classList.add("incorrect");
          input.classList.remove("correct");
          wordCorrect = false;
        }
      });

      if (wordCorrect) correctWords++;
    });

    resultDiv.innerHTML = `<strong>${correctWords}/${totalWords} Wort ist absolut richtig!</strong>`;
    resultDiv.style.color = correctWords === totalWords ? "green" :
                            correctWords > totalWords / 2 ? "orange" : "red";
  });

  // Automatikus focus a következő mezőre
  letterInputs.forEach((input, index) => {
    input.addEventListener("input", function () {
      if (this.value.length === 1 && index < letterInputs.length - 1) {
        const next = letterInputs[index + 1];
        next.focus();
      }
    });

    // Vissza a megelőző mezőbe Delete/Backspace
    input.addEventListener("keydown", function (e) {
      if (e.key === "Backspace" && this.value === "" && index > 0) {
        letterInputs[index - 1].focus();
      }
    });
  });

  // Reset stílus gépeléskor
  letterInputs.forEach(input => {
    input.addEventListener("input", function () {
      this.classList.remove("correct", "incorrect");
      resultDiv.innerHTML = "";
    });
  });
});