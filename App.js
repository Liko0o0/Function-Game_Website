
//https://mauriciopoppe.github.io/function-plot/ pour les infos sur le module
//rajouter des niveaux
//gerer les defaites et victoires
//rajouter un menu avec tout les niveaux
//rajouter une page "regle" avec des indication sur comment ecrire cos(x) exp(x) etc ...
//ajouter differente couleurs de graphe pour les difficultées

var title = 'Trouve la fonction !';
var width = 1400;
var height = 600;
var target = '#function';
var level1 = false;
var level2 = false;
var answer = null;
var user_answer = null;
var all_levels = ["level1", "level2", "level3", "level4"]
var currentLevelIndex = 0;


function levels() {
  var currentLevel = all_levels[currentLevelIndex];

  document.querySelector(target).style.opacity = 0;
  setTimeout(function() {

  if (currentLevel === "level1"){
    answer = 'x+2'
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
    else if (currentLevel === "level4"){
      answer = 'exp(x)'
      functionPlot({
        title,
        target,
        width,
        height,
        disableZoom: true,
        xAxis: {
          label: 'x',
          domain: [-6, 10]
        },
        yAxis: {
          label: 'y',
          domain: [-5, 100]
        },
        grid: true,
        data: [
          {
            fn: 'exp(x)', color: '#228B22'
          }
        ]
      });
    }
    document.querySelector(target).style.opacity = 0.5;
  }, 200);
  }

  //Recupere la réponse
document.addEventListener("DOMContentLoaded", function() {
  var button = document.getElementById('saveButton');
  button.addEventListener('click', UserAnswer);
  var answerInput = document.getElementById('answerInput');
  answerInput.addEventListener('keyup', function(event) {
    // Vérifier si la touche pressée est "Enter"
    if (event.key === 'Enter') {
      UserAnswer();
    }
  });
});

function UserAnswer() {
  user_answer = document.getElementById('answerInput').value;
  user_answer = user_answer.replace(/\s+/g, '').trim().toLowerCase();
  result();
  document.getElementById('answerInput').value = "";
}

function result() {
  var answerInput = document.getElementById('answerInput'); // Déclaration ici
  if (user_answer == answer) {
    currentLevelIndex++;
    if (currentLevelIndex < all_levels.length) {
      answerInput.style.border = '2px solid #149414';
      setTimeout(function() {
        answerInput.style.border = '1px solid #ccc';
      }, 1000);
      levels();
    } else {
      console.log('Vous avez terminé tous les niveaux!');
    }
  } else {
    answerInput.style.border = '2px solid #ee1010';
    setTimeout(function() {
      answerInput.style.border = '1px solid #ccc';
    }, 1000);
    levels();
  }
}

levels();
