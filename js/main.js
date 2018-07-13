window.sr = ScrollReveal();
sr.reveal('.navbar', {
  duration: 2000,
  origin: 'top'
});
sr.reveal('.header', {
  duration: 2000,
  origin: 'top'
});
sr.reveal('.col-md-7', {
  duration: 2000,
  origin: 'right',
  distance: '300px'
});
sr.reveal('.col-md-5', {
  duration: 2000,
  origin: 'left',
  distance: '300px'
});
sr.reveal('.my-career', {
  duration: 2000,
  origin: 'bottom'
});
sr.reveal('#about', {
  duration: 2000,
  origin: 'bottom',
  viewFactor: 0.4
});
sr.reveal('#experience .col-md-6', {
  duration: 2000,
  origin: 'bottom',
  distance: '300px',
  viewFactor: 0.1
});
sr.reveal('#skills', {
  duration: 2000,
  origin: 'top',
  distance: '300px',
  viewFactor: 0.1
});
sr.reveal('#education', {
  duration: 2000,
  origin: 'bottom',
  distance: '300px',
  viewFactor: 0.1
});
sr.reveal('#activities', {
  duration: 2000,
  origin: 'top',
  distance: '300px',
  viewFactor: 0.1
});
sr.reveal('.col-md-2', {
  duration: 1000,
  viewFactor: 0.1,
  origin: 'bottom',
}, 500);

$(function () {
  // Smooth Scrolling
  $('a[href*="#"]:not([href="#"])').click(function () {
    if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname) {
      var target = $(this.hash);
      target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
      if (target.length) {
        $('html, body').animate({
          scrollTop: target.offset().top
        }, 1000);
        return false;
      }
    }
  });
});

function chargebattery() {
  var a;
  a = document.getElementById("div1");
  a.innerHTML = "&#xf102;";
  setTimeout(function () {
    a.innerHTML = "&#xf106;";
  }, 500);
  setTimeout(function () {
    a.innerHTML = "&#xf102;";
  }, 1000);
}
chargebattery();
setInterval(chargebattery, 1500);



   // When the user scrolls the page, execute myFunction 
   window.onscroll = function() {myFunction()};
    
   function myFunction() {
     var winScroll = document.body.scrollTop || document.documentElement.scrollTop;
     var height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
     var scrolled = (winScroll / height) * 100;
     document.getElementById("myBar").style.width = scrolled + "%";
   }
