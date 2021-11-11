$(document).ready(function () {
    //your code here
    console.log("hello")

    $('.about-me').hover(
      function(){ $("body").addClass('change-about') },
      function(){ $("body").removeClass('change-about')}
    )

    $('.experience').hover(
      function(){ $("body").addClass('change-experience') },
      function(){ $("body").removeClass('change-experience')}
    )

    let i = 0;
    const txt = "Hi, I'm Dimitris";
    const speed = 50;

    function typeWriter() {
      if (i < txt.length) {
        document.getElementById("greeting").innerHTML += txt.charAt(i);
        i++;
        setTimeout(typeWriter, speed);
      }
    }

    typeWriter();

  });