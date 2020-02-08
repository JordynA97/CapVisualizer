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

    //values can be linked together
    //varTwo.value = varOne.value;

    //this lets one slider change the steps of 
    // if(varOne.value > 5){
    //    varTwo.step = 5;
    // }

    //if value is 5, other sliders max is changed.
    // if(varOne.value == 5){
    //    varTwo.max = 5;
    // }

    //if slider is 0, disable the other slider.
    // if(varOne.value == 0){
    //     varTwo.disabled = true;
    // }

    //https://bashooka.com/coding/25-amazing-css-range-slider-designs/

    //can possibly lock at value and disable and tell user it cant change unless sliders moved

    //moves sliders to specific spot based on other sliders value
    //https://jsfiddle.net/fe7j3ohv/28/
}

