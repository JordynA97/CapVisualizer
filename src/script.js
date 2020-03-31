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

//NEXT:
//when you input algorithm, just change the html.style.background to the correct image given. 

