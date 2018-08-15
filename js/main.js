window.sr = ScrollReveal();
sr.reveal('.navbar', {
  duration: 1500,
  origin: 'top'
});
sr.reveal('.header', {
  duration: 1500,
  origin: 'top'
});
sr.reveal('.col-md-7', {
  duration: 1500,
  origin: 'right',
  distance: '300px'
});
sr.reveal('.col-md-5', {
  duration: 1500,
  origin: 'left',
  distance: '300px'
});
sr.reveal('.my-career', {
  duration: 1500,
  origin: 'bottom'
});
sr.reveal('#about', {
  duration: 1500,
  origin: 'bottom',
  viewFactor: 0.4
});
sr.reveal('#experience .col-md-6', {
  duration: 1500,
  origin: 'bottom',
  distance: '300px',
  viewFactor: 0.1
});
sr.reveal('#skills', {
  duration: 1500,
  origin: 'top',
  distance: '300px',
  viewFactor: 0.1
});
sr.reveal('#education', {
  duration: 1500,
  origin: 'bottom',
  distance: '300px',
  viewFactor: 0.1
});
sr.reveal('#activities', {
  duration: 1500,
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

function arrUp() {
  let arrUpGo;
  arrUpGo = document.getElementById("div1");
  arrUpGo.innerHTML = "&#xf102;";
  setTimeout(function () {
    arrUpGo.innerHTML = "&#xf106;";
  }, 500);
  setTimeout(function () {
    arrUpGo.innerHTML = "&#xf102;";
  }, 1000);
}
arrUp();
setInterval(arrUp, 1500);


// function addIcon(){
//   let icon;
//   icon = document.getElementById("chess-icon");
//   icon.innerHTML = "&#xf448;";
// }
// addIcon();

// When the user scrolls the page, execute myFunction 

window.onscroll = function() {myFunction()};

function myFunction() {
  let winScroll = document.body.scrollTop || document.documentElement.scrollTop;
  let height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
  let scrolled = (winScroll / height) * 100;
  document.getElementById("myBar").style.width = scrolled + "%";
}
