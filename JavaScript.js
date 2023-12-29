const title = 'Trouve la fonction !';
const target = '#function';
const width = window.innerWidth * 0.66; 
const height = window.innerHeight * 0.66;
const all_levels = ["level1", "level2", "level3", "level4", "level5", "level6", "level7", "level8", "level9", "level10", "level11", "level12", "level13", "level14", "level15"]
var answer = null;
var answer_bis = null;
var user_answer = null;
var currentLevelIndex = null;
var niveauActuel = null;
const levelMenu = document.getElementById('level-menu');
const levelBoxes = levelMenu.getElementsByClassName('level-box');

function sauvegarderNiveauActuel(niveau) {
  localStorage.setItem("niveau", niveau);
}

function chargerNiveauSauvegarde() {
  return localStorage.getItem("niveau");
}


niveauActuel = chargerNiveauSauvegarde();

if (niveauActuel != null) {
  currentLevelIndex = niveauActuel;
}
else {
  currentLevelIndex = 0
}

document.addEventListener('DOMContentLoaded', function () {
  const levelMenu = document.getElementById('level-menu');
  const totalLevels = all_levels.length;

  for (let i = 0; i <= totalLevels; i++) {
    const levelBox = document.createElement('div');
    levelBox.classList.add('level-box');
  
    if (i <= currentLevelIndex) {
      levelBox.classList.add('completed');
      levelBox.addEventListener('click', function () {
        currentLevelIndex = i;
        levels();
      });
    } 
    else {
      levelBox.classList.add('locked');
    }
    if (i === 15) {
      levelBox.textContent = "GG";
    }
    else{
      levelBox.textContent = i + 1;
    }
    levelMenu.appendChild(levelBox);
  }
  levels();
});

function levels() {
  
  var currentLevel = all_levels[currentLevelIndex];
  answer = null;
  answer_bis = null;

  for (let i = 0; i < levelBoxes.length; i++) {
    levelBoxes[i].classList.remove('current');
  }
  levelBoxes[currentLevelIndex].classList.remove('locked');
  levelBoxes[currentLevelIndex].classList.add('completed');
  levelBoxes[currentLevelIndex].classList.add('current');

  if (currentLevel === "level1"){
    answer = 'x+2'
    answer_bis = '2+x'
    functionPlot({
      title,
      target,
      width,
      height,
      disableZoom: true,
      xAxis: {
        label: 'x',
        domain: [-10, 10]
      },
      yAxis: {
        label: 'y',
        domain: [-10, 10]
      },
      grid: true,
      data: [
        {
          fn: 'x+2', color: '#228B22'
        }
      ]
    });
    }
  else if (currentLevel === "level2"){
    answer = 'x^2'
    functionPlot({
      title,
      target,
      width,
      height,
      disableZoom: true,
      xAxis: {
        label: 'x',
        domain: [-12, 12]
      },
      yAxis: {
        label: 'y',
        domain: [-2, 20]
      },
      grid: true,
      data: [
        {
          fn: 'x^2', color: '#228B22'
        }
      ]
    });
    }
    else if (currentLevel === "level3"){
      answer = 'sqrt(x)'
      functionPlot({
        title,
        target,
        width,
        height,
        disableZoom: true,
        xAxis: {
          label: 'x',
          domain: [-1, 30]
        },
        yAxis: {
          label: 'y',
          domain: [-1, 7]
        },
        grid: true,
        data: [
          {
            fn: 'sqrt(x)', color: '#228B22'
          }
        ]
      });
    }
    else if (currentLevel === "level4"){
      answer = '1/x'
      functionPlot({
        title,
        target,
        width,
        height,
        disableZoom: true,
        xAxis: {
          label: 'x',
          domain: [-10, 10]
        },
        yAxis: {
          label: 'y',
          domain: [-10, 10]
        },
        grid: true,
        data: [
          {
            fn: '1/x', color: '#228B22'
          }
        ]
      });
    }
    else if (currentLevel === "level5"){
      answer = 'cos(x)'
      functionPlot({
        title,
        target,
        width,
        height,
        disableZoom: true,
        xAxis: {
          label: 'x',
          domain: [-10, 10]
        },
        yAxis: {
          label: 'y',
          domain: [-2, 2]
        },
        grid: true,
        data: [
          {
            fn: 'cos(x)', color: '#228B22'
          }
        ]
      });
    }
    else if (currentLevel === "level6"){
      answer = 'exp(x)'
      functionPlot({
        title,
        target,
        width,
        height,
        disableZoom: true,
        xAxis: {
          label: 'x',
          domain: [-5, 10]
        },
        yAxis: {
          label: 'y',
          domain: [-2, 100]
        },
        grid: true,
        data: [
          {
            fn: 'exp(x)', color: '#ff8c00'
          }
        ]
      });
    }
    else if (currentLevel === "level7"){
      answer = 'ln(x)'
      functionPlot({
        title,
        target,
        width,
        height,
        disableZoom: true,
        xAxis: {
          label: 'x',
          domain: [-1, 5]
        },
        yAxis: {
          label: 'y',
          domain: [-5, 5]
        },
        grid: true,
        data: [
          {
            fn: 'ln(x)', color: '#ff8c00'
          }
        ]
      });
    }
    else if (currentLevel === "level8"){
      answer = 'tan(x)'
      functionPlot({
        title,
        target,
        width,
        height,
        disableZoom: true,
        xAxis: {
          label: 'x',
          domain: [-10, 10]
        },
        yAxis: {
          label: 'y',
          domain: [-10, 10]
        },
        grid: true,
        data: [
          {
            fn: 'tan(x)', color: '#ff8c00'
          }
        ]
      });
    }
    else if (currentLevel === "level9"){
      answer = 'abs(x)'
      functionPlot({
        title,
        target,
        width,
        height,
        disableZoom: true,
        xAxis: {
          label: 'x',
          domain: [-30, 30]
        },
        yAxis: {
          label: 'y',
          domain: [-2, 20]
        },
        grid: true,
        data: [
          {
            fn: 'abs(x)', color: '#ff8c00'
          }
        ]
      });
    }
    else if (currentLevel === "level10"){
      answer = '1/x^2'
      functionPlot({
        title,
        target,
        width,
        height,
        disableZoom: true,
        xAxis: {
          label: 'x',
          domain: [-5, 5]
        },
        yAxis: {
          label: 'y',
          domain: [-2, 30]
        },
        grid: true,
        data: [
          {
            fn: '1/x^2', color: '#ff8c00'
          }
        ]
      });
    }
    else if (currentLevel === "level11"){
      answer = 'abs(sin(x))'
      functionPlot({
        title,
        target,
        width,
        height,
        disableZoom: true,
        xAxis: {
          label: 'x',
          domain: [-20, 20]
        },
        yAxis: {
          label: 'y',
          domain: [-4, 4]
        },
        grid: true,
        data: [
          {
            fn: 'abs(sin(x))', color: '#de2916'
          }
        ]
      });
    }
    else if (currentLevel === "level12"){
      answer = 'cos(x)+exp(x)'
      answer_bis = 'exp(x)+cos(x)'
      functionPlot({
        title,
        target,
        width,
        height,
        disableZoom: true,
        xAxis: {
          label: 'x',
          domain: [-60, 10]
        },
        yAxis: {
          label: 'y',
          domain: [-2, 20]
        },
        grid: true,
        data: [
          {
            fn: 'cos(x) + exp(x)', color: '#de2916'
          }
        ]
      });
    }
    else if (currentLevel === "level13"){
      answer = 'x*sin(x)'
      answer_bis = 'sin(x)*x'
      functionPlot({
        title,
        target,
        width,
        height,
        disableZoom: true,
        xAxis: {
          label: 'x',
          domain: [-50, 50]
        },
        yAxis: {
          label: 'y',
          domain: [-50, 50]
        },
        grid: true,
        data: [
          {
            fn: 'x*sin(x)', color: '#de2916'
          }
        ]
      });
    }
    else if (currentLevel === "level14"){
      answer = 'abs(tan(x))'
      functionPlot({
        title,
        target,
        width,
        height,
        disableZoom: true,
        xAxis: {
          label: 'x',
          domain: [-50, 50]
        },
        yAxis: {
          label: 'y',
          domain: [-5, 50]
        },
        grid: true,
        data: [
          {
            fn: 'abs(tan(x))', color: '#de2916'
          }
        ]
      });
    }
    else if (currentLevel === "level15"){
      answer = 'sin(x^2)+tan(x)'
      answer_bis = 'tan(x)+sin(x^2)'
      functionPlot({
        title,
        target,
        width,
        height,
        disableZoom: true,
        xAxis: {
          label: 'x',
          domain: [-25, 25]
        },
        yAxis: {
          label: 'y',
          domain: [-20, 20]
        },
        grid: true,
        data: [
          {
            fn: 'sin(x^2)+tan(x)', color: '#880085'
          }
        ]
      });
    }
    else { functionPlot({
      title: 'Bien joué !',
      target,
      width,
      height,
      disableZoom: true,
      grid: false,
      xAxis: {
        label: 'GG',
        domain: [-1.5, 1.5]
      },
      yAxis: {
        domain: [2.5, 3.6]
      },
      data: [
        { fn: '0.15 * x^2 + 2.75', color: 'black', range: [-1, 1] },
        { fn: 'sqrt(0.02 - (x + 0.5)^2) + 3.3', color: 'black', range: [-1, 0] },
        { fn: 'sqrt(0.02 - (x - 0.5)^2) + 3.3', color: 'black', range: [0, 1] },
      ]
    });
  }
    document.querySelector(target).style.opacity = 1;
  
  }

  document.addEventListener("DOMContentLoaded", function() {

  var button = document.getElementById('saveButton');
  button.addEventListener('click', UserAnswer);

  var answerInput = document.getElementById('answerInput');
  answerInput.addEventListener('keyup', function(event) {

    if (event.key === 'Enter') {
      UserAnswer();

    }
  });
});


function UserAnswer() {

  user_answer = document.getElementById('answerInput').value;
  user_answer = user_answer.replace(/\s+/g, '').trim().toLowerCase();

  result();
  setTimeout(function() {

    document.getElementById('answerInput').value = "";

  }, 2000);
}


function result() {

  var answerInput = document.getElementById('answerInput');
  var answerInputLabel = document.getElementById('answerInputLabel');

  if (user_answer == answer || user_answer == answer_bis) {

    currentLevelIndex++;
    sauvegarderNiveauActuel(currentLevelIndex);

    if (currentLevelIndex < all_levels.length) {

      answerInput.disabled = true
      answerInputLabel.innerText = "Bonne réponse";
      answerInputLabel.style.color= "#149414";
      answerInput.style.color= "#149414";
      answerInput.style.border = '5px solid #149414';
      saveButton.style.visibility = 'hidden'

      setTimeout(function() {
        var currentLevel = currentLevelIndex
        levelBoxes[currentLevelIndex].addEventListener('click', function () {
          currentLevelIndex = currentLevel;
          levels();
        });
        levelBoxes[currentLevelIndex].classList.remove('current');
        levelBoxes[currentLevelIndex].classList.add('completed');   
        answerInput.disabled = false
        answerInputLabel.innerText = "";
        answerInput.style.color= "#595959";
        answerInput.style.border = '3px solid #ffd500';
        saveButton.style.visibility = 'visible'
      }, 2000);

      setTimeout(function() {

        levels();

      }, 2200);

    } else {

      answer.disabled = true
      answerInputLabel.innerText = "Bonne réponse";
      answerInputLabel.style.color= "#149414";
      answerInput.style.color= "#149414";
      answerInput.style.border = '5px solid #149414';
      saveButton.style.visibility = 'hidden'

      setTimeout(function() {
        var currentLevel = currentLevelIndex
        levelBoxes[currentLevelIndex].addEventListener('click', function () {
          currentLevelIndex = currentLevel;
          levels();
        });
        levelBoxes[currentLevelIndex].classList.remove('current');
        levelBoxes[currentLevelIndex].classList.add('completed');  
        answerInputLabel.innerText = "";
        answerInput.style.color= "#595959";
        answerInput.style.border = '3px solid #ffd500';
        document.getElementById('answer').style.display = 'none';
        functionPlot({
          title: 'Bien joué !',
          target,
          width,
          height,
          disableZoom: true,
          grid: false,
          xAxis: {
            label: 'GG',
            domain: [-1.5, 1.5]
          },
          yAxis: {
            domain: [2.5, 3.6]
          },
          data: [
            { fn: '0.15 * x^2 + 2.75', color: 'black', range: [-1, 1] },
            { fn: 'sqrt(0.02 - (x + 0.5)^2) + 3.3', color: 'black', range: [-1, 0] },
            { fn: 'sqrt(0.02 - (x - 0.5)^2) + 3.3', color: 'black', range: [0, 1] },
          ]
        });
      }, 2000);
    }

  } else {

    answerInput.disabled = true
    answerInputLabel.innerText = "Mauvaise réponse";
    answerInputLabel.style.color= "#ee1010";
    answerInput.style.color= "#ee1010";
    answerInput.style.border = '5px solid #ee1010';
    saveButton.style.visibility = 'hidden'

    setTimeout(function() {

      answerInput.disabled = false
      answerInputLabel.innerText = "";
      answerInput.style.color= "#595959";
      answerInput.style.border = '3px solid #ffd500';
      saveButton.style.visibility = 'visible'

    }, 2000);
  }

}
