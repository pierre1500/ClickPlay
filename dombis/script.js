const robot = document.getElementById('robot');
const terrain = document.getElementById('terrain');
const score = document.querySelector('h1');

/* Gestion du clavier */
window.addEventListener('click', clicFenetre);

const vitesse = 1;
let compteur = 0;
let mtop = 0;
let mleft = 0;

let offsetTop = 1;
let offsetLeft = 1;

let taille = 50;

deplaceRobot();

function largeurMax() {
    let styleTerrain = window.getComputedStyle(terrain);
    let largeur = parseInt(styleTerrain.width, 10);
    return largeur - taille;
}

function hauteurMax() {
    let styleTerrain = window.getComputedStyle(terrain);
    let hauteur = parseInt(styleTerrain.height, 10);
    return hauteur - taille;
}

function deplaceRobot() {
    robot.style.left = mleft + 'px';
    robot.style.top = mtop + 'px';
    robot.title = "Top: "+mtop+"px Left: "+mleft+'px';
}


function clicFenetre(event) {
    let clicLeft = event.clientX;
    let clicTop = event.clientY;
    if ( (clicLeft >= mleft) && (clicLeft < mleft + 50) &&
         (clicTop >= mtop) && (clicTop < mtop + 50) ) {
            compteur += 1;
            score.textContent = compteur;

            if (compteur % 10 == 0) {
                taille -= 10;
                robot.style.width = taille+'px';
                robot.style.height = taille+'px';
            }
         }
}

function bougerRobot() {
    let newTop = mtop + offsetTop;
    let maxTop = hauteurMax();
    if ( (newTop > maxTop) || (newTop < 0) ) {
        offsetTop = - offsetTop;
    }
    mtop = newTop;

    let newLeft = mleft + offsetLeft;
    let maxLeft = largeurMax();
    if ( (newLeft > maxLeft) || (newLeft < 0) ) {
        offsetLeft = - offsetLeft;
    }
    mleft = newLeft;
    deplaceRobot();

    setTimeout(bougerRobot, vitesse);
}

setTimeout(bougerRobot, vitesse);