var deButton = document.querySelector("#hamburger");
var hetFormulier = document.querySelector("#dezedus");
var kruis = document.querySelector("#deandere");

function doeFormHeenEnWeer(){
	hetFormulier.classList.toggle("menu");
}

deButton.addEventListener("click", doeFormHeenEnWeer);
kruis.addEventListener("click", doeFormHeenEnWeer) ;





var javragen = document.querySelector("#javragen");
var vragen = document.querySelector("#vraag");
var vraagbutton = document.querySelector("#vraagbutton")


function laatvragenzien(){
    vragen.classList.toggle("vragen");
    vraagbutton.classList.toggle("vragen");
}

javragen.addEventListener("click", laatvragenzien);





var klanten = document.querySelector("#klanten")
var klantenzien = document.querySelector("#klantenzien")

function laatklantenzien(){
    klantenzien.classList.toggle("klant");
}

klanten.addEventListener("click", laatklantenzien);




var overreef = document.querySelector("#overreef");
var reef = document.querySelector("#reef");

function laatreefzien(){
    reef.classList.toggle("geenreef");
}

overreef.addEventListener("click", laatreefzien);

















/*jslint browser: true, devel: true, eqeq: true, plusplus: true, sloppy: true, vars: true, white: true*/
/*eslint-env browser*/
/*eslint 'no-console':0*/





var slippers = ['slipper1.jpg', 'slipper2.jpg', 'slipper3.jpeg', 'slipper4.jpg'];




var volgendeKnop = document.querySelector('.vooruit');
var terugKnop = document.querySelector('.terug');
var paginanummer = 1;


var huidigSlipper = document.querySelector('.vlag');




function volgendeSlipper() {
    paginanummer = paginanummer + 1;
    if (paginanummer > 4) {
        paginanummer = 1;
    }
    huidigSlipper.src = 'img/slippers/' + slippers[paginanummer - 1];
    
}

function terugSlipper() {
    paginanummer = paginanummer - 1;
    if (paginanummer < 1) {
        paginanummer = 4;
    }
    huidigSlipper.src = 'img/slippers/' + slippers[paginanummer - 1];
   
   
}

volgendeKnop.addEventListener('click', volgendeSlipper);
terugKnop.addEventListener('click', terugSlipper);









