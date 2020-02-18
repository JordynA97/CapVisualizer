//script to check the sliders and display image based on that

function checkVariables(){
    //variable sliders
    let populationSlider = document.getElementById("population");

    //outcome animations
    let badImg = document.getElementById("badEndingImg");
    let goodImg = document.getElementById("goodEndingImg");

    if(populationSlider.value >= 5){
        badImg.style.visibility = "hidden";
        goodImg.style.visibility = "visible";
        
    }else if(populationSlider.value <= 5){
        badImg.style.visibility = "visible";
        goodImg.style.visibility = "hidden"
    }

}

