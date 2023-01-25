var tablinks=document.getElementsByClassName('tab-links');
var tabContents=document.getElementsByClassName('tab-contents');

function openTab(tabname){
    for(let tablink of tablinks){
        tablink.classList.remove("active-link")
    }
    
    for(let tabcontent of tabContents){
        tabcontent.classList.remove("active-tab")
    }

event.currentTarget.classList.add('active-link')
document.getElementById(tabname).classList.add('active-tab')
}

// -----------------sideMenu-----------------------
    
    function   openmenu(){
        document.getElementById("sidemenu").style.right='0'
    }

    function   closemenu(){
        document.getElementById("sidemenu").style.right='-200px'
    }

    