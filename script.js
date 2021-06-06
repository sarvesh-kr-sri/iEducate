// ------------------------------------------------------------validations----------------------------------

function validation() {
    let name = document.forms["ContactForm"]["name"];
    let email = document.forms["ContactForm"]["email"];
    let phone = document.forms["ContactForm"]["phone"];
    let messages = document.forms["ContactForm"]["message"];

    if (name.value == "") {
        window.alert("Please Enter Your Name.");
        name.focus();
        return false;
    }
    if (email.value == "") {
        window.alert("Please Enter a Valid E-mail Address.");
        email.focus();
        return false;
    }

    if (email.value.indexOf(".", 0) < 0) {
        window.alert("Please Enter a Valid E-mail Address.");
        email.focus();
        return false;
    }

    if (email.value.indexOf("@", 0) < 0) {
        window.alert("Please Enter a Valid E-mail Address.");
        email.focus();
        return false;
    }
    if (phone.value == "") {
        window.alert("Please Enter Your Mobile Number.");
        phone.focus();
        return false;
    }

    // if (isNAN(phone.value)) {
    //     window.alert("Please Enter Only Digits.");
    //     phone.focus();
    //     return false;
    // }

    if (phone.value.length != 10) {
        window.alert("Please Enter Valid Mobile Number.");
        phone.focus();
        return false;
    }

    if (messages.value == "") {
        window.alert("Please Enter The Message.");
        messages.focus();
        return false;
    }
}

// ---------------------------------------------------navbar----------------------------------------------------------

window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 80 || document.documentElement.scrollTop > 80) {
    document.getElementById("navbar").style.padding = "10px 0px";
    document.getElementById("navbar").style.transition = ".7s";
  } else {
    document.getElementById("navbar").style.padding = "3px 0px";
    document.getElementById("search").style.margin = "10px 0";
    document.getElementById("logo").style.fontSize = "25px";
  }
}

// --------------------------------------------learn more option--------------------------------------------------------------

let acc= document.getElementsByClassName("accordion");
let down= document.getElementById("down");
let up= document.getElementById("up");
let i;

for( i=0; i<acc.length; i++){
    acc[i].addEventListener("click",function(){
        var panel=this.nextElementSibling;
        if(panel.style.display==="block"){
            down.style.display="block";
            up.style.display="none";
            panel.style.display="none";
        }
        else{
            down.style.display="none";
            up.style.display="block";
            panel.style.display="block";
        }
    });
}

// -----------------------------------------------hamburger-------------------------------------------

burger=document.querySelector('.burger')
navbar=document.querySelector('.navbar')
rightnav=document.querySelector('.rightnav')
navlist=document.querySelector('.navlist')
burger.addEventListener('click',()=>{
    rightnav.classList.toggle('v-class');
    navlist.classList.toggle('v-class');
    navbar.classList.toggle('h-nav');

})