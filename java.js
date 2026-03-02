function Judo() {

    document.getElementById("description-text").innerHTML =
        "Le judo a été un projet majeur de mon parcours pendant plus de huit ans. Grâce à un travail régulier et une forte discipline, j’ai obtenu la ceinture noire et participé au championnat de France. Cette expérience m’a appris la rigueur, la gestion du stress et le dépassement de soi. <br> <br> Aujourd’hui, j’ai choisi d’arrêter la compétition afin de me concentrer pleinement sur mes études, mais les valeurs et les compétences acquises grâce au judo continuent de m’accompagner au quotidien.";


    document.getElementById("Image_vidéo").innerHTML = `
        <video width="600" controls>
            <source src="judo.mp4" type="video/mp4">
            
        </video>
    `;
}


function Robot() {

    document.getElementById("description-text").innerHTML =
        "Le projet Robot a été réalisé dans le cadre d’un travail scolaire mêlant conception, programmation et travail en équipe.<br><br> Nous avons dû imaginer, construire et programmer un robot capable d’effectuer un parcour de manière autonome, ce qui demandait logique, organisation et rigueur technique.<br><br> Ce projet m’a permis de développer mes compétences en programmation, en résolution de problèmes et en collaboration, tout en découvrant concrètement comment passer d’une idée à une réalisation fonctionnelle en prenant en compte le cahier des charges.";


    document.getElementById("Image_vidéo").innerHTML = 
        `
        <video width="600" controls>
            <source src="robot.mp4" type="video/mp4">
            
        </video>
        `
    ;
}

function afficherObjectif() {
    document.getElementById("objectif").innerHTML =
    "Mon objectif est de devenir expert en cybersécurité, spécialisé en tests d’intrusion (pentesting), afin de protéger les systèmes informatiques contre les cyberattaques.";
}


function reseau_insta(){

    document.getElementById("image-insta").src = "Compte insta.png";
}

function reseau_insta2(){

    document.getElementById("image-insta").src = "logo insta.png";
}


function reseau_x(){

    document.getElementById("image-x").src = "Compte X.png";
}

function reseau_x2(){

    document.getElementById("image-x").src = "logo X.png";
}