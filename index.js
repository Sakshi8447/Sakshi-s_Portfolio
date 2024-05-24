let educational = document.querySelector (".education");
let skills = document.querySelector (".skiee");
let aboutMe = document.querySelector (".about");
let projectMy = document.querySelector (".trend1");
let card = document.getElementById ("project2");
let card2 = document.getElementById ("project3")

let contactMe = document.querySelector (".contact");
let mainPage = document.querySelector(".main");


function homes(){
    mainPage.style.display="flex";
    aboutMe.style.display="block";
    educational.style.display="block";
    card.style.display="block";
    card2.style.display="block";
    skills.style.display="block";
    projectMy.style.display="block";
    contactMe.style.display="block";

   
document.getElementById("home").style.color="#11a372";
document.getElementById("Education").style.color="white";
document.getElementById("Project").style.color="white";
document.getElementById("About").style.color="white";
document.getElementById("Contact").style.color="white";

}

function educations(){
    mainPage.style.display="none";
    aboutMe.style.display="none";
    educational.style.display="block";
    skills.style.display="block";
    card.style.display="none";
    card2.style.display="none";

    projectMy.style.display="none";
    contactMe.style.display="none";

document.getElementById("home").style.color="white";
document.getElementById("Education").style.color="#11a372";
document.getElementById("Project").style.color="white";
document.getElementById("About").style.color="white";
document.getElementById("Contact").style.color="white";


}


function abouts(){
    mainPage.style.display="none";
    aboutMe.style.display="block";
    educational.style.display="none";
    skills.style.display="none";
    card.style.display="none";
    card2.style.display="none";


    projectmy.style.display="none";
    contactMe.style.display="none";

document.getElementById("home").style.color="white";
document.getElementById("Education").style.color="white";
document.getElementById("Project").style.color="white";
document.getElementById("About").style.color="#11a372";
document.getElementById("Contact").style.color="white";

}


function projects(){
    mainPage.style.display="none";
    aboutMe.style.display="none";
    educational.style.display="none";
    skills.style.display="none";
    card.style.display="block";
    card2.style.display="block";


    projectMy.style.display="block";
    contactMe.style.display="none";


    document.getElementById("home").style.color="white";
    document.getElementById("Education").style.color="white";
    document.getElementById("Project").style.color="#11a372";
    document.getElementById("About").style.color="white";
    document.getElementById("Contact").style.color="white";
    
}


function contacts(){
    mainPage.style.display="none";
    aboutMe.style.display="none";
    educational.style.display="none";
    skills.style.display="none";
    card.style.display="none";
    card2.style.display="none";


    projectMy.style.display="none";
    contactMe.style.display="block";

document.getElementById("home").style.color="white";
document.getElementById("Education").style.color="white";
document.getElementById("Project").style.color="white";
document.getElementById("About").style.color="white";
document.getElementById("Contact").style.color="#11a372";


}
