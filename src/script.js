var sidePanel = document.getElementById("mySidepanel");
var sidePanelRight = document.getElementById("mySidepanelRight");

//button function for left panel
function openNav() {
  if(sidePanel.style.width == "35%"){
    closeNav();
  }else{
  sidePanel.style.width = "35%";
  sidePanel.style.height = "100%";
  }
}

function closeNav() {
  sidePanel.style.width = "0";
  sidePanel.style.height = "0";
}

//seperate button function for right panel
//possibly add second tab to be clicked later on
function openNavRight() {
  if(sidePanelRight.style.width =="35%"){
    closeNavRight();
  }else{
    sidePanelRight.style.width = "35%";
    sidePanelRight.style.height = "100%";
  }
}

function closeNavRight() {
  sidePanelRight.style.width = "0";
  sidePanelRight.style.height = "0";
}


function corpsChange(e) {
  document.querySelector("#corpsSlider").style.background = 'linear-gradient(to right, #2EFFCD 0%, #2EFFCD ' + e + '%, #414C53 ' + e + '%, #414C53 100%)'
};

function deforestChange(e) {
  document.querySelector("#deforestSlider").style.background = 'linear-gradient(to right, #2EFFCD 0%, #2EFFCD ' + e + '%, #414C53 ' + e + '%, #414C53 100%)'
};

function carbonCapChange(e) {
  document.querySelector("#carbonCapSlider").style.background = 'linear-gradient(to right, #2EFFCD 0%, #2EFFCD ' + e + '%, #414C53 ' + e + '%, #414C53 100%)'
};

function renewChange(e) {
  document.querySelector("#renewSlider").style.background = 'linear-gradient(to right, #2EFFCD 0%, #2EFFCD ' + e + '%, #414C53 ' + e + '%, #414C53 100%)'
};

function populationChange(e) {
  document.querySelector("#populationSlider").style.background = 'linear-gradient(to right, #2EFFCD 0%, #2EFFCD ' + e + '%, #414C53 ' + e + '%, #414C53 100%)'
};

function transportChange(e) {
  document.querySelector("#transportSlider").style.background = 'linear-gradient(to right, #2EFFCD 0%, #2EFFCD ' + e + '%, #414C53 ' + e + '%, #414C53 100%)'
};
//NEXT:
//when you input algorithm, just change the html.style.background to the correct image given. 

