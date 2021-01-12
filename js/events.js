var menuTabs = document.getElementsByClassName("nav-link");
var menuContents = document.getElementsByClassName("menuContent");

function changingMenuTab() {
    for (var i = 0; i < menuTabs.length; i++) {
        menuTabs[i].classList.remove("active");
        menuContents[i].classList.remove("showContent");        
    }
    var currentTab = this;    
    currentTab.classList.add("active");
    var currentMenuName = currentTab.innerHTML.toLowerCase();
    var currentMenuName = currentMenuName.replace(/ /g, '_');
    var currentMenuContent = currentMenuName + '_content';
    document.getElementById(currentMenuContent).classList.add("showContent");    
}

for (var i = 0; i < menuTabs.length; i++) {    
    menuTabs[i].addEventListener('click', changingMenuTab, false);
}