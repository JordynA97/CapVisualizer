//script to check the sliders and display image based on that

function checkVariables(){
    //variable sliders
    let varOne = document.getElementById("varOne");
    let varTwo = document.getElementById("varTwo");

    //outcome animations
    let badImg = document.getElementById("badEndingImg");
    let goodImg = document.getElementById("goodEndingImg");

    if(varOne.value >= 5){
        badImg.style.visibility = "hidden";
        goodImg.style.visibility = "visible";
    }else if(varOne.value < 5){
        badImg.style.visibility = "visible";
        goodImg.style.visibility = "hidden"
    }
}

